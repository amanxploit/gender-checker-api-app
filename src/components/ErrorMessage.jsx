// components/ErrorMessage.jsx
import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
      <p className="text-red-600 text-center">{message}</p>
    </div>
  );
};

export default ErrorMessage;