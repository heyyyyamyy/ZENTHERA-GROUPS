import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { NavItem, Page } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'Home', path: Page.HOME },
  { label: 'About', path: Page.ABOUT },
  { label: 'Services', path: Page.SERVICES },
  { label: 'Projects', path: Page.PROJECTS },
  { label: 'Careers', path: Page.CAREERS },
  { label: 'Contact', path: Page.CONTACT },
  { label: 'Get a Quote', path: Page.QUOTE, isButton: true },
];

// WHITE LOGO (For Dark Backgrounds & Scrolled State)
const logoWhiteUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60' fill='none'%3E%3Cpath d='M30 10L15 50H26L41 10H30Z' fill='%23c5a059'/%3E%3Cpath d='M22 10L7 50H18L33 10H22Z' fill='%23ffffff'/%3E%3Ctext x='50' y='36' fill='%23ffffff' font-family='serif' font-weight='bold' font-size='24'%3EZENTHERA%3C/text%3E%3Ctext x='52' y='50' fill='%23cccccc' font-family='sans-serif' font-size='8' letter-spacing='0.3em' font-weight='bold'%3EGROUPS%3C/text%3E%3C/svg%3E";

// DARK LOGO (For White Backgrounds)
const logoDarkUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60' fill='none'%3E%3Cpath d='M30 10L15 50H26L41 10H30Z' fill='%23c5a059'/%3E%3Cpath d='M22 10L7 50H18L33 10H22Z' fill='%230a0a0a'/%3E%3Ctext x='50' y='36' fill='%230a0a0a' font-family='serif' font-weight='bold' font-size='24'%3EZENTHERA%3C/text%3E%3Ctext x='52' y='50' fill='%23666666' font-family='sans-serif' font-size='8' letter-spacing='0.3em' font-weight='bold'%3EGROUPS%3C/text%3E%3C/svg%3E";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  useEffect(() => setIsOpen(false), [location]);

  // LOGIC: When do we need the White Logo?
  // 1. When Scrolled (Navbar becomes dark)
  // 2. On Home Page (Hero Image is dark)
  // 3. On Project Details Page (Hero Image is dark)
  // 4. When Mobile Menu is Open (Overlay is dark)
  const isHomePage = location.pathname === '/';
  const isProjectDetails = /^\/projects\/\d+/.test(location.pathname);
  const needsWhiteLogo = scrolled || isHomePage || isProjectDetails || isOpen;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? 'py-3' : 'py-4 md:py-6'
        }`}
      >
        <div className="flex justify-center px-4">
          <div 
            className={`
              relative flex justify-between items-center transition-all duration-500 w-full max-w-7xl
              ${scrolled 
                ? 'bg-[#0a0a0a]/95 backdrop-blur-md rounded-full px-6 py-2 border border-white/10 shadow-2xl' 
                : 'bg-transparent px-0'
              }
            `}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0 relative z-50" onClick={() => setIsOpen(false)}>
               <img 
                 src={needsWhiteLogo ? logoWhiteUrl : logoDarkUrl} 
                 alt="Zenthera Groups" 
                 className="h-8 md:h-9 w-auto object-contain transition-all duration-300" 
               />
            </Link>

            {/* Desktop Nav */}
            <div className={`hidden md:flex items-center space-x-1 ${!scrolled && needsWhiteLogo && 'bg-black/20 backdrop-blur-sm rounded-full p-1 border border-white/5'}`}>
              {navItems.map((item) => (
                item.isButton ? (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="ml-4 bg-zenthera-gold text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 shadow-lg shadow-zenthera-gold/20"
                  >
                    {item.label}
                    <ArrowRight size={14} />
                  </Link>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group overflow-hidden ${
                      location.pathname === item.path 
                        ? (needsWhiteLogo ? 'text-white' : 'text-black font-extrabold')
                        : (needsWhiteLogo ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black')
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Active Indicator */}
                    <span className={`absolute inset-0 rounded-full transition-transform duration-300 ease-out origin-left ${
                        needsWhiteLogo ? 'bg-white/10' : 'bg-black/5'
                    } ${
                        location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden focus:outline-none p-2 rounded-full transition-colors relative z-50 ${
                needsWhiteLogo ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 w-full max-w-sm px-8">
          {navItems.map((item, idx) => (
            <Link
              key={item.path}
              to={item.path}
              style={{ transitionDelay: isOpen ? `${100 + (idx * 50)}ms` : '0ms' }}
              className={`
                group flex items-center justify-between text-3xl font-serif tracking-wide transform transition-all duration-500 border-b border-white/10 pb-4
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                ${item.isButton ? 'text-zenthera-gold border-none mt-4' : 'text-white hover:text-gray-300'}
              `}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              {item.isButton ? <ArrowRight className="group-hover:translate-x-2 transition-transform" /> : <ChevronRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-zenthera-gold" size={20} />}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;