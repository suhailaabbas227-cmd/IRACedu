import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, GraduationCap, ChevronRight } from 'lucide-react';

export default function ThesisGuidance() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-8"
          >
            <GraduationCap className="w-4 h-4" />
            Academic Excellence
          </motion.div>
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
            Thesis & Dissertation Guidance
          </h1>
          <p className="text-white/80 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Professional mentoring from Ph.D. scholars to help you navigate your research journey from topic selection to final defense.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary leading-tight">
                Comprehensive Research Support <br />
                <span className="text-brand-secondary">for Every Milestone</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Writing a thesis or dissertation is the most challenging part of an academic journey. At IRAC, we provide international standard guidance that ensures your work meets the highest scholarly requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Topic Selection & Refinement",
                  "Literature Review Synthesis",
                  "Methodological Framework",
                  "Chapter-wise Mentoring",
                  "Defense Preparation",
                  "Formatting & Citations",
                  "Originality Verification",
                  "Professional Editing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-bl-[100px]" />
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Expert Methodology</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Under the leadership of Engr. Muhammad Ali Shaikh and our Ph.D. mentor network, we apply rigorous standards to your research, ensuring it is both innovative and academically sound.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <ChevronRight className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary">International Standards</h4>
                    <p className="text-sm text-slate-500">We align your work with global academic requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-brand-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <ChevronRight className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary">Time-Bound Support</h4>
                    <p className="text-sm text-slate-500">Strict adherence to your university deadlines.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">Ready to Start Your Research?</h2>
          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-12">
            Connect with our Ph.D. scholars today for a personalized thesis guidance plan.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
            className="bg-white text-brand-primary px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-xl hover:bg-white/90 transition-all shadow-2xl"
          >
            Check Availability
          </button>
        </div>
      </section>
    </div>
  );
}

