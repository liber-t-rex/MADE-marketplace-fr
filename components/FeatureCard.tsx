
import React from 'react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, tag, bgColor, iconColor }) => {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
      <div className={`w-12 h-12 ${bgColor} ${iconColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
        {description}
      </p>
      {tag && (
        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
          {tag}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
