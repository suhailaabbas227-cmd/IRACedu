import React from 'react';
import { motion } from 'motion/react';
import { BarChart4, PieChart, Activity, Cpu } from 'lucide-react';

export default function DataAnalysis() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-16">
        {/* Full Background Image - Highly Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
            alt="Data analytics graphs"
            className="w-full h-full object-cover opacity-90 saturate-[1.15]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle color overlay to guarantee white text readability while keeping the image fully visible */}
          <div className="absolute inset-0 bg-brand-primary/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-brand-primary/30" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-white flex flex-col items-start text-left">
          <div className="max-w-4xl w-full flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 text-white/95 text-xs md:text-sm font-extrabold mb-4 tracking-widest uppercase"
            >
              <BarChart4 className="w-4 h-4" />
              Statistical Analysis
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-5 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              Advanced Data Analysis & Consultancy <br />
              <span className="text-white">& Statistical Support</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-2xl leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              From basic descriptive statistics to complex structural equation modeling, we turn your raw data into meaningful academic & professional insights.
            </p>
          </div>
        </div>
      </section>

      {/* Software Expertise */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-4">Our Technology Stack</h2>
          <div className="w-20 h-1 bg-brand-primary mx-auto"></div>
          <p className="text-slate-500 mt-6 text-base md:text-lg max-w-2xl mx-auto">We utilize industry-leading software to ensure the highest accuracy and reliability in your research & consultancy results.</p>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: "SmartPLS", color: "bg-orange-50 text-orange-600" },
              { name: "SPSS", color: "bg-blue-50 text-blue-600" },
              { name: "Python", color: "bg-yellow-50 text-yellow-700" },
              { name: "Stata", color: "bg-indigo-50 text-indigo-600" },
              { name: "AMOS", color: "bg-red-50 text-red-600" }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={tech.color + " p-6 rounded-2xl font-bold flex items-center justify-center border border-current/10 shadow-sm"}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Services */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center">
                <BarChart4 className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-brand-primary">SEM & Pathway Analysis</h4>
              <p className="text-slate-500 text-base leading-relaxed">
                Structural Equation Modeling using PLS or Covariance-based approaches to test complex theoretical models.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-brand-primary">Mediation & Moderation</h4>
              <p className="text-slate-500 text-base leading-relaxed">
                Testing indirect effects and interaction effects using Process Macro or latent interaction methods.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center">
                <Cpu className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-brand-primary">Machine Learning</h4>
              <p className="text-slate-500 text-base leading-relaxed">
                Advanced Python-based analysis for predictive modeling and large datasets in complex research & consultancy environments.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center">
                <PieChart className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-brand-primary">Qualitative Analysis</h4>
              <p className="text-slate-500 text-base leading-relaxed">
                Thematic analysis and content coding using NVivo or structured manual coding frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Complex Data? <br /> No Problem.</h2>
          <p className="text-slate-400 text-base md:text-lg mb-10">We handle the numbers so you can focus on the research & consultancy implications.</p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
            className="bg-brand-primary text-white px-12 py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-colors shadow-lg"
          >
            Get a Quote for Analysis
          </button>
        </div>
      </section>
    </div>
  );
}

