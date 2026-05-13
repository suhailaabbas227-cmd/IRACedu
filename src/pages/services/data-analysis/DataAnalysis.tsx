import React from 'react';
import { motion } from 'motion/react';
import { Database, BarChart4, PieChart, Activity, Cpu } from 'lucide-react';

export default function DataAnalysis() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-64 h-64 border-b border-r border-white/50" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8"
          >
            <Database className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Advanced Data Analysis <br />
            <span className="text-white/70">& Statistical Support</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            From basic descriptive statistics to complex structural equation modeling, we turn your raw data into meaningful academic insights.
          </p>
        </div>
      </section>

      {/* Software Expertise */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-20">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Technology Stack</h2>
          <div className="w-20 h-1 bg-brand-secondary mx-auto"></div>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto">We utilize industry-leading software to ensure the highest accuracy and reliability in your research results.</p>
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
              <h4 className="text-xl font-bold text-brand-primary">SEM & Pathway Analysis</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Structural Equation Modeling using PLS or Covariance-based approaches to test complex theoretical models.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl font-bold text-brand-primary">Mediation & Moderation</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Testing indirect effects and interaction effects using Process Macro or latent interaction methods.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center">
                <Cpu className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl font-bold text-brand-primary">Machine Learning</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Advanced Python-based analysis for predictive modeling and large datasets in complex research environments.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center">
                <PieChart className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="text-xl font-bold text-brand-primary">Qualitative Analysis</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Thematic analysis and content coding using NVivo or structured manual coding frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Complex Data? <br /> No Problem.</h2>
          <p className="text-slate-400 mb-10">We handle the numbers so you can focus on the research implications.</p>
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

