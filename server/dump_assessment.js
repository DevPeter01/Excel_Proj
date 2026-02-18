import ExcelJS from 'exceljs';
import fs from 'fs';

const filePath = 'C:\\Users\\mrmoh\\OneDrive\\Desktop\\attainment\\2022-23 Attainment.xlsx';
const outPath = 'assessment_dump.txt';

async function dumpAssessment() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    // Find sheet by name or ID. User said "Assessment".
    // List sheets showed "Assessment (id: 9)". 
    const sheet = workbook.getWorksheet('Assessment');

    if (!sheet) {
        console.log("Assessment sheet not found");
        return;
    }

    let output = '';

    // Inspect first 20 rows to find Headers and Max Marks
    for (let i = 1; i <= 20; i++) {
        output += `=== Row ${i} ===\n`;
        const row = sheet.getRow(i);
        row.eachCell((c, col) => {
            if (c.value) {
                output += `[${c.address}]: ${JSON.stringify(c.value)}\n`;
            }
        });
        output += '\n';
    }

    // Also inspect last few columns of a data row (e.g. Row 30)
    // to see "Final CO columns" on the right
    output += '=== Row 30 (Data Sample) ===\n';
    const row30 = sheet.getRow(30);
    row30.eachCell((c, col) => {
        output += `[${c.address}]: ${JSON.stringify(c.value)}\n`;
    });

    fs.writeFileSync(outPath, output);
    console.log('Dump completed.');
}

dumpAssessment();
