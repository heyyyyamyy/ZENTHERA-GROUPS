import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';

const categories = [
  "ALL PROJECTS",
  "OIL & GAS",
  "OFFSHORE",
  "RENEWABLE ENERGY",
  "PETROCHEMICALS",
  "INFRASTRUCTURE"
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");

  const filteredProjects = activeFilter === "ALL PROJECTS"
    ? projectsData
    : projectsData.filter(p => p.category.toUpperCase() === activeFilter);

  return (
    <div className="pt-24 min-h-screen bg-white">
       <SEO 
         title="Project Portfolio" 
         description="Explore Zenthera Groups' diverse portfolio of completed projects across Oil & Gas, Offshore, Renewable Energy, and Infrastructure sectors."
       />

       {/* Header */}
       <div className="bg-zenthera-light py-20 px-4 mb-16">
          <div className="max-w-7xl mx-auto text-center">
              <span className="text-zenthera-gold text-sm uppercase tracking-widest font-bold mb-4 block">Our Portfolio</span>
              <h1 className="font-serif text-5xl md:text-6xl mb-6 text-zenthera-dark">Global Case Studies</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Explore our diverse track record of delivering excellence in the world's most challenging environments.
              </p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`
                          px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border
                          ${activeFilter === cat
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
                          }
                        `}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProjects.map((project, idx) => (
                    <div key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 bg-gray-50 border border-dashed border-gray-200">
                    <p className="text-lg text-gray-500">No active projects found in this sector.</p>
                </div>
            )}
       </div>
    </div>
  );
};

export default Projects;