import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import FileUpload from './components/FileUpload';
import LoadingSpinner from './components/LoadingSpinner';
import SuccessScreen from './components/SuccessScreen';
import { uploadFile, downloadExcel, downloadPDF } from './services/api';
import { downloadFile } from './utils/fileUtils';
import './index.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleGenerateCO = async () => {
    if (!selectedFile) {
      toast.error('Please select a file first');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await uploadFile(selectedFile);

      if (response.success) {
        toast.success(response.message || 'CO Generated Successfully!');
        setIsSuccess(true);
      } else {
        toast.error(response.error || 'Failed to generate CO');
      }
    } catch (error) {
      console.error('Upload error:', error);

      if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error('Failed to process file. Please check the file format.');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownloadExcel = async () => {
    try {
      toast.loading('Preparing Excel file...');
      const blob = await downloadExcel();
      downloadFile(blob, 'CO_Attainment.xlsx');
      toast.dismiss();
      toast.success('Excel file downloaded successfully!');
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to download Excel file');
      console.error('Download error:', error);
    }
  };

  const handleDownloadPDF = async () => {
    try {
      toast.loading('Generating PDF...');
      const blob = await downloadPDF();
      downloadFile(blob, 'CO_Attainment.pdf');
      toast.dismiss();
      toast.success('PDF file downloaded successfully!');
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to download PDF file');
      console.error('Download error:', error);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setIsSuccess(false);
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* iOS-style background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            color: '#1d1d1f',
            borderRadius: '16px',
            padding: '16px 24px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          },
          success: {
            iconTheme: {
              primary: '#34c759',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff3b30',
              secondary: '#fff',
            },
          },
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card ios-blur ios-shadow-lg max-w-4xl w-full relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-10"
        >
          {/* App Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl flex items-center justify-center"
            style={{
              boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)',
            }}
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            CO Attainment Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Upload your CIA and Assessment Excel file
          </p>
        </motion.div>

        {/* Content */}
        <div className="min-h-[400px]">
          {isSuccess ? (
            <SuccessScreen
              onDownloadExcel={handleDownloadExcel}
              onDownloadPDF={handleDownloadPDF}
              onReset={handleReset}
            />
          ) : isProcessing ? (
            <LoadingSpinner message="Processing Excel file..." />
          ) : (
            <>
              <FileUpload
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                isProcessing={isProcessing}
              />

              {selectedFile && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 text-center"
                >
                  <button
                    onClick={handleGenerateCO}
                    disabled={isProcessing}
                    className="ios-button bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">Generate CO Attainment</span>
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 pt-8 border-t border-gray-200/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Required Sheets</p>
                <p className="text-gray-600">CIA and Assessment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-purple-50/50 rounded-2xl">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">Output Formats</p>
                <p className="text-gray-600">Excel (.xlsx) and PDF</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
