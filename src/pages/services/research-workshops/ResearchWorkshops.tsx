import React from 'react';
import { motion } from 'motion/react';
import { Users, Presentation, Lightbulb, TrendingUp } from 'lucide-react';

export default function ResearchWorkshops() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-16 text-white">
        {/* Full Background Image - Highly Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070" 
            alt="Research training and workshops"
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
              Research & Consultancy Training <br />
              <span className="text-white">& Workshops</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-2xl leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Empowering the next generation of researchers & consultants through hands-on training, specialized workshops, and continuous academic mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Learning Pillars Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Workshop Learning Pillars</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Theoretical Foundations", text: "Mastering the core principles of research methodology." },
              { title: "Practical Application", text: "Hands-on training with industry-standard software." },
              { title: "Peer Collaboration", text: "Networking with Ph.D. scholars and professionals." },
              { title: "Global Certification", text: "Recognized certificates for career advancement." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <div className="text-base font-bold">{i + 1}</div>
                </div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{pillar.title}</h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-4">Our Training Specialties</h2>
            <p className="text-slate-500 text-base md:text-lg">Tailored programs for universities, research centers, and individual scholars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-brand-primary/20 transition-colors">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <Presentation className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Systematic Literature Review</h3>
                <p className="text-slate-500 text-base leading-relaxed">Master the art of locating, evaluating, and synthesizing research using PRISMA guidelines and advanced search techniques.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-brand-primary/20 transition-colors">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Qualitative Research Methods</h3>
                <p className="text-slate-500 text-base leading-relaxed">In-depth training on interview techniques, focus groups, and thematic analysis using modern software tools.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-brand-primary/20 transition-colors">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <TrendingUp className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Quantitative Analysis Mastery</h3>
                <p className="text-slate-500 text-base leading-relaxed">Hands-on sessions on SPSS, SmartPLS, and Stata, focusing on practical application rather than just theory.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-brand-primary/20 transition-colors">
              <div className="w-16 h-16 bg-brand-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                <Lightbulb className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Grant & Proposal Writing</h3>
                <p className="text-slate-500 text-base leading-relaxed">Learning how to write winning research proposals for national and international funding agencies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies / CTA */}
      <section className="py-24 bg-brand-primary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 italic">"Empowering Researchers Worldwide"</h2>
          <p className="text-white/70 text-base md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12">
            Join our upcoming international research & consultancy training sessions or request a custom workshop for your institution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.location.hash = '#/contact'}
              className="bg-white text-brand-primary border-2 border-white hover:bg-transparent hover:text-white px-10 py-4 rounded-none font-bold transition-all duration-300"
            >
              Upcoming Schedule
            </button>
            <button 
              onClick={() => window.location.hash = '#/contact'}
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-none font-bold hover:bg-white hover:text-brand-primary transition-all duration-300"
            >
              Custom Workshop Request
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

