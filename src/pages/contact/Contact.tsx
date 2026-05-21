import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-center overflow-hidden bg-brand-primary pt-24 pb-16 text-white">
        {/* Full Background Image - Highly Visible */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2070" 
            alt="Contact us"
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
              <Mail className="w-4 h-4" />
              Connect With Us
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-5 tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
              Contact Us
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white/95 max-w-2xl leading-relaxed font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Get in touch with IRAC Services for expert research and academic consultancy.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-8">Get In Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <Phone className="w-8 h-8 text-brand-primary mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Phone & Fax</h3>
                  <p className="text-slate-600 text-base whitespace-pre-line leading-relaxed">
                    +92 321 9242692
                    +92 330 2854671
                    +92 21 35899913 (Fax)
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <Mail className="w-8 h-8 text-brand-primary mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600 text-base">info@iracedu.com</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <MapPin className="w-8 h-8 text-brand-primary mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Office Address</h3>
                  <p className="text-slate-600 text-base whitespace-pre-line leading-relaxed">C-2C, Khayaban-E-Ittehad, Phase VII, DHA, Karachi, 75500</p>
                </div>

              </div>
            </div>

            <div className="bg-brand-primary/5 p-8 rounded-2xl border border-brand-primary/10">
              <h3 className="font-bold text-brand-primary text-xl md:text-2xl mb-4">Academic Expert</h3>
              <p className="text-slate-700 font-bold text-base md:text-lg">Engr. Muhammad Ali Shaikh</p>
              <p className="text-slate-600 text-base">B.E. (Electronics), LLB, Ph.D Candidate - Security & Automation</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-base font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-base font-bold text-slate-700">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Thesis Guidance Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-base font-bold text-slate-700">Message</label>
                <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
