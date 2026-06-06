import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, User, Loader2, CheckCircle2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';

let genAIClient: any = null;

function getGenAI() {
  if (genAIClient) return genAIClient;
  
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing Gemini API Key. Please configure GEMINI_API_KEY in your environment variables.");
  }
  
  genAIClient = new GoogleGenAI({ apiKey });
  return genAIClient;
}

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for IRAC Services (Insight Research & Academic Consultancy).
Your goal is to provide helpful, professional, and concise information to researchers, students, and professionals about IRAC's services.

IRAC Services Overview:
- Led by Engr. Muhammad Ali Shaikh (B.E. Electronics, LLB, Ph.D Candidate).
- Provides international standard research services.
- Specializes in:
  * Thesis & Dissertation Guidance
  * Research Proposal Development
  * Instrument Design & Validation
  * Advanced Data Analysis (SEM, SmartPLS, SPSS, Python, Stata)
  * Scopus & Web of Science (WoS) Publication Support
  * Research Training & Capacity-Building Workshops

Contact Information:
- Tel: +92 21 35899912
- Mobile: +92 321 9242692, +92 330 2854671
- Fax: +92 21 35899913
- Email: info@iracedu.com
- Website: www.iracedu.com
- Address: Building # C-2C, Third Floor (Corner), Saadi Lane No. 1, Khayaban-e-Ittehad, Phase VII, DHA, Karachi 75500
- IRAC operates from its own dedicated office, established over 25 years ago.

Tone:
- Professional, academic, helpful, and polite.
- Keep answers concise. If the user needs detailed help, suggest they book a free consultation or contact IRAC via phone/email/WhatsApp.

Key URLs:
- Contact: /contact
- Services: /services
- About: /about

If asked about pricing, state that IRAC offers reasonable and competitive prices, and users should get a quote by contacting the team directly with their specific project requirements.
`;

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryEmail, setEnquiryEmail] = useState('');
  const [enquiryMsg, setEnquiryMsg] = useState('');
  const [enquiryLoading, setEnquiryLoading] = useState(false);
  const [enquiryError, setEnquiryError] = useState<string | null>(null);

  // Destination inbox for chatbot enquiries. Delivered via FormSubmit
  // (no API key or account needed). Must match the contact form inbox.
  const CONTACT_INBOX = 'info@iracedu.com';

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryName || !enquiryEmail || !enquiryMsg) {
      setEnquiryError('Please fill in all fields.');
      return;
    }

    setEnquiryError(null);
    setEnquiryLoading(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INBOX}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: enquiryName,
          email: enquiryEmail,
          _subject: 'IRAC Website: New Chatbot Lead/Enquiry',
          message: enquiryMsg,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();

      // FormSubmit returns { success: "true" | true, message: string }
      if (response.ok && (result.success === true || result.success === 'true')) {
        setEnquirySent(true);
        setEnquiryName('');
        setEnquiryEmail('');
        setEnquiryMsg('');
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (err: any) {
      console.error(err);
      setEnquiryError(err.message || 'Could not send. Check connection.');
    } finally {
      setEnquiryLoading(false);
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-ai-chat', handleOpenChat);
    return () => window.removeEventListener('open-ai-chat', handleOpenChat);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = getGenAI();
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that request at the moment.";
      setMessages(prev => [...prev, { role: 'model', content: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      let errorMessage = "I'm having trouble connecting right now. Please try again or contact us directly.";
      
      if (error instanceof Error && error.message.includes("GEMINI_API_KEY")) {
        errorMessage = "The AI Assistant is currently not configured with an API key. Please contact the administrator.";
      }
      
      setMessages(prev => [...prev, { role: 'model', content: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-primary p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">IRAC Assistant</h3>
                  <p className="text-[10px] text-white/70">Online | PhD Consultancy Expert</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 relative">
              {showEnquiryForm ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 min-h-full flex flex-col justify-center overflow-y-auto"
                >
                  {enquirySent ? (
                    <div className="text-center space-y-3 py-4">
                      <div className="w-12 h-12 bg-green-50 text-green-500 border border-green-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">Message Sent!</h4>
                      <p className="text-slate-500 text-xs px-2 leading-relaxed">
                        Thank you for reaching out. Our consultancy team will review your message and reply back within 24 hours.
                      </p>

                      <button
                        onClick={() => {
                          setShowEnquiryForm(false);
                          setEnquirySent(false);
                          setEnquiryName('');
                          setEnquiryEmail('');
                          setEnquiryMsg('');
                        }}
                        className="text-brand-primary font-bold text-xs hover:underline pt-2 block mx-auto"
                      >
                        Back to Chat Help
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleEnquirySubmit} className="space-y-3 py-2">
                      <h4 className="font-bold text-brand-primary text-sm">Talk to a Human</h4>
                      <p className="text-[11px] text-slate-500 leading-normal">Leaving a message will notify our consultancy team. They will reply to your email directly.</p>
                      
                      {enquiryError && (
                        <div className="bg-red-50 border border-red-100 text-red-700 p-2 rounded text-[11px] font-medium leading-normal">
                          {enquiryError}
                        </div>
                      )}

                      <div className="space-y-2">
                        <input 
                          type="text" 
                          required
                          value={enquiryName}
                          onChange={(e) => setEnquiryName(e.target.value)}
                          placeholder="Your Name" 
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-none text-xs outline-none focus:ring-2 focus:ring-brand-primary/20" 
                        />
                        <input 
                          type="email" 
                          required
                          value={enquiryEmail}
                          onChange={(e) => setEnquiryEmail(e.target.value)}
                          placeholder="Your Email" 
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-none text-xs outline-none focus:ring-2 focus:ring-brand-primary/20" 
                        />
                        <textarea 
                          required
                          value={enquiryMsg}
                          onChange={(e) => setEnquiryMsg(e.target.value)}
                          placeholder="How can we help?" 
                          rows={3} 
                          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-none text-xs outline-none focus:ring-2 focus:ring-brand-primary/20 resize-none"
                        ></textarea>
                        
                        <button 
                          type="submit"
                          disabled={enquiryLoading}
                          className="w-full bg-brand-primary text-white border-2 border-brand-primary hover:bg-transparent hover:text-brand-primary py-2 rounded-none font-bold text-xs shadow transition-all duration-300 flex items-center justify-center gap-1.5 disabled:opacity-50"
                        >
                          {enquiryLoading ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                        
                        <button 
                          type="button"
                          onClick={() => {
                            setShowEnquiryForm(false);
                            setEnquiryError(null);
                          }}
                          className="w-full text-slate-400 font-medium text-[11px] hover:text-slate-600 transition-colors py-0.5 text-center"
                        >
                          Cancel / Back to Chat
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              ) : (
                <>
                  {messages.length === 0 && (
                    <div className="text-center py-10 px-6">
                      <Bot className="w-12 h-12 text-brand-primary/20 mx-auto mb-4" />
                      <p className="text-slate-500 text-sm">
                        Hello! I'm the IRAC AI assistant. How can I help you with your research or academic project today?
                      </p>
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "flex gap-2 max-w-[85%]",
                        m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                        m.role === 'user' ? "bg-slate-500" : "bg-brand-primary"
                      )}>
                        {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                      </div>
                      <div className={cn(
                        "p-3 rounded-2xl text-sm shadow-sm",
                        m.role === 'user' 
                          ? "bg-brand-primary text-white rounded-tr-none" 
                          : "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
                      )}>
                        <div className="prose prose-sm prose-slate max-w-none prose-p:leading-relaxed prose-p:my-1">
                          <ReactMarkdown>
                            {m.content}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-2 mr-auto max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center shrink-0 mt-1">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-brand-primary" />
                        <span className="text-xs text-slate-500">Assistant is thinking...</span>
                      </div>
                    </div>
                  )}
                  
                  {messages.length > 0 && !isLoading && (
                    <div className="flex justify-center pt-4">
                      <button 
                        onClick={() => setShowEnquiryForm(true)}
                        className="text-[11px] font-bold text-brand-primary bg-brand-primary/5 px-4 py-2 rounded-none border border-brand-primary/10 hover:bg-brand-primary/10 transition-colors"
                      >
                        Talk to a Human instead?
                      </button>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-white">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="w-full pl-4 pr-12 py-3 bg-slate-100 border border-slate-200 rounded-none focus:ring-2 focus:ring-brand-primary/20 text-sm outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary text-white rounded-none disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-primary/90 transition-colors shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-[10px] text-center text-slate-400 mt-2">
                Powered by Gemini. Built for IRAC Services.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen ? "bg-slate-200 text-slate-600 rotate-90" : "bg-brand-primary text-white"
        )}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-brand-primary animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
