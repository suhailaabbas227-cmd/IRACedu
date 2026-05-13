import React from 'react';
import Navbar from '../components/Navbar';
import AIAssistant from '../components/AIAssistant';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <AIAssistant />
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider text-brand-secondary">IRAC SERVICES</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Insight Research & Academic Consultancy (IRAC) provides international standard research services to students and professionals globally.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider text-brand-secondary">Contact Info</h3>
              <ul className="space-y-3 text-slate-400 text-base">
                <li>+92 321 9242692 | +92 330 2854671</li>
                <li>+92 21 35899913 (Fax)</li>
                <li>info@iracedu.com</li>
                <li>www.iracedu.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider text-brand-secondary">Address</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                C-2C, Khayaban-E-Ittehad, Phase VII, DHA, Karachi, 75500
              </p>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} IRAC SERVICES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
