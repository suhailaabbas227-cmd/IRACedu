import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Search, 
  PencilRuler, 
  Database, 
  Globe, 
  Users,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: "Thesis & Dissertation Guidance",
    description: "Expert mentoring from Ph.D. scholars for your research journey.",
    icon: GraduationCap,
    link: "/services/thesis-guidance",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Research Proposal Development",
    description: "Crafting compelling proposals that secure academic approvals.",
    icon: Search,
    link: "/services/research-proposal",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Instrument Design & Validation",
    description: "Developing valid and reliable research tools and surveys.",
    icon: PencilRuler,
    link: "/services/instrument-design",
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Advanced Data Analysis",
    description: "SEM, SmartPLS, SPSS, Python, and Stata expert analysis.",
    icon: Database,
    link: "/services/data-analysis",
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Scopus & WoS Publication Support",
    description: "International standard support for high-impact journals.",
    icon: Globe,
    link: "/services/publication-support",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Research Training Workshops",
    description: "Capacity building for students and professional researchers.",
    icon: Users,
    link: "/services/research-workshops",
    color: "bg-pink-50 text-pink-600"
  }
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-16">
        {/* Full Background Image - Highly Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2070" 
            alt="Academic workspace"
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
              Academic Research & Consultancy Services
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-2xl leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Insight Research & Academic Consultancy (IRAC) provides a complete suite of professional services to support your scholarly success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={service.link}
                  className="group block p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl transition-all h-full flex flex-col"
                >
                  <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-base md:text-lg mb-8 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-primary font-bold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-8 leading-tight tracking-tight">
            "We work hard to meet our clients' needs by providing academic solutions that adhere to international principles of scholarly excellence."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
              MS
            </div>
            <div className="text-lg md:text-xl font-bold text-brand-primary">Engr. Muhammad Ali Shaikh</div>
            <div className="text-slate-500 text-base md:text-lg">Lead Research Consultant, IRAC</div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-brand-primary/5 border-2 border-brand-primary/10 rounded-[30px] md:rounded-[40px] p-8 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 md:mb-8 tracking-tight">Not Sure Where to Start?</h2>
            <p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Book a free consultation with our PhD consultancy team to discuss your specific research needs.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
              className="bg-brand-primary text-white border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary px-8 md:px-12 py-4 md:py-5 rounded-none font-bold text-base md:text-xl shadow-xl transition-all duration-300"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

