// utils/themes.js
import { Shield, Heart } from 'lucide-react';

export const getTheme = (gender) => {
  if (gender === 'male') {
    return {
      gradientFrom: 'from-blue-400',
      gradientTo: 'to-blue-600',
      linearGradient: 'bg-linear-to-br',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
      accentColor: 'blue',
      accentBg: 'bg-blue-500',
      accentLight: 'bg-blue-100',
      borderGlow: 'shadow-blue-100/50',
      icon: <Shield size={48} className="text-white stroke-[1.5]" />,
      genderIcon: '⚡',
      genderEmoji: '👨',
      statsBg: 'bg-blue-50/50',
      borderColor: 'border-blue-100',
      progressBg: 'bg-blue-200',
      progressFill: 'bg-blue-500',
      shadowGlow: 'shadow-[0_0_8px_rgba(59,130,246,0.4)]',
      accuracyIcon: <Shield size={16} className="text-blue-700" />,
      accuracyText: 'High Confidence',
      accuracyBg: 'bg-blue-50/50',
      accuracyBorder: 'border-blue-100',
      topDecor: 'bg-blue-100/50',
      bottomDecor: 'bg-blue-100/30'
    };
  } else {
    return {
      gradientFrom: 'from-pink-400',
      gradientTo: 'to-pink-600',
      linearGradient: 'bg-linear-to-br',
      lightBg: 'bg-pink-50',
      textColor: 'text-pink-600',
      accentColor: 'pink',
      accentBg: 'bg-pink-500',
      accentLight: 'bg-pink-100',
      borderGlow: 'shadow-pink-100/50',
      icon: <Heart size={48} className="text-white stroke-[1.5]" />,
      genderIcon: '🌸',
      genderEmoji: '👩',
      statsBg: 'bg-pink-50/50',
      borderColor: 'border-pink-100',
      progressBg: 'bg-pink-200',
      progressFill: 'bg-pink-500',
      shadowGlow: 'shadow-[0_0_8px_rgba(236,72,153,0.4)]',
      accuracyIcon: <Heart size={16} className="text-pink-700" />,
      accuracyText: 'High Accuracy',
      accuracyBg: 'bg-pink-50/50',
      accuracyBorder: 'border-pink-100',
      topDecor: 'bg-pink-100/50',
      bottomDecor: 'bg-pink-100/30'
    };
  }
};