import { motion } from 'motion/react';
import { Target, Users, Award, ShieldCheck, CheckCircle2, Globe2, BookOpen, GraduationCap, BadgeCheck, MessagesSquare, HandCoins, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2070" 
            alt="Library background"
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
              International Standard Research & Consultancy Services at Your Doorstep
            </p>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 md:mb-10 tracking-tight">
              IRAC Providing High <br />
              <span className="text-white">Research & Consultancy Standards</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-xl text-white/90 mb-8 md:mb-10 max-w-5xl leading-relaxed font-bold"
            >
              Insight Research & Academic Consultancy (IRAC) is committed to being a dependable solution partner for researchers worldwide. We follow procedures that adhere to international principles of academic publication and scientific documentation.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-10">
              {[
                "International Standard Research & Consultancy Services",
                "Complete Satisfaction of Customers",
                "Thesis and Dissertation Guidance",
                "PhD Researcher Support",
                "Scopus & Web of Science Publication Support",
                "SEM/SmartPLS/SPSS/Python/Stata Analysis",
                "Affordable Charges"
              ].map((feature, i) => (
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
              <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed">
                Led by Engr. Muhammad Ali Shaikh, our team works hard to meet our clients' needs by providing academic solutions including thesis guidance, research proposal development, and high-impact publication support. According to international academic standards, our staff ensures timely and high-quality results.
              </p>
              <p className="text-slate-700 text-base md:text-lg lg:text-xl leading-relaxed">
                Our experts specialize in advanced data analysis, supporting SEM, SmartPLS, SPSS, Python, and Stata for research. We mine data and provide relevant insights to help you produce professional-grade academic work. If you're stressed about deadlines or quality, IRAC is your trusted partner for scholarly success.
              </p>
              <div className="flex">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-ai-chat'))}
                  className="bg-brand-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg inline-block"
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
      {/* Competitive Edge Section */}
      <section className="py-16 bg-gradient-to-br from-brand-primary via-[#1a2a5a] to-brand-primary text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2073" 
            alt="Books background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-brand-primary/40 z-0"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Looking for International Standard Research Support? <br />
              IRAC Services is Your Complete Solution
            </h2>
            <p className="text-blue-200 text-base md:text-lg font-bold uppercase tracking-wider">
              Factors Which Help Us Gain Competitive Edge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl mx-auto">
            {[
              "Professional Industry Standards",
              "Reasonable Prices and 100% Reliable Services",
              "Expert Research & Consultancy Support",
              "Highly Qualified PhD Scholars",
              "100% Customer Satisfaction and Original Work",
              "Global Research Training & Capacity-Building",
              "Quality Assurance by Professional Experts",
              "International Publication Support"
            ].map((factor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="bg-brand-primary rounded-full p-1 shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-medium text-slate-100">{factor}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
