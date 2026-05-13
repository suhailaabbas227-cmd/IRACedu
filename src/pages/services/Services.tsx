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
      <section className="bg-brand-primary py-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Academic Research & Consultancy Services</h1>
          <p className="text-white/80 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Insight Research & Academic Consultancy (IRAC) provides a complete suite of professional services to support your scholarly success.
          </p>
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
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors">
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
            <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 text-brand-secondary">
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
          <div className="bg-brand-secondary/10 border-2 border-brand-secondary/20 rounded-[30px] md:rounded-[40px] p-8 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 md:mb-8 tracking-tight">Not Sure Where to Start?</h2>
            <p className="text-slate-600 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Book a free consultation with our PhD consultancy team to discuss your specific research needs.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
              className="bg-brand-primary text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-xl shadow-xl hover:scale-105 transition-transform"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

