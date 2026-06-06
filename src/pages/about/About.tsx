import { motion } from 'motion/react';
import { Target, Users, Award, ShieldCheck, CheckCircle2, Globe2, BookOpen, GraduationCap, BadgeCheck, MessagesSquare, HandCoins, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-16">
        {/* Full Background Image - Highly Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070" 
            alt="Academic campus"
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
              About IRAC Services
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-2xl leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Discover our mission, our values, and meet our world-class consultancy team of active PhD scholars.
            </p>
          </div>
        </div>
      </section>

      {/* Professional and Experienced Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary">
              Insight Research & Academic Consultancy (IRAC)
            </h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6 text-slate-700 text-base md:text-lg">
                <p className="leading-relaxed font-medium text-slate-800">
                  For over 25 years, IRAC has operated from its own dedicated office, delivering high-impact academic solutions and advanced data analysis tailored to international standards. We help scholars, researchers, and students overcome tight deadlines and research stress to achieve professional-grade results.
                </p>
                <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
                  <h3 className="text-xl font-bold text-brand-primary">What We Do</h3>
                  <div className="space-y-3 text-sm md:text-base">
                    <div className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 shrink-0"></div>
                      <p className="leading-relaxed">
                        <strong className="text-slate-900 font-semibold">Academic Support:</strong> Comprehensive thesis guidance, research proposal development, and publication support.
                      </p>
                    </div>
                    <div className="flex gap-2 items-start">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 shrink-0"></div>
                      <p className="leading-relaxed">
                        <strong className="text-slate-900 font-semibold">Advanced Data Analysis:</strong> Specialized data mining and statistical modeling using SEM, SmartPLS, SPSS, Python, and Stata.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm md:text-base italic bg-slate-100 p-4 border-l-4 border-brand-primary rounded-r-lg">
                  Our team, led by Engr. Muhammad Ali Shaikh, is dedicated to turning complex data into seamless, publishable scholarly success.
                </p>
              </div>
              <div className="flex">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                  className="bg-brand-primary text-white border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary px-10 py-4 rounded-none font-bold text-lg transition-all duration-300 shadow-lg inline-block"
                >
                  Chat Now
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070" 
                  alt="Academic professional using tablet" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Why Researchers & Professionals Trust IRAC</h2>
            <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: "Quality Delivery", 
                icon: BadgeCheck, 
                color: "text-white",
                accent: "bg-brand-primary",
                iconBg: "bg-brand-primary/20",
                glow: "group-hover:shadow-brand-primary/50"
              },
              { 
                title: "100% Customer Satisfaction Rate", 
                icon: MessagesSquare, 
                color: "text-white",
                accent: "bg-brand-primary",
                iconBg: "bg-brand-primary/20",
                glow: "group-hover:shadow-brand-primary/50"
              },
              { 
                title: "Reasonable Prices", 
                icon: HandCoins, 
                color: "text-white",
                accent: "bg-brand-primary",
                iconBg: "bg-brand-primary/20",
                glow: "group-hover:shadow-brand-primary/50"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: [0, -25, 0],
                }}
                viewport={{ once: true }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  }
                }}
                className="relative group h-full"
              >
                <div className={`h-full bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/10 p-10 rounded-[48px] flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white/15 group-hover:border-white/30 shadow-2xl ${item.glow} group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]`}>
                  
                  {/* Pictorial Background Elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${item.accent}/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-opacity-20 transition-all duration-700`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 ${item.accent}/5 rounded-full -ml-12 -mb-12 blur-2xl group-hover:bg-opacity-20 transition-all duration-700`}></div>

                  <div className="mb-10 relative">
                    {/* Animated Ring */}
                    <div className={`absolute inset-0 ${item.iconBg} rounded-[2rem] scale-110 blur-sm group-hover:scale-125 group-hover:rotate-12 transition-all duration-700`}></div>
                    
                    <div className={`w-28 h-28 ${item.iconBg} rounded-[2rem] flex items-center justify-center relative z-10 group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-500 shadow-inner`}>
                      <item.icon className={`w-14 h-14 ${item.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`} strokeWidth={1.5} />
                    </div>

                    {/* Pictorial Particles */}
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: [0, 90, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`absolute -top-4 -right-4 w-6 h-6 ${item.accent}/30 rounded-lg blur-[1px]`}
                    ></motion.div>
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.5, 0.2],
                        rotate: [0, -45, 0]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className={`absolute -bottom-2 -left-6 w-8 h-8 ${item.accent}/20 rounded-full blur-[2px]`}
                    ></motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white leading-tight relative z-10 group-hover:text-blue-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Bottom Decorative Line */}
                  <div className={`mt-6 w-12 h-1 ${item.accent}/30 rounded-full group-hover:w-20 group-hover:bg-opacity-100 transition-all duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
