import React from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, CheckSquare, PencilRuler } from 'lucide-react';

export default function InstrumentDesign() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-brand-secondary text-sm font-bold uppercase tracking-widest mb-6"
            >
              <PencilRuler className="w-5 h-5" />
              Scientific Measurement
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Instrument Design & Validation
            </h1>
            <p className="text-slate-400 text-base md:text-xl lg:text-2xl leading-relaxed">
              Developing valid and reliable research & consultancy tools, surveys, and questionnaires tailored to your specific constructs and study population.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-8 underline decoration-brand-secondary underline-offset-8">Our Rigorous Consultancy Process</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">Construct Definition</h4>
                    <p className="text-slate-600 text-base md:text-lg">Clearly defining the variables and constructs your instrument intends to measure based on existing literature.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">Item Generation</h4>
                    <p className="text-slate-600 text-base md:text-lg">Developing a comprehensive pool of items using appropriate scales (Likert, semantic differential, etc.).</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">Content Validity</h4>
                    <p className="text-slate-600 text-base md:text-lg">Subjecting the items to expert review (CVI) to ensure they accurately represent the construct.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-brand-primary mb-2">Pilot Testing</h4>
                    <p className="text-slate-600 text-base md:text-lg">Running initial tests to assess reliability (Cronbach's Alpha) and refining items for clarity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
                <ShieldCheck className="w-12 h-12 text-brand-primary mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4">Reliability & Validity</h3>
                <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  The quality of your research findings depends entirely on the quality of your instruments. We ensure your tools possess high internal consistency and accurately measure what they claim to measure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckSquare className="w-4 h-4 text-green-600" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2">EFA & CFA</h5>
                  <p className="text-xs text-slate-500">Exploratory and Confirmatory Factor Analysis for structural validity.</p>
                </div>
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="w-4 h-4 text-blue-600" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2">Scale Conversion</h5>
                  <p className="text-xs text-slate-500">Converting and adapting existing international scales to local contexts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-secondary py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-brand-primary">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2">Ensure Your Data is Accurate</h2>
            <p className="text-base md:text-xl font-bold opacity-80 uppercase tracking-tighter">Get a professionally designed research or consultancy instrument today.</p>
          </div>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
            className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Consult Our Experts
          </button>
        </div>
      </section>
    </div>
  );
}

