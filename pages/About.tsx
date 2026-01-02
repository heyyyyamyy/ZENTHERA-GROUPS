import React from 'react';
import { Award, Globe, Heart, Leaf, ShieldCheck, Target, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

// Data Arrays
const timeline = [
  { year: '1983', title: 'Foundation', desc: 'Zenthera established in Houston, focusing on pipeline maintenance.' },
  { year: '1995', title: 'Offshore Expansion', desc: 'Secured first major contract for North Sea platform maintenance.' },
  { year: '2008', title: 'Global Reach', desc: 'Opened regional headquarters in Dubai and Singapore.' },
  { year: '2015', title: 'Renewable Shift', desc: 'Launched dedicated Green Energy division for solar and wind projects.' },
  { year: '2023', title: 'Net Zero Pledge', desc: 'Committed to carbon neutrality across all operations by 2040.' }
];

const leaders = [
  { name: 'Robert Vance', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80' },
  { name: 'Elena Rodriguez', role: 'VP of Engineering', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80' },
  { name: 'Dr. Aris Thorne', role: 'Chief Safety Officer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Sarah Jenkins', role: 'Head of Sustainability', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80' },
  { name: 'Jacob R. Ironcrest', role: 'Chief Human Resources Officer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80' },
  { name: 'Priya Malhotra', role: 'Director – Strategic Development (Asia Pacific)', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80' },
  { name: 'Carlos M. Alvarez', role: 'Vice President – Infrastructure & Construction', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80' },
  { name: 'Aisha Noor Al-Hassan', role: 'Director – Offshore Energy & Power Projects', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80' }
];

const values = [
  { icon: ShieldCheck, title: 'Safety First', desc: 'We do not compromise on the health and safety of our people.' },
  { icon: Target, title: 'Precision', desc: 'Excellence in execution, from engineering design to final handover.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Driving the energy transition through responsible construction.' },
  { icon: Heart, title: 'Integrity', desc: 'Transparent dealings with clients, partners, and communities.' }
];

const About: React.FC = () => {
  return (
    <div className="w-full">
      <SEO 
        title="About Us - Our Legacy & Leadership" 
        description="Learn about Zenthera Groups' 40+ year legacy in global energy infrastructure, our executive leadership, and our commitment to safety and sustainability."
        keywords="Zenthera history, construction leadership, ISO certified contractor, EPC company profile"
      />
      
      {/* SECTION 1: HERO / LEGACY */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80" alt="Engineers at work" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" />
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-zenthera-gold hidden md:flex items-center justify-center p-4 shadow-lg">
                     <p className="text-white font-serif text-center text-lg leading-tight">
                         <span className="text-5xl block font-bold mb-2">40+</span>
                         Years of Power
                     </p>
                </div>
            </div>
            
            <div>
                <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Our Legacy</span>
                <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Building the backbone of global energy.</h1>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        Since 1983, Zenthera Groups has been a pivotal force in the energy sector. We began as a specialist in pipeline maintenance and have since evolved into a full-service EPC contractor for the world's largest energy companies.
                    </p>
                    <p>
                        Safety, integrity, and innovation are the pillars of our operation. Whether it's a deep-sea drilling rig or a next-generation hydrogen plant, we approach every project with the precision required to power nations.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: CORE VALUES */}
      <section className="bg-zenthera-dark text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold">The Zenthera Way</span>
                  <h2 className="font-serif text-4xl mt-4">Our Core Values</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {values.map((v, i) => (
                      <div key={i} className="text-center group">
                          <div className="inline-block p-6 border border-gray-700 rounded-full mb-6 group-hover:border-zenthera-gold transition-colors duration-300">
                              <v.icon size={32} className="text-zenthera-gold" />
                          </div>
                          <h3 className="text-xl font-serif mb-4">{v.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{v.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* SECTION 3: TIMELINE */}
      <section className="py-24 bg-zenthera-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-4xl text-center mb-16">Decades of Excellence</h2>
              <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2"></div>
                  
                  <div className="space-y-12">
                    {timeline.map((item, idx) => (
                        <div key={idx} className="relative pl-12 md:pl-0 md:flex items-center justify-between group">
                            {/* Dot */}
                            <div className="absolute left-[7px] top-2 md:top-1/2 md:-mt-2 w-4 h-4 rounded-full bg-zenthera-gold border-4 border-white md:left-1/2 md:-translate-x-1/2 z-10"></div>
                            
                            {/* Content */}
                            <div className={`md:w-1/2 md:px-12 ${idx % 2 === 0 ? 'md:text-right md:order-1' : 'md:order-2'}`}>
                                <span className="text-4xl md:text-5xl font-serif font-bold text-gray-300 group-hover:text-zenthera-gold transition-colors duration-300 block mb-2">{item.year}</span>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </div>
                            
                            {/* Empty space for the other side */}
                            <div className={`hidden md:block md:w-1/2 ${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}></div>
                        </div>
                    ))}
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION 4: LEADERSHIP */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="font-serif text-4xl mb-6">Our Leadership</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Guided by visionaries with decades of experience in the global energy infrastructure landscape.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {leaders.map((leader, i) => (
                      <div key={i} className="group">
                          <div className="overflow-hidden mb-6 aspect-[3/4]">
                              <img src={leader.img} alt={leader.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                          </div>
                          <h3 className="font-serif text-xl">{leader.name}</h3>
                          <p className="text-zenthera-gold text-sm uppercase tracking-widest font-bold">{leader.role}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* SECTION 5: GLOBAL FOOTPRINT */}
      <section className="py-24 bg-zenthera-dark text-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-5">
               <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-4 border-white"></div>
               <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <Globe size={48} className="text-zenthera-gold mx-auto mb-8" />
              <h2 className="font-serif text-4xl md:text-5xl mb-12">Global Footprint</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                      <h4 className="text-2xl font-bold mb-2">Houston</h4>
                      <p className="text-gray-400 text-xs uppercase tracking-widest">Global HQ</p>
                  </div>
                  <div>
                      <h4 className="text-2xl font-bold mb-2">London</h4>
                      <p className="text-gray-400 text-xs uppercase tracking-widest">Europe Operations</p>
                  </div>
                   <div>
                      <h4 className="text-2xl font-bold mb-2">Dubai</h4>
                      <p className="text-gray-400 text-xs uppercase tracking-widest">Middle East Hub</p>
                  </div>
                   <div>
                      <h4 className="text-2xl font-bold mb-2">Visakhapatnam</h4>
                      <p className="text-gray-400 text-xs uppercase tracking-widest">Asia Pacific</p>
                  </div>
              </div>
          </div>
      </section>

       {/* SECTION 6: CERTIFICATIONS */}
       <section className="py-16 border-t border-gray-100 bg-white">
           <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-2">
                   <Award size={32} /> <span className="font-bold text-xl">ISO 9001</span>
               </div>
               <div className="flex items-center gap-2">
                   <ShieldCheck size={32} /> <span className="font-bold text-xl">ISO 45001</span>
               </div>
               <div className="flex items-center gap-2">
                   <Leaf size={32} /> <span className="font-bold text-xl">LEED Gold</span>
               </div>
               <div className="flex items-center gap-2">
                   <CheckCircle size={32} /> <span className="font-bold text-xl">ASME Certified</span>
               </div>
           </div>
       </section>
    </div>
  );
};

export default About;