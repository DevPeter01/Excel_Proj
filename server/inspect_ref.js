import ExcelJS from 'exceljs';
import path from 'path';

const filePath = 'C:\\Users\\mrmoh\\OneDrive\\Desktop\\attainment\\2022-23 Attainment.xlsx';

async function inspectExcel() {
    const workbook = new ExcelJS.Workbook();
    try {
        await workbook.xlsx.readFile(filePath);
        console.log('Workbook loaded.');

        // Assume first sheet
        const sheet = workbook.worksheets[0];
        console.log(`Sheet Name: ${sheet.name}`);

        // Inspect rows 10 to 15
        [10, 11, 12, 13, 14, 15].forEach(r => {
            const row = sheet.getRow(r);
            const values = [];
            row.eachCell((cell, colNum) => {
                values.push(`[${cell.address}]: ${cell.value}`);
            });
            console.log(`\nRow ${r}:`, values.join(', '));
        });

        // Specifically check D, E, F, G, H headers in Row 11/12
        const checkCols = ['D', 'E', 'F', 'G', 'H'];
        console.log('\nSpecific Columns Check (Row 11):');
        checkCols.forEach(col => {
            const cell = sheet.getCell(`${col}11`);
            console.log(`${col}11: ${cell.value}`);
        });

    } catch (err) {
        console.error('Error:', err.message);
    }
}

inspectExcel();
