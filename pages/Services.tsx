import React from 'react';
import { Anchor, Zap, Droplet, Factory, Flame, Leaf, PenTool, Box, HardHat, Activity, Cpu, Scan, Wifi, Truck, Ship, Hammer, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const services = [
    {
        icon: Anchor,
        title: "Offshore Construction",
        desc: "Design, fabrication, and installation of fixed platforms, floating production systems (FPSO), and subsea infrastructure."
    },
    {
        icon: Flame,
        title: "Oil & Gas Processing",
        desc: "Turnkey solutions for refineries, petrochemical plants, and gas processing facilities with a focus on efficiency and safety."
    },
    {
        icon: Factory,
        title: "Heavy Civil Engineering",
        desc: "Massive foundation works, coastal protection, ports, and terminals supporting industrial logistics."
    },
    {
        icon: Droplet,
        title: "Pipeline Networks",
        desc: "Midstream pipeline construction for oil, gas, and water transport, including pumping stations and metering skids."
    },
    {
        icon: Zap,
        title: "Power Generation",
        desc: "EPC services for thermal power plants, combined cycle gas turbines (CCGT), and electrical substations."
    },
    {
        icon: Leaf,
        title: "Renewable Integration",
        desc: "Transitioning to the future with wind farm installation, solar parks, and hydrogen production facilities."
    }
];

const processSteps = [
    { icon: PenTool, title: "FEED & Design", desc: "Front-End Engineering Design to ensure technical feasibility and cost certainty." },
    { icon: Box, title: "Procurement", desc: "Strategic global sourcing of high-grade materials and specialized heavy equipment." },
    { icon: HardHat, title: "Construction", desc: "On-site execution managed by veteran project directors and safety officers." },
    { icon: Activity, title: "Commissioning", desc: "Rigorous testing, system integration, and final handover for operations." }
];

const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="Industrial Construction Services" 
        description="Expert EPC services for Offshore platforms, Refineries, Heavy Civil Works, Pipelines, and Renewable Energy facilities."
        keywords="offshore construction, refinery EPC, pipeline construction, power plant engineering, heavy civil works"
      />
      
      {/* HEADER */}
      <div className="bg-zenthera-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Industrial Expertise</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Delivering complex energy projects in the most challenging environments on Earth.</p>
        </div>
      </div>

      {/* CORE SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
                <div key={idx} className="bg-white p-10 hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
                    <service.icon size={40} className="text-zenthera-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-serif text-2xl mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* SECTION 1: EXECUTION LIFECYCLE */}
      <section className="py-24 bg-zenthera-light border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold">Our Methodology</span>
                  <h2 className="font-serif text-4xl mt-4">The Integrated EPC Model</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                  {/* Connector Line (Desktop) */}
                  <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 -z-10 transform translate-y-4"></div>

                  {processSteps.map((step, idx) => (
                      <div key={idx} className="bg-zenthera-light pt-0 md:pt-4 text-center">
                          <div className="w-20 h-20 mx-auto bg-white border-4 border-zenthera-light rounded-full flex items-center justify-center mb-6 shadow-sm z-10 relative">
                              <step.icon size={32} className="text-zenthera-dark" />
                          </div>
                          <h3 className="font-serif text-xl font-bold mb-3">{step.title}</h3>
                          <p className="text-gray-600 text-sm px-4">{step.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* SECTION 2: TECHNOLOGY */}
      <section className="py-24 bg-zenthera-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Innovation</span>
                      <h2 className="font-serif text-4xl md:text-5xl mb-8">Digital Construction</h2>
                      <p className="text-gray-400 text-lg mb-8">We leverage cutting-edge technology to reduce risk and optimize delivery schedules.</p>
                      
                      <div className="space-y-6">
                          <div className="flex gap-4">
                              <Cpu className="text-zenthera-gold shrink-0" size={24} />
                              <div>
                                  <h4 className="font-bold text-lg">BIM & Digital Twins</h4>
                                  <p className="text-gray-500 text-sm">4D/5D modeling for clash detection and asset management.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <Scan className="text-zenthera-gold shrink-0" size={24} />
                              <div>
                                  <h4 className="font-bold text-lg">Drone Surveying</h4>
                                  <p className="text-gray-500 text-sm">LiDAR scanning for precise topography and progress monitoring.</p>
                              </div>
                          </div>
                          <div className="flex gap-4">
                              <Wifi className="text-zenthera-gold shrink-0" size={24} />
                              <div>
                                  <h4 className="font-bold text-lg">IoT Site Safety</h4>
                                  <p className="text-gray-500 text-sm">Wearable sensors for workforce health and hazardous gas detection.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="relative h-[500px] border border-gray-800">
                      <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1000&q=80" alt="Digital Twin Technology" className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-8 left-8">
                          <div className="text-6xl font-serif text-white/10 font-bold">01</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION 3: FLEET CAPABILITIES */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                   <h2 className="font-serif text-4xl mb-4">Specialized Fleet</h2>
                   <p className="text-gray-600 max-w-2xl mx-auto">Zenthera owns and operates one of the largest heavy industrial fleets in the region.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative group overflow-hidden h-80">
                      <img src="https://images.unsplash.com/photo-1580901369227-3d843076c8c4?auto=format&fit=crop&w=800&q=80" alt="Cranes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col justify-end p-8">
                          <Truck className="text-zenthera-gold mb-2" size={32} />
                          <h3 className="text-white text-xl font-bold">Heavy Lifting</h3>
                          <p className="text-gray-300 text-sm">Cranes up to 1200T capacity</p>
                      </div>
                  </div>
                   <div className="relative group overflow-hidden h-80">
                      <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" alt="Vessels" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col justify-end p-8">
                          <Ship className="text-zenthera-gold mb-2" size={32} />
                          <h3 className="text-white text-xl font-bold">Marine Fleet</h3>
                          <p className="text-gray-300 text-sm">Pipelay & Construction Vessels</p>
                      </div>
                  </div>
                   <div className="relative group overflow-hidden h-80">
                      <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=800&q=80" alt="Earthworks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col justify-end p-8">
                          <Hammer className="text-zenthera-gold mb-2" size={32} />
                          <h3 className="text-white text-xl font-bold">Earthworks</h3>
                          <p className="text-gray-300 text-sm">Excavators, Dozers & Graders</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION 4: SUPPLY CHAIN */}
      <section className="py-24 bg-zenthera-light">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
               <div className="w-full md:w-1/2">
                   <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white p-6 shadow-sm">
                           <div className="text-4xl font-serif text-zenthera-gold font-bold mb-2">45</div>
                           <div className="text-xs uppercase font-bold text-gray-500">Global Warehouses</div>
                       </div>
                       <div className="bg-white p-6 shadow-sm">
                           <div className="text-4xl font-serif text-zenthera-gold font-bold mb-2">24/7</div>
                           <div className="text-xs uppercase font-bold text-gray-500">Logistics Control</div>
                       </div>
                       <div className="bg-white p-6 shadow-sm">
                           <div className="text-4xl font-serif text-zenthera-gold font-bold mb-2">98%</div>
                           <div className="text-xs uppercase font-bold text-gray-500">On-Time Materials</div>
                       </div>
                       <div className="bg-white p-6 shadow-sm">
                           <div className="text-4xl font-serif text-zenthera-gold font-bold mb-2">500+</div>
                           <div className="text-xs uppercase font-bold text-gray-500">Verified Suppliers</div>
                       </div>
                   </div>
               </div>
               <div className="w-full md:w-1/2">
                   <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Supply Chain</span>
                   <h2 className="font-serif text-4xl mb-6">Global Procurement Power</h2>
                   <p className="text-gray-600 mb-6 leading-relaxed">
                       Our centralized procurement division ensures that materials reach the most remote project sites on schedule. By leveraging long-term agreements with top-tier steel mills and equipment manufacturers, we guarantee price certainty and quality control.
                   </p>
                   <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-zenthera-gold hover:border-zenthera-gold transition-colors">
                       View Logistics Network
                   </button>
               </div>
           </div>
      </section>

      {/* SECTION 5: QUALITY ASSURANCE */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <ClipboardCheck size={48} className="mx-auto text-zenthera-dark mb-6" />
              <h2 className="font-serif text-4xl mb-12">Quality Without Compromise</h2>
              
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                   <div className="flex items-center gap-3 bg-gray-50 px-8 py-4 rounded-full">
                       <CheckCircle2 className="text-green-600" size={20} />
                       <span className="font-bold text-gray-700">ISO 9001:2015</span>
                   </div>
                   <div className="flex items-center gap-3 bg-gray-50 px-8 py-4 rounded-full">
                       <CheckCircle2 className="text-green-600" size={20} />
                       <span className="font-bold text-gray-700">ASME 'U' & 'S' Stamp</span>
                   </div>
                   <div className="flex items-center gap-3 bg-gray-50 px-8 py-4 rounded-full">
                       <CheckCircle2 className="text-green-600" size={20} />
                       <span className="font-bold text-gray-700">API Monogram</span>
                   </div>
                   <div className="flex items-center gap-3 bg-gray-50 px-8 py-4 rounded-full">
                       <CheckCircle2 className="text-green-600" size={20} />
                       <span className="font-bold text-gray-700">LEED Accredited</span>
                   </div>
              </div>
          </div>
      </section>

    </div>
  );
};

export default Services;