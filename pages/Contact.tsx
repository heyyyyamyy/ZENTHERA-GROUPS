import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const offices = [
  {
    city: "Visakhapatnam",
    region: "Asia Pacific HQ",
    address: ["11th Floor, Millennium IT Towers,", "Rushikonda, Visakhapatnam – 530048"],
    phone: "+91 891 278 8888"
  },
  {
    city: "Houston",
    region: "Global Operations",
    address: ["2800 Post Oak Blvd", "Houston, TX 77056, USA"],
    phone: "+1 (713) 555-0199"
  },
  {
    city: "London",
    region: "Europe & Africa",
    address: ["1 Canada Square", "London E14 5AB, UK"],
    phone: "+44 20 7123 4567"
  },
  {
    city: "Dubai",
    region: "Middle East",
    address: ["Business Bay, Tower B", "Dubai, UAE"],
    phone: "+971 4 321 4321"
  }
];

const Contact: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Zenthera Groups for project inquiries, partnerships, or general information. Offices in Visakhapatnam, Houston, London, and Dubai." 
      />
      
      {/* Header Section */}
      <div className="bg-zenthera-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Get in Touch</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Start Your Project</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Connect with our engineering teams worldwide.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* General Info */}
            <div>
                <h2 className="font-serif text-4xl mb-8 text-zenthera-dark">General Inquiries</h2>
                <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                    For general questions, tender opportunities, or partnership requests, please contact our central desk or fill out the form. Our team typically responds within 24 hours.
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                         <div className="bg-zenthera-light p-4 rounded-full group-hover:bg-zenthera-gold transition-colors duration-300">
                            <Phone size={24} className="text-zenthera-dark group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="font-bold uppercase tracking-wider mb-1 text-sm text-gray-400">Central Phone</h3>
                            <p className="text-xl font-serif text-zenthera-dark">+1 (212) 555-0199</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                         <div className="bg-zenthera-light p-4 rounded-full group-hover:bg-zenthera-gold transition-colors duration-300">
                            <Mail size={24} className="text-zenthera-dark group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="font-bold uppercase tracking-wider mb-1 text-sm text-gray-400">Email</h3>
                            <div className="flex flex-col">
                                <a href="mailto:Info@zentheragroups.com" className="text-xl font-serif text-zenthera-dark hover:text-zenthera-gold transition-colors">Info@zentheragroups.com</a>
                                <a href="mailto:Careers@zentheragroups.com" className="text-xl font-serif text-zenthera-dark hover:text-zenthera-gold transition-colors">Careers@zentheragroups.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                         <div className="bg-zenthera-light p-4 rounded-full group-hover:bg-zenthera-gold transition-colors duration-300">
                            <Clock size={24} className="text-zenthera-dark group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="font-bold uppercase tracking-wider mb-1 text-sm text-gray-400">Business Hours</h3>
                            <p className="text-gray-600">Mon - Fri: 09:00 - 18:00 (Local Time)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-xl rounded-sm">
                <h3 className="font-serif text-2xl mb-6">Send us a message</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">First Name</label>
                            <input type="text" className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none transition-colors" placeholder="John" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Last Name</label>
                            <input type="text" className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none transition-colors" placeholder="Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Email Address</label>
                        <input type="email" className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none transition-colors" placeholder="john@company.com" />
                    </div>
                     <div>
                        <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Message</label>
                        <textarea className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none h-32 resize-none" placeholder="Tell us about your project requirements..."></textarea>
                    </div>
                    <button className="w-full bg-zenthera-dark text-white py-4 uppercase tracking-widest font-bold text-sm hover:bg-zenthera-gold transition-colors duration-300">
                        Submit Inquiry
                    </button>
                </form>
            </div>
        </div>
      </div>

      {/* Global Offices Section - Cards */}
      <div className="bg-zenthera-light py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <Globe size={32} className="mx-auto text-zenthera-gold mb-4" />
                  <h2 className="font-serif text-4xl mb-4 text-zenthera-dark">Global Footprint</h2>
                  <p className="text-gray-600">Strategically located to serve major energy hubs worldwide.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {offices.map((office, idx) => (
                      <div key={idx} className="bg-white p-8 border-t-4 border-zenthera-gold hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-md">
                          <h3 className="font-serif text-2xl mb-1">{office.city}</h3>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-6">{office.region}</span>
                          
                          <div className="space-y-4 text-sm text-gray-600">
                              <div className="flex gap-3">
                                  <MapPin size={16} className="text-zenthera-gold shrink-0 mt-1" />
                                  <p>{office.address.map((line, i) => <span key={i} className="block">{line}</span>)}</p>
                              </div>
                              {office.phone && (
                                  <div className="flex gap-3 items-center">
                                      <Phone size={16} className="text-zenthera-gold shrink-0" />
                                      <p>{office.phone}</p>
                                  </div>
                              )}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default Contact;