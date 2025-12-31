import React, { useState, useRef } from 'react';
import { ArrowRight, MapPin, Briefcase, Upload, CheckCircle, Search } from 'lucide-react';
import SEO from '../components/SEO';

const jobs = [
  { id: 1, title: 'Offshore Structural Engineer', location: 'Houston, USA', type: 'Engineering', experience: '5-8 Years' },
  { id: 2, title: 'HSE Manager (Petrochemical)', location: 'Dubai, UAE', type: 'Safety', experience: '10+ Years' },
  { id: 3, title: 'Senior Pipeline Engineer', location: 'Mumbai, India', type: 'Engineering', experience: '7+ Years' },
  { id: 4, title: 'Project Control Manager', location: 'Visakhapatnam, India', type: 'Management', experience: '12+ Years' },
  { id: 5, title: 'Marine Operations Lead', location: 'Singapore', type: 'Operations', experience: '8+ Years' },
  { id: 6, title: 'Electrical Design Lead', location: 'Chennai, India', type: 'Engineering', experience: '6+ Years' },
  { id: 7, title: 'Procurement Manager', location: 'Delhi, India', type: 'Supply Chain', experience: '9+ Years' },
  { id: 8, title: 'Site Safety Officer', location: 'Mumbai, India', type: 'Safety', experience: '3-5 Years' },
  { id: 9, title: 'QA/QC Inspector', location: 'Visakhapatnam, India', type: 'Quality', experience: '4-6 Years' },
  { id: 10, title: 'Mechanical Maintenance Engineer', location: 'Chennai, India', type: 'Maintenance', experience: '5+ Years' },
  { id: 11, title: 'HR Business Partner', location: 'Visakhapatnam, India', type: 'Human Resources', experience: '5-8 Years' },
  { id: 12, title: 'Logistics Coordinator', location: 'Mumbai, India', type: 'Supply Chain', experience: '3-5 Years' },
  { id: 13, title: 'Instrumentation Engineer', location: 'Delhi, India', type: 'Engineering', experience: '4-7 Years' },
  { id: 14, title: 'Graduate Trainee Engineer', location: 'Pan-India', type: 'Entry Level', experience: '0-1 Years' },
  { id: 15, title: 'Subsea Systems Engineer', location: 'Aberdeen, UK', type: 'Engineering', experience: '6+ Years' }
];

const Careers: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApply = (role: string) => {
    setSelectedRole(role);
    setIsSubmitted(false);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-white">
      <SEO 
        title="Careers & Opportunities" 
        description="Join Zenthera Groups. Build the future with a world-class team of engineers and construction professionals. Openings in India, USA, UAE, and UK." 
        keywords="engineering jobs, construction careers, offshore jobs, HSE vacancies, jobs in india, oil and gas jobs"
      />
      
      {/* Hero Section */}
      <div className="bg-zenthera-dark text-white py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Work With Us</span>
                <h1 className="font-serif text-5xl md:text-6xl mb-6">Engineer the extraordinary.</h1>
                <p className="text-gray-400 text-lg mb-8">We are recruiting top-tier talent in engineering, safety, and project management to solve the world's most complex energy challenges.</p>
                
                {/* Search Bar */}
                <div className="relative max-w-xl">
                  <input 
                    type="text" 
                    placeholder="Search by job title or location..." 
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-zenthera-gold transition-colors rounded-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
            </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-8">
            <h2 className="font-serif text-3xl text-zenthera-dark">Current Openings</h2>
            <span className="text-sm text-gray-500 font-bold">{filteredJobs.length} Positions Available</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job, idx) => (
                    <div key={job.id} className="border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center group hover:border-zenthera-gold hover:shadow-md transition-all duration-300 bg-white">
                        <div className="mb-4 md:mb-0 w-full md:w-auto">
                            <h3 className="font-serif text-xl md:text-2xl mb-2 text-zenthera-dark group-hover:text-zenthera-gold transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">{job.experience}</span>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleApply(job.title)}
                            className="w-full md:w-auto px-6 py-3 bg-white border border-black text-black text-sm uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                            Apply Now <ArrowRight size={16} />
                        </button>
                    </div>
                ))
            ) : (
                <div className="text-center py-12 text-gray-500">
                    No jobs found matching your criteria.
                </div>
            )}
        </div>
      </div>

      {/* Application Form Section */}
      <div ref={formRef} className="bg-zenthera-light py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-zenthera-gold">
                  <h2 className="font-serif text-3xl mb-2 text-zenthera-dark">Job Application</h2>
                  <p className="text-gray-600 mb-8">Submit your credentials. If your profile matches our requirements, our HR team will contact you.</p>
                  
                  {isSubmitted ? (
                      <div className="text-center py-12 animate-fade-in">
                          <CheckCircle size={64} className="mx-auto text-green-500 mb-6" />
                          <h3 className="font-serif text-2xl mb-2">Application Received</h3>
                          <p className="text-gray-600 mb-6">Thank you for applying for the position of <span className="font-bold text-zenthera-dark">{selectedRole || 'Candidate'}</span>.</p>
                          <button 
                            onClick={() => {setIsSubmitted(false); setSelectedRole('');}}
                            className="text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-zenthera-gold hover:border-zenthera-gold transition-colors"
                          >
                              Submit another application
                          </button>
                      </div>
                  ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">First Name</label>
                                  <input required type="text" className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none transition-colors" placeholder="John" />
                              </div>
                              <div>
                                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Last Name</label>
                                  <input required type="text" className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none transition-colors" placeholder="Doe" />
                              </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Email Address</label>
                                  <input required type="email" className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none transition-colors" placeholder="john@example.com" />
                              </div>
                              <div>
                                  <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Phone Number</label>
                                  <input required type="tel" className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                              </div>
                          </div>

                          <div>
                              <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Position Applied For</label>
                              <input 
                                required 
                                type="text" 
                                className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none transition-colors font-bold text-zenthera-dark" 
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                                placeholder="Select a job from above or type here"
                              />
                          </div>

                          <div>
                              <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Resume / CV</label>
                              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                                  <Upload className="mx-auto text-gray-400 mb-2 group-hover:text-zenthera-gold transition-colors" size={32} />
                                  <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                                  <p className="text-xs text-gray-400 mt-1">PDF, DOCX up to 5MB</p>
                              </div>
                          </div>

                          <div>
                              <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Cover Letter</label>
                              <textarea className="w-full bg-gray-50 p-4 border-b-2 border-transparent focus:border-zenthera-gold focus:outline-none h-32 resize-none" placeholder="Tell us why you are a great fit..."></textarea>
                          </div>

                          <div className="pt-4">
                              <button className="w-full bg-zenthera-dark text-white py-4 uppercase tracking-widest font-bold text-sm hover:bg-zenthera-gold transition-colors duration-300">
                                  Submit Application
                              </button>
                          </div>
                      </form>
                  )}
              </div>
          </div>
      </div>
    </div>
  );
};

export default Careers;