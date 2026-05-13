import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-primary py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get in touch with IRAC Services for expert research and academic consultancy.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-8">Get In Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <Phone className="w-8 h-8 text-brand-primary mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Phone & Fax</h3>
                  <p className="text-slate-600 text-sm whitespace-pre-line">
                    +92 321 9242692
                    +92 330 2854671
                    +92 21 35899913 (Fax)
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <Mail className="w-8 h-8 text-brand-primary mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                  <p className="text-slate-600 text-sm">info@iracedu.com</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <MapPin className="w-8 h-8 text-brand-primary mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Office Address</h3>
                  <p className="text-slate-600 text-sm whitespace-pre-line">C-2C, Khayaban-E-Ittehad, Phase VII, DHA, Karachi, 75500</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <Globe className="w-8 h-8 text-brand-primary mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">Website</h3>
                  <p className="text-slate-600 text-sm">www.iracedu.com</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-primary/5 p-8 rounded-2xl border border-brand-primary/10">
              <h3 className="font-bold text-brand-primary text-xl mb-4">Academic Expert</h3>
              <p className="text-slate-700 font-medium">Engr. Muhammad Ali Shaikh</p>
              <p className="text-slate-500 text-sm">B.E. (Electronics), LLB, Ph.D Candidate - Security & Automation</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-brand-primary mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder="Thesis Guidance Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
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
