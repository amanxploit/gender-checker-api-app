// hooks/useGenderChecker.js
import { useState } from 'react';

export const useGenderChecker = () => {
  const [name, setName] = useState('');
  const [genderData, setGenderData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkGender = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter a name');
      return;
    }

    setLoading(true);
    setError('');
    setGenderData(null);

    try {
      const response = await fetch(
        `https://api.genderize.io/?name=${encodeURIComponent(name)}`
      );
      const data = await response.json();
      
      if (data.gender) {
        setGenderData(data);
      } else {
        setError('Gender could not be determined for this name');
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    genderData,
    loading,
    error,
    checkGender
  };
};