import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, GraduationCap, ChevronRight } from 'lucide-react';

export default function ThesisGuidance() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-16">
        {/* Full Background Image - Highly Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070" 
            alt="Thesis study"
            className="w-full h-full object-cover opacity-90 saturate-[1.15]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle color overlay to guarantee white text readability while keeping the image fully visible */}
          <div className="absolute inset-0 bg-brand-primary/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-brand-primary/30" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20 w-full text-white flex flex-col items-start text-left">
          <div className="max-w-4xl w-full flex flex-col items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-5 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              Thesis & Dissertation Guidance
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-2xl leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Professional mentoring from Ph.D. scholars to help you navigate your research & consultancy journey from topic selection to final defense.
            </p>
          </div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
                Comprehensive Research Support <br />
                <span className="text-brand-primary">for Every Milestone</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                Writing a thesis or dissertation is the most challenging part of an academic journey. At IRAC, we provide international standard consultancy & guidance that ensures your work meets the highest scholarly requirements.
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
              <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-6">Expert Methodology</h3>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
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
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <ChevronRight className="w-5 h-5 text-brand-primary" />
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">Ready to Start Your Research or Consultancy?</h2>
          <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12">
            Connect with our Ph.D. scholars today for a personalized thesis guidance plan.
          </p>
          <button 
            onClick={() => window.location.hash = '#/contact'}
            className="bg-white text-brand-primary border-2 border-white hover:bg-transparent hover:text-white px-8 md:px-12 py-4 md:py-5 rounded-none font-bold text-base md:text-xl transition-all duration-300 shadow-2xl"
          >
            Check Availability
          </button>
        </div>
      </section>
    </div>
  );
}

