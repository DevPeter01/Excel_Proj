import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://co-attainment-8508.onrender.com/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Upload and process Excel file
 * @param {File} file - Excel file to upload
 * @returns {Promise} - API response
 */
export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

/**
 * Download generated Excel file
 * @returns {Promise<Blob>} - Excel file blob
 */
export const downloadExcel = async () => {
    const response = await api.get('/download/excel', {
        responseType: 'blob',
    });

    return response.data;
};

/**
 * Download generated PDF file
 * @returns {Promise<Blob>} - PDF file blob
 */
export const downloadPDF = async () => {
    const response = await api.get('/download/pdf', {
        responseType: 'blob',
    });

    return response.data;
};

export default api;
