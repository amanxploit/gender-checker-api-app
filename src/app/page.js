'use client';
import React from 'react';
import GenderForm from '../components/GenderForm';
import GenderResult from '../components/GenderResult';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useGenderChecker } from '../hooks/useGenderChecker';
import '../styles/animations.css';

export default function Home() {
  const { name, setName, genderData, loading, error, checkGender } = useGenderChecker();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <GenderForm
          name={name}
          setName={setName}
          loading={loading}
          onSubmit={checkGender}
        />
        
        <ErrorMessage message={error} />
        
        {loading && <LoadingSpinner />}
        
        {genderData && <GenderResult genderData={genderData} />}

        {/* Developer Credit - Shown when no result */}
        {!genderData && !loading && !error && (
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              Made with ❤️ by{' '}
              <a
                href="https://github.com/amanxploit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Aman Bhagat
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}