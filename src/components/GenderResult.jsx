// components/GenderResult.jsx
import React from 'react';
import { Star, TrendingUp, Crown } from 'lucide-react';
import { getTheme } from '../app/utils/themes';
import SocialLinks from './SocialLinks';

const GenderResult = ({ genderData }) => {
  const theme = getTheme(genderData.gender);
  
  return (
    <div className={`bg-white rounded-[32px] p-8 shadow-xl ${theme.borderGlow} relative overflow-hidden transform transition-all duration-500 animate-fadeIn`}>
      
      {/* Animated Gradient Circles */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 ${theme.topDecor} rounded-full blur-2xl animate-pulse`} />
      <div className={`absolute -bottom-10 -left-10 w-24 h-24 ${theme.bottomDecor} rounded-full blur-xl animate-pulse`} />
      
      {/* Gender Badge */}
      <div className="absolute top-4 right-4">
        <div className={`${theme.lightBg} ${theme.textColor} px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
          <span>{theme.genderIcon}</span>
          <span>{genderData.gender === 'male' ? 'MALE' : 'FEMALE'}</span>
        </div>
      </div>

      {/* Profile Avatar */}
      <div className={`w-24 h-24 bg-linear-to-b ${theme.gradientFrom} ${theme.gradientTo} rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto transform hover:scale-105 transition-transform duration-300`}>
        {theme.icon}
      </div>

      {/* Name Display */}
      <h2 className="text-3xl font-bold text-slate-800 mb-2 text-center capitalize">
        {genderData.name}
      </h2>
      
      {/* Gender Label */}
      <div className={`flex items-center justify-center gap-2 ${theme.lightBg} ${theme.textColor} px-4 py-1 rounded-full text-sm font-medium mb-8 w-fit mx-auto`}>
        <span className={`w-2 h-2 ${theme.accentBg} rounded-full`}></span>
        <span>{theme.genderEmoji} {genderData.gender === 'male' ? 'Male' : 'Female'}</span>
      </div>

      {/* Stats Section */}
      <div className="w-full space-y-4">
        
        {/* Confidence Score */}
        <div className={`${theme.statsBg} p-4 rounded-xl border ${theme.borderColor} hover:shadow-md transition-shadow`}>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <Star size={16} /> Confidence Score
            </div>
            <span className="font-bold text-slate-800">
              {(genderData.probability * 100).toFixed(1)}%
            </span>
          </div>
          <div className={`w-full ${theme.progressBg} h-2.5 rounded-full overflow-hidden`}>
            <div 
              className={`${theme.progressFill} h-full rounded-full transition-all duration-1000 ease-out ${theme.shadowGlow}`}
              style={{ width: `${genderData.probability * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Based on {genderData.count.toLocaleString()} data samples
          </p>
        </div>

        {/* Data Sample Size */}
        <div className={`${theme.statsBg} p-4 rounded-xl border ${theme.borderColor} flex justify-between items-center hover:shadow-md transition-shadow`}>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
            <TrendingUp size={16} /> Data Sample Size
          </div>
          <div className="text-right">
            <span className="font-bold text-slate-800 text-lg">
              {genderData.count.toLocaleString()}
            </span>
            <p className="text-xs text-slate-400">records analyzed</p>
          </div>
        </div>

        {/* Accuracy Rating */}
        <div className={`${theme.accuracyBg} p-4 rounded-xl border ${theme.accuracyBorder} flex items-center gap-3 hover:shadow-md transition-shadow`}>
          {theme.accuracyIcon}
          <div className="flex-1">
            <span className={`font-semibold ${genderData.gender === 'male' ? 'text-blue-800' : 'text-pink-800'} text-sm`}>
              {theme.accuracyText}
            </span>
            <p className="text-xs text-slate-500">
              {genderData.probability > 0.8 
                ? 'Very reliable prediction based on strong data' 
                : 'Moderate reliability - consider additional context'}
            </p>
          </div>
          <Crown size={20} className={genderData.probability > 0.8 ? 'text-yellow-500' : 'text-slate-300'} />
        </div>
        
      </div>

      <SocialLinks />
    </div>
  );
};

export default GenderResult;