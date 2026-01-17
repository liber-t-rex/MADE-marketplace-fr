
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <a href="/" className="transition-opacity hover:opacity-80">
              <img 
                src="Made.fr.png" 
                alt="Made.fr - Artisans de France" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  // Fallback if image is missing
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-black text-blue-900">Made.fr</span>';
                }}
              />
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Inspiration locale</span>
            <div className="px-5 py-2 text-sm font-bold text-blue-900 bg-blue-50 rounded-full border border-blue-100 animate-pulse">
              Lancement 2026
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
