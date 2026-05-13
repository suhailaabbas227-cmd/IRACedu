import React from 'react';
import { motion } from 'motion/react';
import { Users, Presentation, Lightbulb, TrendingUp } from 'lucide-react';

export default function ResearchWorkshops() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              Capacity Building
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-8 tracking-tight">
              Research Training <br />
              <span className="text-brand-secondary">& Workshops</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Empowering the next generation of researchers through hands-on training, specialized workshops, and continuous academic mentorship.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-brand-primary/5 rounded-[40px] rotate-3 absolute inset-0 -z-10" />
            <div className="aspect-square bg-white rounded-[40px] shadow-2xl border border-slate-100 flex items-center justify-center p-12">
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="space-y-2 text-center">
                  <div className="text-4xl font-bold text-brand-primary">500+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">Trained</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="text-4xl font-bold text-brand-secondary">50+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">Workshops</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="text-4xl font-bold text-slate-900">12+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">Countries</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="text-4xl font-bold text-brand-primary">98%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Training Specialties</h2>
            <p className="text-slate-500">Tailored programs for universities, research centers, and individual scholars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-brand-primary/20 transition-colors">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <Presentation className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">Systematic Literature Review</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Master the art of locating, evaluating, and synthesizing research using PRISMA guidelines and advanced search techniques.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-brand-primary/20 transition-colors">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">Qualitative Research Methods</h3>
                <p className="text-slate-500 text-sm leading-relaxed">In-depth training on interview techniques, focus groups, and thematic analysis using modern software tools.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-brand-primary/20 transition-colors">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <TrendingUp className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">Quantitative Analysis Mastery</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Hands-on sessions on SPSS, SmartPLS, and Stata, focusing on practical application rather than just theory.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-brand-primary/20 transition-colors">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <Lightbulb className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">Grant & Proposal Writing</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Learning how to write winning research proposals for national and international funding agencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies / CTA */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"Empowering Researchers Worldwide"</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
            Join our upcoming international research training sessions or request a custom workshop for your institution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
              className="bg-white text-brand-primary px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors"
            >
              Upcoming Schedule
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
              className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
            >
              Custom Workshop Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

