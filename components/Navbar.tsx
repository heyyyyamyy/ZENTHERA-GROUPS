import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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

// White logo for the dark floating navbar
const logoUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60' fill='none'%3E%3Cpath d='M30 10L15 50H26L41 10H30Z' fill='%23c5a059'/%3E%3Cpath d='M22 10L7 50H18L33 10H22Z' fill='%23ffffff'/%3E%3Ctext x='50' y='36' fill='%23ffffff' font-family='serif' font-weight='bold' font-size='24'%3EZENTHERA%3C/text%3E%3Ctext x='52' y='50' fill='%23999999' font-family='sans-serif' font-size='8' letter-spacing='0.3em' font-weight='bold'%3EGROUPS%3C/text%3E%3C/svg%3E";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Floating Container */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled ? 'pt-4' : 'pt-6 md:pt-8'
        }`}
      >
        <div 
          className={`relative transition-all duration-500 ease-out flex justify-between items-center backdrop-blur-xl border border-white/10 shadow-2xl ${
            scrolled 
              ? 'w-[95%] md:w-[80%] bg-black/80 rounded-full px-6 py-3' 
              : 'w-[95%] md:w-[90%] bg-black/60 rounded-xl px-8 py-5'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsOpen(false)}>
             <img src={logoUrl} alt="Zenthera Groups" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              item.isButton ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="ml-4 bg-zenthera-gold text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  {item.label}
                  <ArrowRight size={14} />
                </Link>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    location.pathname === item.path 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 hover:bg-white/10 rounded-full transition-colors relative z-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 backdrop-blur-lg ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item, idx) => (
          <Link
            key={item.path}
            to={item.path}
            style={{ transitionDelay: `${idx * 100}ms` }}
            onClick={() => setIsOpen(false)}
            className={`text-3xl font-serif tracking-wide transform transition-all duration-500 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${item.isButton ? 'text-zenthera-gold' : 'text-white hover:text-gray-300'}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;