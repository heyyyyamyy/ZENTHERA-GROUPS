import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, ChevronLeft, ChevronRight, Globe, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { Page } from '../types';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';

const featuredProjects = projectsData.filter(p => [1, 2, 3].includes(p.id));

const heroSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80',
    title: 'Engineering the Impossible',
    subtitle: 'Offshore. Deepwater. Critical.',
    statLabel: 'Operating Depth',
    statValue: '3,000m',
    location: 'North Sea, UK'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80',
    title: 'Powering Tomorrow',
    subtitle: 'Sustainable. Scalable. Global.',
    statLabel: 'Energy Output',
    statValue: '12GW',
    location: 'Copenhagen, DK'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1590901693059-e9eb7b3706c4?auto=format&fit=crop&w=2000&q=80',
    title: 'Industrial Backbone',
    subtitle: 'Infrastructure. Logistics. Steel.',
    statLabel: 'Steel Erected',
    statValue: '500kT',
    location: 'Houston, USA'
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="w-full bg-white">
      <SEO 
        title="Global EPC & Construction Leaders" 
        description="Zenthera Groups is a premier global EPC contractor specializing in Offshore, Oil, Gas, Renewable Energy, and Infrastructure construction projects."
      />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black text-white">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className={`absolute inset-0 transform transition-transform duration-[8000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`}>
               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover opacity-60" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
           <div className="flex flex-col md:flex-row items-end justify-between gap-12">
               <div className="w-full md:w-3/4">
                  <div key={currentSlide} className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[2px] w-12 bg-zenthera-gold"></div>
                        <span className="text-zenthera-gold text-xs md:text-sm font-bold uppercase tracking-[0.3em]">{heroSlides[currentSlide].location}</span>
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] mb-8 tracking-tighter">
                      {heroSlides[currentSlide].title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light italic border-l-2 border-zenthera-gold/50 pl-6 max-w-xl">
                        {heroSlides[currentSlide].subtitle}
                    </p>
                  </div>
               </div>

               {/* Stat Card */}
               <div className="w-full md:w-1/4 hidden md:block pointer-events-auto">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm hover:bg-white/15 transition-colors duration-300">
                      <div className="flex justify-between items-start mb-6">
                          <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">Key Metric</span>
                          <TrendingUp className="text-zenthera-gold" size={20} />
                      </div>
                      <div className="text-5xl font-serif mb-2">{heroSlides[currentSlide].statValue}</div>
                      <div className="text-sm text-gray-300 tracking-wider mb-6">{heroSlides[currentSlide].statLabel}</div>
                      <Link to="/projects" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-zenthera-gold transition-colors">
                          View Details <ArrowRight size={14} />
                      </Link>
                  </div>
               </div>
           </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-10 right-10 z-30 flex gap-4 hidden md:flex">
          <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Mobile Stat Bar */}
         <div className="absolute bottom-0 left-0 w-full bg-zenthera-dark/90 backdrop-blur border-t border-white/10 p-4 md:hidden z-30 flex justify-between items-center">
             <div>
                 <div className="text-white font-serif text-2xl">{heroSlides[currentSlide].statValue}</div>
                 <div className="text-xs text-gray-400 uppercase">{heroSlides[currentSlide].statLabel}</div>
             </div>
             <div className="flex gap-2">
                 <button onClick={prevSlide} className="p-2 border border-white/20 rounded-full text-white"><ChevronLeft size={16}/></button>
                 <button onClick={nextSlide} className="p-2 border border-white/20 rounded-full text-white"><ChevronRight size={16}/></button>
             </div>
         </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl text-zenthera-dark leading-tight mb-8">
                Delivering critical infrastructure with <span className="text-zenthera-gold italic">uncompromising</span> precision.
              </h2>
              <Link to={Page.ABOUT} className="group inline-flex items-center gap-3 border-b-2 border-black pb-1 uppercase tracking-widest text-sm font-bold hover:text-zenthera-gold hover:border-zenthera-gold transition-all">
                Our Capabilities <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                Zenthera Groups stands at the forefront of heavy industrial construction. From offshore platforms in the North Sea to vast solar arrays in the desert, we engineer the systems that power modern civilization.
              </p>
              <p>
                Our expertise spans upstream, midstream, and downstream operations, as well as next-generation power generation. We are committed to operational excellence, HSE compliance, and sustainable energy transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Strip */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
                {[
                  { val: '50M+', label: 'Man-hours LTI Free' },
                  { val: '35', label: 'Countries Operated' },
                  { val: '12GW', label: 'Power Installed' },
                  { val: '$40B', label: 'Project Value' }
                ].map((stat, i) => (
                  <div key={i} className="pl-4 first:pl-0">
                      <div className="text-4xl md:text-5xl font-serif text-zenthera-gold font-bold mb-2">{stat.val}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">The Zenthera Advantage</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-zenthera-dark">Engineering Certainty</h2>
                <p className="text-gray-600 text-lg">We combine decades of technical expertise with agile project management to deliver on time, every time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Globe, title: "Global Logistics", desc: "Seamless supply chain management ensuring materials reach the most remote locations." },
                  { icon: ShieldCheck, title: "Risk Management", desc: "Predictive modeling and strict compliance protocols to mitigate operational risks." },
                  { icon: Zap, title: "Technical Excellence", desc: "A multidisciplinary team innovating solutions for complex offshore challenges." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-10 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                      <div className="bg-zenthera-light w-16 h-16 rounded-full flex items-center justify-center mb-8">
                          <item.icon size={32} className="text-zenthera-dark" />
                      </div>
                      <h3 className="font-serif text-2xl mb-4 text-zenthera-dark">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-2 block">Our Work</span>
              <h2 className="font-serif text-4xl md:text-6xl text-zenthera-dark">Featured Projects</h2>
            </div>
            <Link to={Page.PROJECTS} className="group flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-zenthera-gold transition-colors">
              View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div key={project.id}>
                  <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 bg-zenthera-dark text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h2 className="font-serif text-5xl md:text-7xl mb-8">Ready to execute?</h2>
           <p className="text-gray-400 mb-12 text-xl max-w-2xl mx-auto">Partner with a leader in EPC services for reliable, scalable results on your next major infrastructure venture.</p>
           <Link to={Page.QUOTE} className="inline-block bg-white text-black px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-zenthera-gold hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
             Request Proposal
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;