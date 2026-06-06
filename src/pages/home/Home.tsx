import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Edit3, Search, Users, ShieldCheck, 
  MessageSquare, GraduationCap, BarChart3, Clock, Award, FileText
} from 'lucide-react';

const trustFactors = [
  "Led by Active Ph.D. Scholars & Senior Editors",
  "Plagiarism-Free Coaching with Free Turnitin Checkers",
  "100% Client-Consultant Confidentiality Guaranteed",
  "Rigorous Support for Quantitative & Qualitative Research",
  "Aligned with International Academic Writing Standards",
  "Interactive 1-on-1 Mentorship & Continuous Revision Help"
];

const services = [
  {
    title: "Thesis Guidance",
    description: "Personalized support for thesis and dissertation writing from start to finish.",
    icon: GraduationCap
  },
  {
    title: "Proposal Development",
    description: "Expert guidance on developing high-quality research proposals and methodologies.",
    icon: Search
  },
  {
    title: "Instrument Design",
    description: "Professional services for designing and validating research instruments and surveys.",
    icon: Edit3
  },
  {
    title: "Data Analysis",
    description: "Expert analysis using SEM, SmartPLS, SPSS, Python, and Stata for your research.",
    icon: BarChart3
  },
  {
    title: "Publication Support",
    description: "Support for publishing in high-impact Scopus and Web of Science journals.",
    icon: Award
  },
  {
    title: "Training Workshops",
    description: "Research training and capacity-building workshops for students and professionals.",
    icon: Users
  }
];


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-brand-primary pt-20 pb-12">
        {/* Full Background Image - Highly Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
            alt="International Academic Support"
            className="w-full h-full object-cover opacity-90 saturate-[1.15]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle color overlay to guarantee white text readability while keeping the image fully visible */}
          <div className="absolute inset-0 bg-brand-primary/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-brand-primary/30" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-white flex flex-col items-start text-left">
          <div className="max-w-5xl w-full flex flex-col items-start">
            
            {/* Pure text layout with responsive left alignment (no blurry backing panel) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col items-start py-2 mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-5 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                International Standard Work <br />
                <span className="text-white/95">At Your Doorstep</span>
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-3xl leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                Insight Research & Academic Consultancy (IRAC) provides end-to-end support for researchers, students, and professionals. Our expert PhD scholars help you navigate your academic journey with excellence.
              </p>
            </motion.div>

            {/* 6 Trust Points with beautiful, high-impact Glassmorphism effect & larger, clearer text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 w-full">
              {trustFactors.map((factor, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl hover:bg-white/20 hover:border-white/35 transition-all duration-200 shadow-md transform hover:-translate-y-0.5 text-left"
                >
                  <div className="bg-white/25 rounded-full p-2 shrink-0 shadow-sm mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-xs sm:text-sm md:text-base font-bold leading-snug tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] whitespace-normal">{factor}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex">
              <button 
                onClick={() => window.location.hash = '#/contact'}
                className="bg-white text-brand-primary hover:bg-transparent hover:text-white hover:backdrop-blur-md border-2 border-white px-8 py-3.5 rounded-none font-bold text-sm md:text-base transition-all duration-300 shadow-xl inline-block"
              >
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Research & Consultancy Assistance Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" 
                alt="Engr. Muhammad Ali Shaikh - Lead Academic Advisor"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center py-8"
            >
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight tracking-tight">
                  Insight Research & Academic Consultancy (IRAC)
                </h2>
                <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  Led by Engr. Muhammad Ali Shaikh, a distinguished Ph.D. scholar, and a team of experienced professionals. We are committed to delivering research and consultancy services that meet international standards.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => window.location.hash = '#/contact'}
                    className="bg-brand-primary text-white border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary px-10 py-3 rounded-none font-bold text-base transition-all duration-300 shadow-lg inline-block"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-brand-primary overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Our Premium Services</h2>
            <p className="text-slate-400 text-base md:text-lg">Comprehensive academic support tailored to your research needs, from initial draft to final publication.</p>
          </div>
        </div>

        <div className="space-y-12 relative z-10">
          {/* Top Row: Left to Right */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: [0, "-50%"] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-8 whitespace-nowrap"
              style={{ width: "fit-content" }}
            >
              {[...services, ...services].map((service, i) => (
                <div
                  key={i}
                  className="w-[350px] bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white transition-all group shrink-0"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                    <service.icon className="w-6 h-6 text-white group-hover:text-brand-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed whitespace-normal">{service.description}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row: Right to Left */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: ["-50%", 0] }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-8 whitespace-nowrap"
              style={{ width: "fit-content" }}
            >
              {[...services.slice().reverse(), ...services.slice().reverse()].map((service, i) => (
                <div
                  key={i}
                  className="w-[350px] bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white transition-all group shrink-0"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                    <service.icon className="w-6 h-6 text-white group-hover:text-brand-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed whitespace-normal">{service.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ph.D. Scholars Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight tracking-tight">
              Empowering Researchers with Global Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center py-8"
            >
              <div className="space-y-6">
                <div className="space-y-4 md:space-y-6 text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  <p>
                    At IRAC Services, we provide expert research and consultancy support through thesis and dissertation guidance, proposal development, data analysis, instrument validation, publication assistance, and research training. Our team of Ph.D. scholars ensures research integrity, academic excellence, and internationally recognized standards in every project.
                  </p>
                  <p>
                    We guarantee absolute client-consultant confidentiality and intellectual privacy. We ensure that your work is original, your methodology is sound, and your analysis is highly accurate to help you successfully achieve professional publication results globally.
                  </p>
                </div>
                <div className="pt-6 flex">
                  <Link 
                    to="/contact"
                    className="bg-brand-primary text-white border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary px-8 py-3.5 rounded-none font-bold text-sm md:text-base transition-all duration-300 shadow-md inline-block text-center"
                  >
                    Get a Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074" 
                alt="Professional consultation session"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
