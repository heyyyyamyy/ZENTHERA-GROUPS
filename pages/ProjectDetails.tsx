import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projectsData';
import { MapPin, Calendar, Briefcase, DollarSign, ArrowLeft, CheckCircle2, ShieldCheck, Leaf } from 'lucide-react';
import SEO from '../components/SEO';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(Number(id));

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-4 text-center">
        <SEO title="Project Not Found" description="The project you are looking for does not exist." />
        <h2 className="text-3xl font-serif mb-4">Project Not Found</h2>
        <Link to="/projects" className="text-zenthera-gold underline">Return to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={project.title} 
        description={`Project Case Study: ${project.title}. ${project.description} Located in ${project.location}.`}
        image={project.image}
        keywords={`${project.category}, ${project.location}, construction project, engineering case study`}
        type="article"
      />

      {/* SECTION 1: HERO */}
      <div className="relative h-[80vh] w-full">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
            <div className="max-w-7xl mx-auto">
                <Link to="/projects" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 text-sm uppercase tracking-widest transition-colors">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
                <span className="block text-zenthera-gold font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h1 className="font-serif text-5xl md:text-7xl mb-4">{project.title}</h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">{project.description}</p>
            </div>
        </div>
      </div>

      {/* SECTION 2: OVERVIEW & STATS */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
                <h2 className="font-serif text-4xl mb-6">Executive Summary</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {project.title} represents a benchmark in modern construction within the {project.category} sector. 
                    Executed with precision by Zenthera Groups, this project demonstrates our ability to deliver complex infrastructure under challenging conditions.
                    From initial FEED studies to final commissioning, our integrated approach ensured operational readiness on day one.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                    The facility now plays a critical role in the regional energy matrix, adhering to the strictest international standards for safety and efficiency.
                </p>
            </div>
            
            <div className="bg-gray-50 p-8 border-l-4 border-zenthera-gold h-fit">
                <h3 className="font-serif text-2xl mb-6">Project Data</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-zenthera-gold mt-1" size={20} />
                        <div>
                            <span className="block text-xs uppercase text-gray-400 font-bold">Location</span>
                            <span className="font-medium text-lg">{project.location}</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Briefcase className="text-zenthera-gold mt-1" size={20} />
                        <div>
                            <span className="block text-xs uppercase text-gray-400 font-bold">Client</span>
                            <span className="font-medium text-lg">{project.client}</span>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <DollarSign className="text-zenthera-gold mt-1" size={20} />
                        <div>
                            <span className="block text-xs uppercase text-gray-400 font-bold">Project Value</span>
                            <span className="font-medium text-lg">{project.value}</span>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Calendar className="text-zenthera-gold mt-1" size={20} />
                        <div>
                            <span className="block text-xs uppercase text-gray-400 font-bold">Completion</span>
                            <span className="font-medium text-lg">{project.year}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: THE CHALLENGE & SOLUTION */}
      <section className="py-24 bg-zenthera-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div>
                      <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">The Challenge</span>
                      <h2 className="font-serif text-3xl md:text-4xl mb-6">Navigating Complexity</h2>
                      <p className="text-gray-400 text-lg leading-relaxed">
                          {project.challenge}
                      </p>
                      <div className="mt-8 border-t border-gray-800 pt-8">
                          <div className="flex items-center gap-4 text-white">
                               <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center text-red-500 font-bold">!</div>
                               <p className="text-sm text-gray-400 font-mono uppercase">Critical constraints identified during planning phase</p>
                          </div>
                      </div>
                  </div>
                  
                  <div>
                      <span className="text-green-500 text-sm uppercase tracking-widest font-bold mb-4 block">Our Solution</span>
                      <h2 className="font-serif text-3xl md:text-4xl mb-6">Engineered Precision</h2>
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                          {project.solution}
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-center gap-3">
                              <CheckCircle2 className="text-green-500" size={20} />
                              <span>Advanced Engineering Methodology</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <CheckCircle2 className="text-green-500" size={20} />
                              <span>Optimized Supply Chain Logistics</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <CheckCircle2 className="text-green-500" size={20} />
                              <span>Specialized Heavy Lifting Equipment</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION 5: IMPACT */}
      <section className="py-20 bg-zenthera-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-block p-4 rounded-full bg-green-100 mb-6">
                  <Leaf className="text-green-700" size={32} />
              </div>
              <h2 className="font-serif text-4xl mb-6">Outcome & Sustainability</h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-12">
                  {project.impact}
              </p>

              <div className="flex flex-wrap justify-center gap-12">
                  <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-zenthera-dark mb-1">0</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500">Lost Time Incidents</div>
                  </div>
                  <div className="w-px h-16 bg-gray-300 hidden md:block"></div>
                   <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-zenthera-dark mb-1">100%</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500">Compliance Rate</div>
                  </div>
                  <div className="w-px h-16 bg-gray-300 hidden md:block"></div>
                   <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-zenthera-dark mb-1">On Time</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500">Delivery Status</div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default ProjectDetails;