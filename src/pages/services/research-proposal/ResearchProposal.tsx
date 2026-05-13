import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Search, Target } from 'lucide-react';

export default function ResearchProposal() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-primary py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 -skew-x-12 transform -translate-x-20" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand-secondary/20 border border-brand-secondary/30 px-4 py-2 rounded-full text-brand-secondary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Target className="w-4 h-4" />
            Precision Planning
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Research & Consultancy Proposal Development
          </h1>
          <p className="text-white/80 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Crafting compelling research & consultancy proposals that secure approvals and demonstrate methodological excellence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 flex flex-col gap-6"
            >
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-primary mb-4">Strategic Framework</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  A strong research proposal is the foundation of any successful professional or Ph.D. journey. We help you articulate your research gap, objectives, and significance with absolute clarity.
                </p>
              </div>
              <div className="bg-brand-primary/5 p-8 rounded-2xl border border-brand-primary/10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-primary mb-4">Methodological Rigor</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  Our experts ensure your chosen methodology—whether qualitative, quantitative, or mixed-methods—is robust and aligned with your research questions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary">
                Secure Your Academic <br />
                <span className="text-brand-secondary">Approval with Confidence</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Clear Problem Statement Development",
                  "Comprehensive Research Gap Analysis",
                  "Well-defined Aims and Objectives",
                  "Detailed Methodological Justification",
                  "Ethical Consideration Framework",
                  "Timeline and Feasibility Mapping",
                  "Advanced Reference Management"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why IRAC Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-16">The IRAC Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl font-bold text-brand-primary mb-3">Gap Discovery</h4>
              <p className="text-slate-500 text-base">We help you identify unique research niche that adds value to the field.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-6 h-6 text-brand-secondary" />
              </div>
              <h4 className="text-xl font-bold text-brand-primary mb-3">Precision Writing</h4>
              <p className="text-slate-500 text-base">Academic writing that is formal, precise, and logically structured.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl font-bold text-brand-primary mb-3">Expert Review</h4>
              <p className="text-slate-500 text-base">Multiple rounds of internal review by Ph.D. scholars before delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-bold text-brand-primary mb-8">Need Help with Your Proposal?</h3>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
            className="bg-brand-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-xl"
          >
            Start Your Proposal Today
          </button>
        </div>
      </section>
    </div>
  );
}

