import React from 'react';
import { motion } from 'motion/react';
import { Globe, BookOpen, ScrollText, Award } from 'lucide-react';

export default function PublicationSupport() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-16">
        {/* Full Background Image - Highly Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=2070" 
            alt="Publications and Journals"
            className="w-full h-full object-cover opacity-90 saturate-[1.15]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle color overlay to guarantee white text readability while keeping the image fully visible */}
          <div className="absolute inset-0 bg-brand-primary/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-brand-primary/30" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-white flex flex-col items-start text-left">
          <div className="max-w-4xl w-full flex flex-col items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-5 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              Scopus & Web of Science <br />
              <span className="text-white">Publication Support</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-2xl leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Navigating the complex world of high-impact journals. We help you meet international standards and achieve successful publication in indexed journals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">Journal Selection</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                Matching your manuscript with the most appropriate Scopus, WoS, or ESCI-indexed journals to maximize acceptance probability.
              </p>
              <ul className="space-y-2 text-base text-slate-500 font-medium">
                <li>• Impact Factor Analysis</li>
                <li>• Q1-Q4 Ranking Verification</li>
                <li>• Aim & Scope Alignment</li>
              </ul>
            </div>

            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ScrollText className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">Manuscript Prep</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                Professional editing and formatting to ensure your work adheres to strict international submission guidelines.
              </p>
              <ul className="space-y-2 text-base text-slate-500 font-medium">
                <li>• Language Polishing</li>
                <li>• Citation & Ref Formatting</li>
                <li>• Similarity Reports (Turnitin)</li>
              </ul>
            </div>

            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">Peer Review Support</h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                Assistance in responding to reviewer comments and managing the revision process for a successful outcome.
              </p>
              <ul className="space-y-2 text-base text-slate-500 font-medium">
                <li>• Point-by-point Responses</li>
                <li>• Structural Revisions</li>
                <li>• Final Proofreading</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-[40px] p-12 lg:p-20 shadow-sm border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-8 tracking-tight">Our Ethical <br />Commitment</h2>
              <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-8">
                IRAC strictly adheres to COPE (Committee on Publication Ethics) guidelines. We do not support predatory journals or unethical publication practices. Our goal is to enhance the quality of your research so it stands on its own merits in the global scientific community.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-brand-primary/5 border border-brand-primary/10 rounded-full text-brand-primary font-bold text-base">COPE Aligned</div>
                <div className="px-6 py-3 bg-brand-primary/5 border border-brand-primary/10 rounded-full text-brand-primary font-bold text-base">Indexed Focus</div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="h-32 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 font-bold text-brand-primary">SCOPUS</div>
              <div className="h-32 bg-brand-primary text-white rounded-2xl flex items-center justify-center font-bold">WoS (SSCI)</div>
              <div className="h-32 bg-slate-200 text-brand-primary rounded-2xl flex items-center justify-center font-bold">ESCI</div>
              <div className="h-32 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 font-bold text-brand-primary">SCIE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-primary text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8">Achieve Global Visibility</h2>
          <p className="text-white/70 text-base md:text-xl lg:text-2xl mb-12">Let our expert scholars help you get published in the world's most prestigious journals.</p>
          <button 
            onClick={() => window.location.hash = '#/contact'}
            className="bg-white text-brand-primary border-2 border-white hover:bg-transparent hover:text-white px-12 py-5 rounded-none font-bold text-xl shadow-lg transition-all duration-300"
          >
            Submit Your Manuscript
          </button>
        </div>
      </section>
    </div>
  );
}

