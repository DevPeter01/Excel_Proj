# 🔍 Troubleshooting Guide

## Common Issues and Solutions

### ❌ Issue 1: "Missing required sheet: CIA"

**Possible Causes:**
1. Sheet is named differently (e.g., "CIA Marks", "cia", "CIA ")
2. Sheet doesn't exist in the uploaded file

**Solutions:**
1. Open your Excel file
2. Check the exact sheet name at the bottom
3. Rename it to exactly "CIA" (no extra spaces or characters)
4. Save and re-upload

**How to Check:**
- Right-click on the sheet tab
- Select "Rename"
- Type exactly: `CIA`
- Press Enter

---

### ❌ Issue 2: "Missing required sheet: Assessment"

**Same as above, but for Assessment sheet**

**Solution:**
- Rename sheet to exactly: `Assessment`

---

### ❌ Issue 3: "No student data found in CIA sheet"

**Possible Causes:**
1. Headers are not recognized
2. Student data is in wrong format
3. Register numbers are empty

**Solutions:**

**Check Headers:**
Your header row should contain these keywords:
- "S.NO" or "SNO" or "S NO"
- "REGISTER NO" or "REGISTER NUMBER" or "REG NO"
- "NAME" or "NAMES" or "STUDENT NAME"

**Example Good Header:**
```
| S.NO | REGISTER NO | NAME | CO1 | CO2 | CO3 | CO4 | CO5 |
```

**Check Data:**
- Ensure register numbers are not empty
- Data should start immediately after header row
- No completely blank rows between header and data

---

### ❌ Issue 4: "No student data found in Assessment sheet"

**Possible Causes:**
1. No CO columns found in header
2. Register numbers are empty
3. Wrong sheet format

**Solutions:**

**Check Headers:**
Your header row should contain:
- "REGISTER" keyword
- "CO1", "CO2", "CO3", "CO4", "CO5" labels

**Example Good Header:**
```
| REGISTER NO | NAME | CO1 | CO2 | CO3 | CO4 | CO5 | ... |
```

**For Multiple Components:**
```
| REG | NAME | CO1 | CO2 | ... | CO1 | CO2 | ... |
|     |      | Asg1| Asg1|     | Test| Test|     |
```

---

### ❌ Issue 5: "Request failed with status code 400"

**This is a general validation error**

**Steps to Debug:**

1. **Check Server Console**
   - Look at the terminal running `npm run dev` in server folder
   - Read the error message there
   - It will tell you exactly what's wrong

2. **Common 400 Errors:**
   - Missing sheets
   - Empty sheets
   - Wrong file format
   - File too large (>10MB)

3. **Solution:**
   - Fix the issue mentioned in server console
   - Re-upload the file

---

### ❌ Issue 6: Wrong CO Values Calculated

**Possible Causes:**
1. Total marks not detected correctly
2. Some marks are text instead of numbers
3. Formula cells not evaluated

**Solutions:**

**Check CIA Total:**
- Add a row at the end with "Total" or "Total Marks" in the Name column
- Put maximum marks in CO columns

**Example:**
```
| ... | Total Marks | 20 | 20 | 20 | 20 | 20 |
```

**Check Data Types:**
- All marks should be numbers, not text
- Remove any text like "AB" (absent) - use 0 instead
- No formulas - or ensure they're calculated

---

### ❌ Issue 7: Server Not Running

**Symptoms:**
- "Network Error"
- "Cannot connect to server"
- "ERR_CONNECTION_REFUSED"

**Solutions:**

1. **Check if server is running:**
   ```bash
   # Should see: "🚀 Server running on port 5000"
   ```

2. **If not running, start it:**
   ```bash
   cd server
   npm run dev
   ```

3. **Check port 5000 is free:**
   - Close any other apps using port 5000
   - Or change PORT in server/.env

---

### ❌ Issue 8: Frontend Not Loading

**Symptoms:**
- Blank page
- "Cannot GET /"
- Page not found

**Solutions:**

1. **Check if frontend is running:**
   ```bash
   # Should see: "Local: http://localhost:5173/"
   ```

2. **If not running, start it:**
   ```bash
   cd client
   npm run dev
   ```

3. **Clear browser cache:**
   - Press Ctrl+Shift+R (hard refresh)
   - Or clear browser cache

---

## 🔍 How to Debug

### Step 1: Check Server Console
When you upload a file, the server console should show:

**Success:**
```
📤 Processing Excel file...
📊 Extracting CIA data...
✓ Found 30 students in CIA sheet
✓ CIA Total: 20
📊 Extracting Assessment data...
✓ Found 30 students in Assessment sheet
✓ Assessment Total: 50
🧮 Calculating CO attainment...
📝 Generating CO workbook...
✅ CO workbook generated successfully!
```

**Error:**
```
📤 Processing Excel file...
📊 Extracting CIA data...
✓ Found 0 students in CIA sheet
✓ CIA Total: 0
Processing error: No student data found in CIA sheet. Please check the sheet format.
```

### Step 2: Check Browser Console
1. Press F12 to open Developer Tools
2. Go to "Console" tab
3. Look for red error messages
4. Share the error if you need help

### Step 3: Check Network Tab
1. Open Developer Tools (F12)
2. Go to "Network" tab
3. Upload file
4. Click on the failed request
5. Check "Response" tab for error message

---

## 📋 Pre-Upload Checklist

Before uploading your Excel file, verify:

- [ ] File is .xlsx format
- [ ] Contains sheet named "CIA" (exact spelling)
- [ ] Contains sheet named "Assessment" (exact spelling)
- [ ] CIA sheet has headers: S.NO, REGISTER NO, NAME, CO1-CO5
- [ ] Assessment sheet has headers with REGISTER and CO1-CO5
- [ ] Student data starts after header row
- [ ] Register numbers are not empty
- [ ] All marks are numbers (not text)
- [ ] No completely blank rows in student data
- [ ] File size is under 10MB

---

## 🆘 Still Having Issues?

### Collect This Information:

1. **Error Message:**
   - From browser console
   - From server console

2. **Excel File Structure:**
   - Sheet names
   - Header row content
   - Sample data row

3. **What You See:**
   - Screenshot of error
   - Server console output

### Quick Fixes:

**Try This First:**
1. Restart both servers (Ctrl+C, then `npm run dev`)
2. Hard refresh browser (Ctrl+Shift+R)
3. Try a different browser
4. Check file is not corrupted (open in Excel)

**If Nothing Works:**
- Share the error message from server console
- Describe what happens when you upload
- We can adjust the code to handle your specific format

---

## 💡 Tips for Success

1. **Keep Excel Simple:**
   - Don't use merged cells in data area
   - Keep headers in one row
   - Use consistent formatting

2. **Use Standard Names:**
   - "REGISTER NO" not "Reg.No" or "Roll No"
   - "NAME" not "Student Name" or "Names"
   - "CO1" not "CO-1" or "CO 1"

3. **Check Data Quality:**
   - No empty register numbers
   - All marks are numbers
   - No special characters

4. **Test with Small File:**
   - Try with 5-10 students first
   - Once it works, upload full file

---

## 📞 Getting Help

If you're stuck:

1. **Check server console** - most errors are explained there
2. **Read the error message** - it usually tells you what's wrong
3. **Verify Excel format** - compare with examples in EXCEL_FORMAT_GUIDE.md
4. **Share specific error** - exact message from console

---

**Most issues are solved by:**
- Checking sheet names (exact spelling: "CIA" and "Assessment")
- Ensuring headers contain required keywords
- Making sure register numbers are not empty
- Verifying marks are numbers, not text

---

*Last Updated: 2026-02-17*
