import ExcelJS from 'exceljs';
import fs from 'fs';

const filePath = 'C:\\Users\\mrmoh\\OneDrive\\Desktop\\attainment\\2022-23 Attainment.xlsx';
const outPath = 'extended_dump.txt';

async function dumpExtended() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    let output = '';

    // 1. Inspect Assessment Sheet (Columns AB to BD)
    const assessSheet = workbook.getWorksheet('Assessment');
    if (assessSheet) {
        output += '=== ASSESSMENT SHEET (Cols 28-60) ===\n';
        // Header rows 10-14
        [10, 11, 12, 13, 14].forEach(r => {
            output += `Row ${r}:\n`;
            for (let c = 28; c <= 60; c++) {
                const cell = assessSheet.getCell(r, c);
                if (cell.value) {
                    output += `  [${cell.address}]: ${JSON.stringify(cell.value)}\n`;
                }
            }
        });
    }

    // 2. Inspect CIA Sheet (Find CO headers and Next Row)
    const ciaSheet = workbook.getWorksheet('CIA '); // Note space 'CIA ' from list_sheets
    // Try 'CIA' if 'CIA ' fails
    const ciaSheetAlt = workbook.getWorksheet('CIA');
    const targetCia = ciaSheet || ciaSheetAlt;

    if (targetCia) {
        output += '\n=== CIA SHEET ===\n';
        // Inspect first 20 rows
        for (let r = 1; r <= 20; r++) {
            const row = targetCia.getRow(r);
            let rowStr = '';
            row.eachCell((c) => {
                rowStr += `[${c.address}]: ${c.value} | `;
            });
            if (rowStr.length > 5) output += `Row ${r}: ${rowStr}\n`;
        }
    } else {
        output += '\nCIA Sheet not found.\n';
    }

    fs.writeFileSync(outPath, output);
    console.log('Dump completed.');
}

dumpExtended();
