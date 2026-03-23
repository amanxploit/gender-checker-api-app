// components/GenderForm.jsx
import React from 'react';

const GenderForm = ({ name, setName, loading, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="bg-white rounded-2xl p-4 shadow-lg">
        <div className="flex gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name (e.g., Aman, Sita)..."
            className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
          >
            {loading ? '...' : 'Check'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default GenderForm;