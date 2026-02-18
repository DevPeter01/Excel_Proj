# 🚀 Quick Start Guide

## Your Application is READY!

Both servers are currently running:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

---

## 📝 How to Use (3 Simple Steps)

### Step 1: Open the Application
Open your web browser and go to:
```
http://localhost:5173
```

You'll see a beautiful purple gradient page with a white card containing:
- Title: "Academic CO Attainment Generator"
- A drag-and-drop upload zone
- Instructions

### Step 2: Upload Your Excel File
Your Excel file must have these two sheets:
- **CIA** - Contains CIA marks (CO1-CO5)
- **Assessment** - Contains assessment marks

**Upload Methods:**
1. Drag the file into the upload zone, OR
2. Click the upload zone to browse and select

The file will be validated automatically.

### Step 3: Generate and Download
1. Click the **"Generate CO Attainment"** button
2. Wait for processing (you'll see an animated spinner)
3. When complete, you'll see a success screen with:
   - ✅ Success animation
   - 📥 "Download Excel" button
   - 📄 "Download PDF" button

Click either button to download your CO attainment report!

---

## 📊 Sample Excel Structure

### CIA Sheet
```
| Roll No | Name      | CO1 | CO2 | CO3 | CO4 | CO5 |
|---------|-----------|-----|-----|-----|-----|-----|
| 001     | Student 1 | 18  | 19  | 17  | 20  | 18  |
| 002     | Student 2 | 15  | 16  | 14  | 17  | 15  |
| Total   |           | 20  | 20  | 20  | 20  | 20  |
```

### Assessment Sheet
Must have columns for each question/component.
The system will automatically sum:
- CO1 from columns D, J, P, V
- CO2 from columns E, K, Q, W
- CO3 from columns F, L, R, X
- CO4 from columns G, M, S, Y
- CO5 from columns H, N, T, Z

---

## 🎯 What You'll Get

### Excel Output (CO_Attainment.xlsx)
- Institution header
- Department and subject info
- Student-wise CO marks (CO1-CO5)
- Average and attainment level
- Class attainment summary
- Professional formatting with borders

### PDF Output (CO_Attainment.pdf)
- Landscape orientation
- Complete data table
- Institution branding
- Class summary section

---

## 🔄 To Process Another File
After downloading, click **"← Process Another File"** to reset and upload a new file.

---

## ⚠️ Troubleshooting

### File Upload Issues
- **Error: "Only Excel files (.xlsx) are allowed"**
  → Make sure your file has .xlsx extension

- **Error: "Missing required sheet: CIA"**
  → Your Excel file must have a sheet named "CIA"

- **Error: "Missing required sheet: Assessment"**
  → Your Excel file must have a sheet named "Assessment"

- **Error: "File size must be less than 10MB"**
  → Reduce your file size or split into smaller files

### Server Not Running
If you see connection errors:

1. **Check Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   Should show: "🚀 Server running on port 5000"

2. **Check Frontend Server**
   ```bash
   cd client
   npm run dev
   ```
   Should show: "➜ Local: http://localhost:5173/"

---

## 🎨 UI Features to Explore

1. **Drag and Drop**
   - Hover over the upload zone
   - Drag a file over it (watch it highlight!)
   - Drop to upload

2. **Animations**
   - Smooth fade-ins when loading
   - Bouncing dots during processing
   - Checkmark animation on success
   - Button hover effects

3. **Toast Notifications**
   - Success messages (green)
   - Error messages (red)
   - Loading indicators

---

## 📞 Need Help?

Check these files for more details:
- `README.md` - Full documentation
- `PROJECT_SUMMARY.md` - Complete technical details
- `server/` - Backend code
- `client/` - Frontend code

---

## 🎉 You're All Set!

Your Academic CO Attainment Generator is ready to use.

**Next Action:** Open http://localhost:5173 in your browser!

---

*Happy CO Generating! 🎓*
