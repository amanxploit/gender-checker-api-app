// components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
      <p className="text-slate-600">Analyzing name data...</p>
    </div>
  );
};

export default LoadingSpinner;