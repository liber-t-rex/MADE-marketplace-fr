
import React from 'react';
import { 
  ShoppingBag, 
  Brain, 
  Globe, 
  Users, 
  Search, 
  Layers, 
  FileText, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';

const App: React.FC = () => {
  const TALLY_URL = "https://tally.so/r/lbD7Vk";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob"></div>
          <div className="absolute top-[0%] right-[10%] w-[500px] h-[500px] bg-red-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-10 shadow-sm">
            <Sparkles size={14} className="animate-spin-slow" />
            L'excellence française réinventée
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-950 mb-10 leading-[1.1] max-w-5xl mx-auto">
            Une place de marché intégrée <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-red-600">
              pour le Fabriquer en France
            </span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light italic border-l-4 border-blue-600 pl-8 py-2 bg-slate-50/50 rounded-r-xl text-left md:text-center">
              "Il s'agit du marketplace le moins cher au monde, juste pour vous les Français. 
              On ne pourra plus dire qu'on ne sait pas où se trouve le made in France."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <a 
              href="mailto:we@made.fr"
              className="px-12 py-5 bg-blue-900 text-white font-black text-lg rounded-2xl hover:bg-blue-800 transition-all shadow-2xl hover:-translate-y-1 active:scale-95 text-center min-w-[240px]"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Les 8 Piliers de l'Écosystème Made.fr</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              Amazon, Tiktok, Instagram, Meta ads, Service-après-vente, SEO/GEO, Influencers, UGC, fournisseurs et prestataires locaux sont tous regroupés sur une seule plateforme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<ShoppingBag size={24} />} 
              title="Marketplace B2B/B2C"
              description="La double orientation B2B et B2C de la plateforme représente un avantage majeur pour les fabricants et fournisseurs locaux"
              bgColor="bg-blue-100"
              iconColor="text-blue-700"
            />

            <FeatureCard 
              icon={<Globe size={24} />} 
              title="Hub Multicanal"
              description="Synchronisation automatisée des stocks et ventes entre Made.fr, TikTok Shop, Instagram Shop et Amazon ou votre propre boutique e-commerce. Une seule interface."
              bgColor="bg-purple-100"
              iconColor="text-purple-700"
            />

            <FeatureCard 
              icon={<Brain size={24} />} 
              title="IA Intégrée"
              description="Génération automatique de posts, vidéos et storytelling. Compréhension sémantique de votre métier pour valoriser votre savoir-faire."
              bgColor="bg-indigo-100"
              iconColor="text-indigo-700"
            />

            <FeatureCard 
              icon={<Search size={24} />} 
              title="Optimisation GEO"
              description="Structure vos données pour apparaître en priorité dans les réponses de l'IA (ChatGPT, Gemini). Gain de visibilité estimé +40%."
              bgColor="bg-rose-100"
              iconColor="text-rose-700"
            />

            <FeatureCard 
              icon={<Users size={24} />} 
              title="Réseau d'Influence"
              description="Marketplace d'influenceurs intégrée. Négociation, contrats et calcul du ROI automatisés pour vos campagnes."
              bgColor="bg-orange-100"
              iconColor="text-orange-700"
            />

            <FeatureCard 
              icon={<MessageSquare size={24} />} 
              title="SAV & CRM"
              description="Ticketing intelligent et collecte de preuves automatisée. Programme de fidélité avancé pour maximiser la LTV."
              bgColor="bg-cyan-100"
              iconColor="text-cyan-700"
            />

            <FeatureCard 
              icon={<FileText size={24} />} 
              title="Gestion & RSE"
              description="Facturation automatique, gestion des impôts et mesure de l'empreinte carbone (Scope 3). Pilotez par la donnée."
              bgColor="bg-emerald-100"
              iconColor="text-emerald-700"
            />

            <FeatureCard 
              icon={<Layers size={24} />} 
              title="Supply Chain"
              description="Index Fournisseurs certifiés et Passeport Digital (DPP) pour une traçabilité complète de la matière première."
              bgColor="bg-slate-200"
              iconColor="text-slate-800"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-800 skew-x-12 translate-x-1/2 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl font-black mb-6">Prêt à rejoindre la révolution du Made in France ?</h2>
              <p className="text-blue-100 text-xl font-light mb-0">
                L'ouverture des inscriptions aux artisans et créateurs commence bientôt. Ne manquez pas le virage technologique de 2026.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95 text-center"
              >
                Réserver mon accès prioritaire
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
