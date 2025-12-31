import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Globe, ShieldCheck, TrendingUp, Zap, Users, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { Page } from '../types';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';

// Select specific featured projects by ID
const featuredIds = [1, 2, 3];
const featuredProjects = projectsData.filter(p => featuredIds.includes(p.id));

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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress on slide change
    setProgress(0);
    
    // Progress bar interval
    const progressTimer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) return 0;
        return old + 1; // 100 steps over 6000ms roughly
      });
    }, 60);

    // Slide change interval
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(slideTimer);
    };
  }, [currentSlide]); // Dependency on currentSlide ensures reset happens correctly

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  };

  return (
    <div className="w-full">
      <SEO 
        title="Global EPC & Construction Leaders" 
        description="Zenthera Groups is a premier global EPC contractor specializing in Offshore, Oil, Gas, Renewable Energy, and Infrastructure construction projects."
      />
      
      {/* Unique Hero Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image with Ken Burns Effect */}
            <div className={`w-full h-full transform transition-transform duration-[6000ms] ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`}>
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover opacity-70"
                />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30"></div>
          </div>
        ))}

        {/* Content Layer */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
           <div className="flex flex-col md:flex-row items-end justify-between gap-12">
               
               {/* Text Content */}
               <div className="w-full md:w-2/3">
                  {heroSlides.map((slide, index) => {
                    if (index !== currentSlide) return null;
                    return (
                      <div key={slide.id} data-aos="fade-up" data-aos-duration="1200">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[1px] w-12 bg-zenthera-gold"></div>
                            <span className="text-zenthera-gold text-sm font-bold uppercase tracking-[0.3em]">{slide.location}</span>
                        </div>
                        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-6 tracking-tighter">
                          {slide.title.split(' ').map((word, i) => (
                              <span key={i} className="block">{word}</span>
                          ))}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light italic max-w-lg border-l-2 border-white/20 pl-6">
                            {slide.subtitle}
                        </p>
                      </div>
                    );
                  })}
               </div>

               {/* Glass Stat Card */}
               <div className="w-full md:w-1/3 flex justify-start md:justify-end" data-aos="zoom-in" data-aos-delay="400">
                  {heroSlides.map((slide, index) => {
                      if (index !== currentSlide) return null;
                      return (
                        <div key={slide.id} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm w-64">
                            <div className="flex items-start justify-between mb-8">
                                <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">Key Metric</span>
                                <TrendingUp className="text-zenthera-gold" size={20} />
                            </div>
                            <div className="text-5xl font-serif text-white mb-2">{slide.statValue}</div>
                            <div className="text-sm text-gray-300 uppercase tracking-wider">{slide.statLabel}</div>
                            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 cursor-pointer group pointer-events-auto">
                                <Link to="/projects" className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-zenthera-gold transition-colors">View Case Study</Link>
                                <ArrowRight size={12} className="text-white group-hover:text-zenthera-gold transition-colors" />
                            </div>
                        </div>
                      );
                  })}
               </div>
           </div>
        </div>

        {/* Custom Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full z-30 h-2 bg-white/10">
            <div 
                className="h-full bg-zenthera-gold transition-all duration-100 ease-linear" 
                style={{ width: `${progress}%` }}
            ></div>
        </div>

        {/* Custom Navigation */}
        <div className="absolute bottom-12 right-12 z-30 flex gap-2 hidden md:flex">
          <button 
            onClick={prevSlide} 
            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-zenthera-gold hover:border-zenthera-gold hover:text-black transition-all rounded-full backdrop-blur-sm group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button 
            onClick={nextSlide} 
            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-zenthera-gold hover:border-zenthera-gold hover:text-black transition-all rounded-full backdrop-blur-sm group"
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zenthera-dark leading-tight mb-8">
                Delivering critical infrastructure for the global energy sector with uncompromising safety.
              </h2>
              <Link to={Page.ABOUT} className="inline-flex items-center gap-2 border border-black px-8 py-3 uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors duration-300">
                Our Capabilities <ArrowRight size={16} />
              </Link>
            </div>
            <div className="text-gray-600 leading-relaxed text-lg" data-aos="fade-left" data-aos-delay="200">
              <p className="mb-6">
                Zenthera Groups stands at the forefront of heavy industrial construction. From offshore platforms in the North Sea to vast solar arrays in the desert, we engineer the systems that power modern civilization.
              </p>
              <p>
                Our expertise spans upstream, midstream, and downstream operations, as well as next-generation power generation. We are committed to operational excellence, HSE compliance, and sustainable energy transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-zenthera-dark text-white border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="space-y-2" data-aos="zoom-in" data-aos-delay="0">
                    <div className="text-4xl md:text-5xl font-serif text-zenthera-gold font-bold">50M+</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Man-hours LTI Free</div>
                </div>
                <div className="space-y-2" data-aos="zoom-in" data-aos-delay="100">
                    <div className="text-4xl md:text-5xl font-serif text-zenthera-gold font-bold">35</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Countries Operated</div>
                </div>
                 <div className="space-y-2" data-aos="zoom-in" data-aos-delay="200">
                    <div className="text-4xl md:text-5xl font-serif text-zenthera-gold font-bold">12GW</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Power Installed</div>
                </div>
                 <div className="space-y-2" data-aos="zoom-in" data-aos-delay="300">
                    <div className="text-4xl md:text-5xl font-serif text-zenthera-gold font-bold">$40B</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Project Value Delivered</div>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Why Zenthera</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Engineering Certainty in Uncertain Environments</h2>
                <p className="text-gray-600 text-lg">We combine decades of technical expertise with agile project management to deliver on time, every time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center p-6" data-aos="fade-up" data-aos-delay="100">
                    <div className="bg-zenthera-light p-6 rounded-full mb-6">
                        <Globe size={32} className="text-zenthera-dark" />
                    </div>
                    <h3 className="font-serif text-2xl mb-4">Global Logistics</h3>
                    <p className="text-gray-600">Seamless supply chain management ensuring materials and heavy machinery reach the most remote locations on earth.</p>
                </div>
                 <div className="flex flex-col items-center text-center p-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="bg-zenthera-light p-6 rounded-full mb-6">
                        <ShieldCheck size={32} className="text-zenthera-dark" />
                    </div>
                    <h3 className="font-serif text-2xl mb-4">Risk Management</h3>
                    <p className="text-gray-600">Advanced predictive modeling and strict compliance protocols to mitigate financial, operational, and environmental risks.</p>
                </div>
                 <div className="flex flex-col items-center text-center p-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="bg-zenthera-light p-6 rounded-full mb-6">
                        <TrendingUp size={32} className="text-zenthera-dark" />
                    </div>
                    <h3 className="font-serif text-2xl mb-4">Technical Excellence</h3>
                    <p className="text-gray-600">A multidisciplinary team of world-class engineers innovating solutions for complex offshore and onshore challenges.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-zenthera-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16" data-aos="fade-right">
            <h2 className="font-serif text-4xl md:text-5xl text-zenthera-dark">Featured Projects</h2>
            <Link to={Page.PROJECTS} className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-zenthera-gold transition-colors">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div key={project.id} data-aos="fade-up" data-aos-delay={idx * 150}>
                  <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
             <Link to={Page.PROJECTS} className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-zenthera-gold transition-colors">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HSE Focus */}
      <section className="py-0 flex flex-col md:flex-row h-auto md:h-[600px]">
          <div className="w-full md:w-1/2 h-[400px] md:h-full relative overflow-hidden group" data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=1200&q=80" 
                alt="Safety Engineer" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
          </div>
          <div className="w-full md:w-1/2 bg-zenthera-dark text-white p-12 md:p-24 flex flex-col justify-center" data-aos="fade-left">
              <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">HSE Commitment</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Safety is not just a policy. It's our culture.</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We operate in some of the most hazardous environments on the planet. Our "Target Zero" initiative ensures that every employee returns home safely, every day. We integrate rigorous safety standards into every phase of the project lifecycle.
              </p>
              <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-4">
                      <ShieldCheck className="text-zenthera-gold" /> <span>ISO 45001 Certified Safety Systems</span>
                  </li>
                  <li className="flex items-center gap-4">
                      <Zap className="text-zenthera-gold" /> <span>Proactive Hazard Identification</span>
                  </li>
                  <li className="flex items-center gap-4">
                      <Users className="text-zenthera-gold" /> <span>Continuous Workforce Training</span>
                  </li>
              </ul>
              <Link to={Page.ABOUT} className="text-white border-b border-white pb-1 inline-block w-max hover:text-zenthera-gold hover:border-zenthera-gold transition-colors">
                  Read our HSE Policy
              </Link>
          </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-zenthera-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4" data-aos="zoom-in-up">
           <h2 className="font-serif text-4xl md:text-5xl mb-8">Ready to execute your next venture?</h2>
           <p className="text-gray-400 mb-12 text-lg">Partner with a leader in EPC services for reliable, scalable results.</p>
           <Link to={Page.QUOTE} className="bg-white text-black px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-zenthera-gold hover:text-white transition-colors duration-300">
             Request Proposal
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;