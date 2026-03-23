// components/SocialLinks.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { socialLinks, developerInfo } from '../app/utils/constants';

const SocialLinks = () => {
  return (
    <div className="mt-6 pt-4 border-t border-slate-100">
      <p className="text-xs text-slate-500 text-center mb-3">Connect with the Developer</p>
      <div className="flex justify-center gap-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              title={social.name}
            >
              <IconComponent size={18} className="text-slate-600 group-hover:text-current transition-colors" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {social.name}
              </span>
            </a>
          );
        })}
      </div>
      <div className="mt-3 text-center">
        <a
          href={developerInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 transition-colors"
        >
          <span>Made with ❤️ by {developerInfo.name}</span>
          <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;