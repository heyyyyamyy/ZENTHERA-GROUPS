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
    <div className="pt-24 min-h-screen bg-gray-50">
       <SEO 
         title="Project Portfolio" 
         description="Explore Zenthera Groups' diverse portfolio of completed projects across Oil & Gas, Offshore, Renewable Energy, and Infrastructure sectors."
         keywords="energy projects, offshore platforms, pipeline projects, solar farm construction, infrastructure case studies"
       />

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            {/* Header Section */}
            <div className="text-center mb-16" data-aos="fade-down">
                <h1 className="font-serif text-5xl md:text-6xl mb-4 text-zenthera-dark">
                    Filter by <span className="text-[#ea580c]">Sector</span>
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Explore our diverse project portfolio across the energy and infrastructure landscape.
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="200">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border shadow-sm ${
                            activeFilter === cat
                                ? 'bg-[#ea580c] text-white border-[#ea580c] shadow-md transform scale-105'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-[#ea580c] hover:text-[#ea580c]'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, idx) => (
                    <div key={project.id} data-aos="fade-up" data-aos-delay={(idx % 3) * 100}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 bg-white rounded-lg border border-gray-100 shadow-sm" data-aos="zoom-in">
                    <p className="text-xl text-gray-500 font-serif">No active projects found in this sector.</p>
                </div>
            )}
       </div>
    </div>
  );
};

export default Projects;