import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer">
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden bg-gray-200">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex flex-col justify-end p-8">
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
           <span className="text-zenthera-gold text-xs uppercase tracking-widest font-bold mb-2 block">
            {project.category}
          </span>
          <h3 className="text-white font-serif text-2xl mb-4">{project.title}</h3>
          <Link 
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 text-white text-sm uppercase tracking-wider hover:text-zenthera-gold transition-colors"
          >
            View Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Static Title (Visible when not hovering - Mobile friendly) */}
      <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full md:hidden">
         <h3 className="text-white font-serif text-xl">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;