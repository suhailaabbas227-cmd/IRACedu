import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '#', 
    hasArrow: true,
    subItems: [
      { name: 'Thesis & Dissertation Guidance', path: '/services/thesis-guidance' },
      { name: 'Research Proposal Development', path: '/services/research-proposal' },
      { name: 'Instrument Design & Validation', path: '/services/instrument-design' },
      { name: 'SPSS | SmartPLS | Python | Stata Analysis', path: '/services/data-analysis' },
      { name: 'Scopus & WoS Publication Support', path: '/services/publication-support' },
      { name: 'Research Training Workshops', path: '/services/research-workshops' },
    ]
  },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 cursor-pointer">
            <div className="flex flex-col max-w-[180px] md:max-w-none">
              <span className="text-xl md:text-2xl font-bold text-brand-primary leading-none tracking-tighter">IRAC</span>
              <span className="text-[7px] md:text-[9px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-400 font-bold mt-1 line-clamp-1 md:line-clamp-none">Insight Research & Academic Consultancy</span>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "text-[14px] font-bold transition-colors hover:text-brand-primary flex items-center gap-1 py-1 border-b-2 border-transparent",
                    location.pathname === item.path || (item.subItems?.some(sub => location.pathname === sub.path)) 
                      ? "text-brand-primary border-brand-primary" 
                      : "text-slate-500"
                  )}
                >
                  {item.name}
                  {item.hasArrow && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-b-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-6 py-3 text-[14px] font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact & Action - Right */}
          <div className="flex items-center gap-3 lg:gap-8 shrink-0">
            <div className="hidden lg:flex items-center gap-4 border-r border-slate-100 pr-4 mr-2">
              <div className="w-7 h-7 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-brand-primary fill-current" />
              </div>
              <span className="text-[14px] font-bold text-slate-700">+92 321 9242692</span>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button className="p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-6 space-y-6">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-2">
                <Link 
                  to={item.path} 
                  className="flex items-center justify-between text-lg font-bold text-slate-700"
                  onClick={() => !item.subItems && setIsOpen(false)}
                >
                  {item.name}
                  {item.subItems && (
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }}
                    >
                      <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === item.name && "rotate-180")} />
                    </button>
                  )}
                </Link>
                
                {item.subItems && activeDropdown === item.name && (
                  <div className="pl-4 space-y-2 border-l-2 border-slate-100">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block text-base font-medium text-slate-500 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="flex items-center gap-3 text-slate-700">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-lg font-bold">+92 321 9242692</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
