import React from 'react';
import { Instagram, Linkedin, ArrowUp, Send, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Logo adapted for dark background (White text/shapes instead of black)
const footerLogoUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60' fill='none'%3E%3Cpath d='M30 10L15 50H26L41 10H30Z' fill='%23c5a059'/%3E%3Cpath d='M22 10L7 50H18L33 10H22Z' fill='%23ffffff'/%3E%3Ctext x='50' y='36' fill='%23ffffff' font-family='serif' font-weight='bold' font-size='24'%3EZENTHERA%3C/text%3E%3Ctext x='52' y='50' fill='%23cccccc' font-family='sans-serif' font-size='8' letter-spacing='0.3em' font-weight='bold'%3EGROUPS%3C/text%3E%3C/svg%3E";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white relative overflow-hidden">
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none">
          <h1 className="text-[20vw] font-serif font-bold text-white/[0.02] whitespace-nowrap leading-none absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              ZENTHERA
          </h1>
      </div>

      {/* TOP CTA BAR */}
      <div className="border-b border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-2">Ready to build the extraordinary?</h2>
                  <p className="text-gray-400">Our engineering teams are ready to discuss your next venture.</p>
              </div>
              <Link 
                to="/quote" 
                className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-zenthera-gold transition-colors duration-300 overflow-hidden"
              >
                 <div className="absolute inset-0 w-0 bg-zenthera-gold transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                 <span className="relative font-bold text-sm uppercase tracking-widest flex items-center gap-3">
                     Start a Project <Send size={16} className="text-zenthera-gold" />
                 </span>
              </Link>
          </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* COLUMN 1: BRAND (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="mb-8">
                <img src={footerLogoUrl} alt="Zenthera Groups" className="h-16 w-auto object-contain mb-6" />
                <p className="text-gray-400 leading-relaxed pr-4">
                    Pioneering the future of global infrastructure. From deep-sea extraction to renewable energy grids, we engineer certainty in the world's most complex environments.
                </p>
            </div>
            <div className="flex gap-4">
               {[Instagram, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-zenthera-gold hover:border-zenthera-gold hover:text-black transition-all duration-300">
                        <Icon size={18} />
                    </a>
               ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-zenthera-gold uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
               {['About Us', 'Leadership', 'Careers', 'HSE Policy', 'Sustainability'].map(item => (
                   <li key={item}>
                       <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">{item}</Link>
                   </li>
               ))}
            </ul>
          </div>

          {/* COLUMN 3: SECTORS (3 Cols) */}
          <div className="lg:col-span-3">
             <h4 className="text-xs font-bold text-zenthera-gold uppercase tracking-widest mb-8">Sectors</h4>
             <ul className="space-y-4">
                {['Offshore Construction', 'Oil & Gas Processing', 'Renewable Energy', 'Heavy Infrastructure', 'Petrochemicals'].map(item => (
                   <li key={item}>
                       <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block transform duration-200">{item}</Link>
                   </li>
               ))}
            </ul>
          </div>

          {/* COLUMN 4: NEWSLETTER (3 Cols) */}
          <div className="lg:col-span-3">
             <h4 className="text-xs font-bold text-zenthera-gold uppercase tracking-widest mb-8">Stay Informed</h4>
             <p className="text-gray-500 text-sm mb-6">Receive quarterly insights on energy trends and Zenthera project updates.</p>
             <div className="relative">
                 <input 
                    type="email" 
                    placeholder="Corporate Email" 
                    className="w-full bg-white/5 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-zenthera-gold transition-colors"
                 />
                 <button className="absolute right-2 top-2 bottom-2 bg-zenthera-gold text-black px-3 flex items-center justify-center hover:bg-white transition-colors">
                     <Send size={14} />
                 </button>
             </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-black/40 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
              
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 uppercase tracking-wider">
                  <span>&copy; {new Date().getFullYear()} Zenthera Groups</span>
                  <a href="#" className="hover:text-white transition-colors">Privacy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms</a>
                  <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>

              <div className="flex items-center gap-6">
                  {/* Trust Badges */}
                  <div className="flex gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 hidden sm:flex">
                     <div className="flex items-center gap-1 text-[10px] border border-gray-600 px-2 py-1 rounded">
                         <CheckCircle2 size={12} /> ISO 9001
                     </div>
                     <div className="flex items-center gap-1 text-[10px] border border-gray-600 px-2 py-1 rounded">
                         <CheckCircle2 size={12} /> ISO 45001
                     </div>
                  </div>

                  {/* Back to Top */}
                  <button 
                    onClick={scrollToTop} 
                    className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                    aria-label="Scroll to top"
                  >
                      <ArrowUp size={16} />
                  </button>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;