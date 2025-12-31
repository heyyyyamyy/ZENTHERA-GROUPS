import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group block h-full">
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-200 mb-4">
        {/* Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Overlay Action */}
        <Link 
          to={`/projects/${project.id}`}
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <ArrowUpRight size={24} />
          </div>
        </Link>
      </div>
      
      {/* Content Below Image (Clean Style) */}
      <div>
        <div className="flex items-center gap-3 mb-2">
           <div className="h-[1px] w-8 bg-zenthera-gold"></div>
           <span className="text-zenthera-gold text-xs uppercase tracking-widest font-bold">
            {project.category}
          </span>
        </div>
        <h3 className="text-zenthera-dark font-serif text-2xl group-hover:text-gray-600 transition-colors">
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;