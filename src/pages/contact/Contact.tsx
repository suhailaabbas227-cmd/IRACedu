import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Loader2, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Destination inbox for contact form submissions. FormSubmit delivers
  // every submission straight to this address — no API key or account needed.
  // The first submission triggers a one-time confirmation email from
  // FormSubmit; click the activation link in it to start receiving messages.
  const CONTACT_INBOX = 'info@iracedu.com';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !subject || !message) {
      setError('Please fill in all fields before sending.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INBOX}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          _subject: `IRAC Website: ${subject}`,
          message: message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      // FormSubmit returns { success: "true" | true, message: string }
      if (response.ok && (result.success === true || result.success === 'true')) {
        setSuccess(true);
        // Clear form
        setFullName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong while sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-8"
              >
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-sm border border-green-100">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-800">Thank you!</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Your message has been sent successfully. We will review your inquiry and reach back to you within 24 hours.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSuccess(false);
                    setFullName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="bg-brand-primary text-white px-8 py-3 rounded-none font-bold text-sm transition-all duration-300 shadow hover:bg-brand-primary/90"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded text-sm font-medium">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-base font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-base font-bold text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-slate-700">Subject</label>
                  <input 
                    type="text" 
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" 
                    placeholder="Thesis Guidance Inquiry" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-base font-bold text-slate-700">Message</label>
                  <textarea 
                    rows={6} 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-primary text-white border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary py-4 rounded-none font-bold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
