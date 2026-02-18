# 📊 Excel File Format Guide

## Required Sheets

Your Excel file **MUST** contain exactly these two sheets:
1. **CIA** (Continuous Internal Assessment)
2. **Assessment** (End Semester Assessment)

---

## 📝 CIA Sheet Format

### Structure
```
Row 1-3: Optional header information (Institution, Department, etc.)
Row 4+: Student data starting with header row
```

### Required Columns
| Column | Header    | Description                    |
|--------|-----------|--------------------------------|
| A      | Roll No   | Student roll number            |
| B      | Name      | Student name                   |
| C      | CO1       | CIA marks for CO1              |
| D      | CO2       | CIA marks for CO2              |
| E      | CO3       | CIA marks for CO3              |
| F      | CO4       | CIA marks for CO4              |
| G      | CO5       | CIA marks for CO5              |

### Example CIA Sheet
```
┌──────────┬─────────────┬─────┬─────┬─────┬─────┬─────┐
│ Roll No  │ Name        │ CO1 │ CO2 │ CO3 │ CO4 │ CO5 │
├──────────┼─────────────┼─────┼─────┼─────┼─────┼─────┤
│ 21CS001  │ John Doe    │ 18  │ 19  │ 17  │ 20  │ 18  │
│ 21CS002  │ Jane Smith  │ 15  │ 16  │ 14  │ 17  │ 15  │
│ 21CS003  │ Bob Johnson │ 19  │ 18  │ 20  │ 19  │ 20  │
│ 21CS004  │ Alice Brown │ 16  │ 17  │ 15  │ 18  │ 16  │
│ ...      │ ...         │ ... │ ... │ ... │ ... │ ... │
├──────────┼─────────────┼─────┼─────┼─────┼─────┼─────┤
│ Total    │             │ 20  │ 20  │ 20  │ 20  │ 20  │
└──────────┴─────────────┴─────┴─────┴─────┴─────┴─────┘
```

### Important Notes
- **Total Row**: Include a row with "Total" in the Name column and maximum marks for each CO
- **Data Types**: Roll numbers can be text or numbers, marks must be numbers
- **Missing Data**: Use 0 for absent students, not blank cells
- **Column Order**: Must follow the exact order shown above

---

## 📊 Assessment Sheet Format

### Structure
The Assessment sheet contains marks from multiple components (assignments, tests, etc.)

### Column Mapping for CO Calculation

The system automatically calculates CO totals by summing specific columns:

#### CO1 Calculation
**Columns**: D + J + P + V (4th, 10th, 16th, 22nd columns)
```
Component 1 (Col D) + Component 2 (Col J) + Component 3 (Col P) + Component 4 (Col V) = CO1 Total
```

#### CO2 Calculation
**Columns**: E + K + Q + W (5th, 11th, 17th, 23rd columns)
```
Component 1 (Col E) + Component 2 (Col K) + Component 3 (Col Q) + Component 4 (Col W) = CO2 Total
```

#### CO3 Calculation
**Columns**: F + L + R + X (6th, 12th, 18th, 24th columns)
```
Component 1 (Col F) + Component 2 (Col L) + Component 3 (Col R) + Component 4 (Col X) = CO3 Total
```

#### CO4 Calculation
**Columns**: G + M + S + Y (7th, 13th, 19th, 25th columns)
```
Component 1 (Col G) + Component 2 (Col M) + Component 3 (Col S) + Component 4 (Col Y) = CO4 Total
```

#### CO5 Calculation
**Columns**: H + N + T + Z (8th, 14th, 20th, 26th columns)
```
Component 1 (Col H) + Component 2 (Col N) + Component 3 (Col T) + Component 4 (Col Z) = CO5 Total
```

### Example Assessment Sheet Layout
```
┌────┬──────┬──────┬───────────────────────────────────────────────────┐
│ A  │  B   │  C   │  D   E   F   G   H   I   J   K   L   M   N   ... │
├────┼──────┼──────┼───────────────────────────────────────────────────┤
│Roll│ Name │ Reg  │ CO1  CO2  CO3  CO4  CO5  ... (Component 1)        │
├────┼──────┼──────┼───────────────────────────────────────────────────┤
│001 │ John │ 123  │  5    6    7    8    9   ...                      │
│002 │ Jane │ 124  │  4    5    6    7    8   ...                      │
└────┴──────┴──────┴───────────────────────────────────────────────────┘
```

### Column Headers (Suggested)
```
A: Roll No
B: Name
C: Register No (optional)
D: Q1a (CO1)
E: Q1b (CO2)
F: Q1c (CO3)
G: Q1d (CO4)
H: Q1e (CO5)
I: (Any other data)
J: Q2a (CO1)
K: Q2b (CO2)
L: Q2c (CO3)
M: Q2d (CO4)
N: Q2e (CO5)
... and so on
```

---

## 🔢 CO Calculation Formula

### Final CO Score
```
FINAL_CO = (50 × CIA_CO / CIA_TOTAL) + (50 × ASSESSMENT_CO / ASSESSMENT_TOTAL)
```

### Example Calculation

**Student: John Doe**

**CIA Data:**
- CO1: 18/20
- CIA Total: 20

**Assessment Data:**
- CO1 Component 1 (Col D): 5
- CO1 Component 2 (Col J): 6
- CO1 Component 3 (Col P): 7
- CO1 Component 4 (Col V): 8
- **CO1 Total**: 5 + 6 + 7 + 8 = 26
- **Assessment Total**: 40 (maximum possible)

**Final CO1 Calculation:**
```
CIA Part = 50 × (18/20) = 50 × 0.9 = 45.00
Assessment Part = 50 × (26/40) = 50 × 0.65 = 32.50
Final CO1 = 45.00 + 32.50 = 77.50
```

**Percentage**: 77.50%
**Attainment Level**: 3 (since 77.50% > 70%)

---

## 📈 Attainment Levels

| Percentage | Level | Description |
|------------|-------|-------------|
| > 70%      | 3     | Excellent   |
| > 65%      | 2     | Good        |
| > 60%      | 1     | Satisfactory|
| ≤ 60%      | 0     | Needs Improvement |

---

## ✅ Validation Checklist

Before uploading your Excel file, ensure:

- [ ] File is in .xlsx format
- [ ] Contains sheet named "CIA" (exact spelling)
- [ ] Contains sheet named "Assessment" (exact spelling)
- [ ] CIA sheet has Roll No, Name, CO1-CO5 columns
- [ ] Assessment sheet has data in specified columns
- [ ] All marks are numbers (not text)
- [ ] No completely empty rows in student data
- [ ] Total row is present in CIA sheet
- [ ] File size is under 10MB

---

## 🚫 Common Errors

### Error: "Missing required sheet: CIA"
**Cause**: Sheet is not named exactly "CIA"
**Solution**: Rename sheet to "CIA" (case-sensitive)

### Error: "Missing required sheet: Assessment"
**Cause**: Sheet is not named exactly "Assessment"
**Solution**: Rename sheet to "Assessment" (case-sensitive)

### Error: "No student data found in CIA sheet"
**Cause**: Empty sheet or incorrect format
**Solution**: Ensure data starts from row 2 or later with proper headers

### Error: "Invalid columns"
**Cause**: Missing required columns
**Solution**: Verify Roll No, Name, and CO1-CO5 columns exist

---

## 💡 Tips for Best Results

1. **Use Consistent Formatting**
   - Keep roll numbers in the same format
   - Use proper student names
   - Ensure marks are numeric

2. **Include Total Row**
   - Add a "Total" row at the end of CIA sheet
   - Specify maximum marks for each CO

3. **Handle Absent Students**
   - Use 0 for absent students
   - Don't leave cells blank

4. **Check Data Types**
   - Marks should be numbers, not text
   - Roll numbers can be text or numbers

5. **Verify Column Positions**
   - Assessment sheet columns must be in correct positions
   - Use the column mapping guide above

---

## 📥 Sample Template

A sample Excel template with the correct structure:

### CIA Sheet Template
```excel
Row 1: [Institution Name]
Row 2: [Department Name]
Row 3: [Subject Name | Academic Year]
Row 4: Roll No | Name | CO1 | CO2 | CO3 | CO4 | CO5
Row 5+: [Student Data]
Last Row: Total | | 20 | 20 | 20 | 20 | 20
```

### Assessment Sheet Template
```excel
Row 1: [Headers]
Row 2+: Roll No | Name | Reg | D | E | F | G | H | I | J | K | L | M | N | ...
```

---

## 🎯 Quick Reference

### CIA Sheet
- **Columns**: A (Roll), B (Name), C-G (CO1-CO5)
- **Total Row**: Required at bottom
- **Format**: Simple table with headers

### Assessment Sheet
- **Columns**: A (Roll), B (Name), D-H, J-N, P-T, V-Z (CO components)
- **Calculation**: Automatic sum of specified columns
- **Format**: Multi-component assessment table

---

## 📞 Need Help?

If your Excel file doesn't work:

1. Check sheet names (exact spelling: "CIA" and "Assessment")
2. Verify column positions
3. Ensure data types are correct
4. Check for empty rows or cells
5. Verify file size is under 10MB

---

*This guide ensures your Excel file is compatible with the CO Attainment Generator.*
