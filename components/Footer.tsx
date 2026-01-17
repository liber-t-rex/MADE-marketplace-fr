
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="Made.fr.png" 
                alt="Made.fr" 
                className="h-12 w-auto brightness-0 invert" 
                onError={(e) => {
                   e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-2xl font-black text-white tracking-tight">Made.fr</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg font-light">
              La plateforme technologique souveraine qui redonne le pouvoir aux créateurs, artisans et producteurs français.
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Partenaires stratégiques</span>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="transition-transform hover:scale-105">
                <img 
                  src="logo cci.png" 
                  alt="CCI Paris" 
                  className="h-16 w-auto object-contain rounded-xl shadow-lg border border-slate-800"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if(parent) parent.innerHTML = '<div class="bg-blue-600 px-4 py-2 rounded-full text-white font-bold text-sm">CCI Paris</div>';
                  }}
                />
              </div>
              <div className="transition-transform hover:scale-105">
                <img 
                  src="summit 2026 impact.jpg" 
                  alt="World Impact Summit" 
                  className="h-16 w-auto object-contain rounded-xl shadow-lg border border-slate-800"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if(parent) parent.innerHTML = '<div class="bg-indigo-600 px-4 py-2 rounded-full text-white font-bold text-sm">World Impact Summit</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium">
          <p className="order-2 md:order-1">&copy; 2026 Made.fr — Tous droits réservés.</p>
          <div className="flex items-center gap-8 order-1 md:order-2">
            <a href="mailto:we@made.fr" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <p className="flex items-center gap-2">
              Bâtit avec <span className="text-red-500 animate-pulse">❤</span> en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
