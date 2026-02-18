# Academic CO Attainment Generator

A full-stack web application for generating Course Outcome (CO) attainment reports from CIA and Assessment Excel files.

## 🎯 Features

- **Excel File Upload**: Drag-and-drop interface for uploading structured Excel files
- **Automatic Processing**: Reads CIA and Assessment sheets, applies academic attainment logic
- **CO Calculation**: Implements exact formula: `FINAL_CO = (50 * CIA_CO / CIA_TOTAL) + (50 * ASSESSMENT_CO / ASSESSMENT_TOTAL)`
- **Attainment Levels**: Automatically calculates levels based on percentage thresholds
- **Multiple Export Formats**: Download results as Excel (.xlsx) or PDF
- **Preserved Formatting**: Maintains Excel formatting, merged cells, borders, and fonts
- **Modern UI**: Clean, responsive interface with smooth animations

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- TailwindCSS
- Axios
- React Dropzone
- React Hot Toast
- Framer Motion

### Backend
- Node.js
- Express
- Multer (file upload)
- ExcelJS (Excel processing)
- Puppeteer (PDF generation)
- CORS
- dotenv

## 📁 Project Structure

```
attainment/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── .env               # Environment variables
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── controllers/       # Request handlers
    ├── routes/           # API routes
    ├── services/         # Business logic
    ├── utils/            # Utility functions
    ├── middleware/       # Express middleware
    ├── server.js         # Server entry point
    ├── .env              # Environment variables
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd attainment
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the Frontend (in a new terminal)**
   ```bash
   cd client
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 📊 Excel File Requirements

### Required Sheets
Your Excel file must contain two sheets:
1. **CIA** - Contains CIA marks for CO1-CO5
2. **Assessment** - Contains assessment marks

### CIA Sheet Structure
- Column A: Roll Number
- Column B: Student Name
- Columns C-G: CO1, CO2, CO3, CO4, CO5 marks

### Assessment Sheet Structure
The system calculates CO totals from specific columns:
- **CO1** = D + J + P + V (columns 4, 10, 16, 22)
- **CO2** = E + K + Q + W (columns 5, 11, 17, 23)
- **CO3** = F + L + R + X (columns 6, 12, 18, 24)
- **CO4** = G + M + S + Y (columns 7, 13, 19, 25)
- **CO5** = H + N + T + Z (columns 8, 14, 20, 26)

## 📈 Attainment Calculation Logic

### Final CO Formula
```
FINAL_CO = (50 * CIA_CO / CIA_TOTAL) + (50 * ASSESSMENT_CO / ASSESSMENT_TOTAL)
```

### Attainment Levels
- **Level 3**: > 70%
- **Level 2**: > 65%
- **Level 1**: > 60%
- **Level 0**: ≤ 60%

### Class Attainment
- Calculates number of students above 60%
- Determines percentage above target
- Assigns final attainment level per CO

## 📄 Generated Output

### CO Sheet (Excel)
- Institution header
- Department and subject information
- Student-wise CO marks (CO1-CO5)
- Average and attainment level
- Class attainment summary
- Professional formatting with borders and styling

### PDF Report
- Landscape orientation
- Complete student data table
- Class attainment summary
- Institution branding

## 🔧 Configuration

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🎨 UI Features

- **Drag & Drop Upload**: Intuitive file upload interface
- **Real-time Validation**: Instant feedback on file selection
- **Loading States**: Animated loading indicators
- **Success Animations**: Smooth transitions and celebrations
- **Error Handling**: Clear error messages with toast notifications
- **Responsive Design**: Works on desktop and mobile devices

## 🛡️ Error Handling

The application handles various error scenarios:
- Missing required sheets
- Empty sheets
- Invalid file formats
- File size limits (10MB max)
- Server errors
- Network issues

All errors are displayed with user-friendly messages.

## 📦 Production Build

### Frontend
```bash
cd client
npm run build
```

### Backend
```bash
cd server
npm start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT License

## 👨‍💻 Author

Created for academic institutions to streamline CO attainment reporting.

---

**Note**: This is a production-ready application. Ensure all dependencies are installed and environment variables are configured before deployment.
