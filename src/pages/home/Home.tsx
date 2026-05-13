import { motion } from 'motion/react';
import { 
  CheckCircle2, Edit3, BookOpen, Search, CheckSquare, Users, ShieldCheck, 
  MessageSquare, GraduationCap, BarChart3, Stethoscope, Briefcase, Laptop, 
  Dna, Scale, Palette, Beaker, Leaf, Radio, Clock, Award, FileText
} from 'lucide-react';

const subjects = [
  { name: "Medical & Health Sciences", icon: Stethoscope },
  { name: "Business & Management", icon: Briefcase },
  { name: "IT & Computer Science", icon: Laptop },
  { name: "Life Sciences & Biology", icon: Dna },
  { name: "Economics & Finance", icon: BarChart3 },
  { name: "Social Sciences & Law", icon: Scale },
  { name: "Arts & Humanities", icon: Palette },
  { name: "Physical Sciences", icon: Beaker },
  { name: "Environmental Science", icon: Leaf },
  { name: "Media & Communication", icon: Radio },
];

const features = [
  "Thesis & Dissertation Guidance",
  "Research Proposal Development",
  "Instrument Design & Validation",
  "SPSS | SmartPLS | Python | Stata Analysis",
  "Scopus & WoS Publication Support",
  "Research Training Workshops"
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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070" 
            alt="Academic background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-primary/70"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl"
          >
            <p className="text-white text-base md:text-lg font-bold mb-4 tracking-tight">
              International Standard Research & Consultancy Services
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 md:mb-10 tracking-tight">
              International Standard Work — <br />
              <span className="text-white">At Your Doorstep</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-3xl leading-relaxed font-bold"
            >
              Insight Research & Academic Consultancy (IRAC) provides end-to-end support for researchers, students, and professionals. Our expert PhD scholars help you navigate your academic journey with excellence.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-white/10 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-base font-bold leading-tight">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                className="bg-white text-brand-primary px-10 py-4 rounded-xl font-bold text-base transition-all hover:bg-slate-100 shadow-xl inline-block"
              >
                Chat Now
              </button>
            </div>
          </motion.div>
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
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=2070" 
                alt="Expert academic advisor with student"
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
                  Led by Engr. Muhammad Ali Shaikh and a team of professional Ph.D. Scholars, we ensure your research & consultancy work is of international standard.
                </p>
                <div className="pt-2">
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                    className="bg-brand-primary text-white px-10 py-3 rounded-md font-bold text-base transition-all hover:bg-brand-primary/90 shadow-lg inline-block"
                  >
                    Chat Now
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
                    At IRAC Services, we believe that academic excellence is reachable with the right guidance. Our team of Ph.D. scholars provides specialized consultancy for thesis guidance, proposal development, and complex data analysis.
                  </p>
                  <p>
                    Whether you are working on a dissertation or a high-impact journal article, we provide the tools and expertise to ensure your work meets the rigorous standards of Scopus and Web of Science publications.
                  </p>
                </div>
                <div className="pt-4">
                  <a 
                    href="/contact"
                    className="bg-brand-primary text-white px-10 py-3 rounded-md font-bold text-base transition-all hover:bg-brand-primary/90 shadow-md inline-block"
                  >
                    Get a Free Consultation
                  </a>
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

      {/* Subjects Section */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive Consultancy Across Disciplines
            </h2>
            <p className="text-white/70 text-base md:text-lg font-medium">Expert guidance available for every professional and academic field.</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Row 1: Left to Right */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: [0, -1920] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...subjects, ...subjects, ...subjects].map((subject, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group flex flex-col items-center text-center min-w-[220px]"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                    <subject.icon className="w-6 h-6 text-white group-hover:text-brand-primary transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base leading-tight">
                    {subject.name}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex overflow-hidden">
            <motion.div 
              animate={{ x: [-1920, 0] }}
              transition={{ 
                duration: 45, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...subjects.slice().reverse(), ...subjects.slice().reverse(), ...subjects.slice().reverse()].map((subject, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all group flex flex-col items-center text-center min-w-[220px]"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                    <subject.icon className="w-6 h-6 text-white group-hover:text-brand-primary transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base leading-tight">
                    {subject.name}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16 text-center relative z-10">
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Our expertise spans across all major academic and professional disciplines, ensuring tailored consultation for your specific goals.
          </p>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[400px] lg:min-h-[500px]"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165833767-027ffea702be?auto=format&fit=crop&q=80&w=2070" 
                  alt="International Research and Professional Standards" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Security Badge Overlay */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-blue-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#162447] font-bold text-sm">Intellectual Privacy</p>
                  </div>
                </div>
              </div>
              {/* Decorative background shape */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full -z-10 blur-2xl"></div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center py-8"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-tight tracking-tight">
                    International Research & Consultancy Standards
                  </h2>
                  <div className="w-20 h-1.5 bg-brand-primary rounded-full"></div>
                </div>
                
                <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  Research & Consultancy integrity is at the heart of IRAC. We ensure your work is original, methodology is sound, and analysis is accurate.
                </p>
                
                <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed">
                  Our consultancy respects your intellectual property and helps you achieve professional publication results globally.
                </p>

                <div className="pt-4">
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                    className="bg-brand-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group max-w-fit"
                  >
                    <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Chat Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
