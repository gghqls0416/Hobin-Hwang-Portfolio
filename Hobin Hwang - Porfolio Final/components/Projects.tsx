
import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight">주요 프로젝트</h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto text-lg">
          브랜드 런칭부터 AI Vibe Coding까지, <br className="md:hidden" />
          기술과 디자인을 결합해 아이디어를 현실로 구현한 프로젝트들입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-gray-100">
        {PROJECTS.map((project, index) => {
          const isFeatured = index === 0;
          
          return (
            <div 
              key={project.id} 
              onClick={() => onSelectProject(project.id)}
              className={`group relative min-h-[550px] md:min-h-[700px] flex flex-col justify-between p-8 md:p-16 transition-all hover:brightness-110 cursor-pointer border-r border-b border-white/5 last:border-r-0 ${isFeatured ? 'md:col-span-2' : 'md:col-span-1'} ${project.bgColor}`}
            >
              {/* Image Container */}
              <div className={`flex-grow flex items-center justify-center mb-10 relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-white/10 ${isFeatured ? 'max-w-5xl mx-auto w-full' : 'w-full'}`}>
                  <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full absolute inset-0 transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Content Info */}
              <div className="z-10 relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">{project.role}</span>
                  <span className="w-8 h-[1px] bg-white opacity-20"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">{project.period}</span>
                </div>
                
                <h3 className={`${isFeatured ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} font-bold mb-4 leading-tight text-white`}>
                  {project.title}
                </h3>
                <p className={`${isFeatured ? 'text-xl' : 'text-lg'} text-white/70 mb-8 font-medium max-w-2xl`}>
                  {project.subtitle}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                   {project.tech.split(',').slice(0, 4).map((t, i) => (
                      <span key={i} className="text-[10px] md:text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/10 shadow-sm">
                        {t.trim()}
                      </span>
                   ))}
                </div>
              </div>
              
              <div className="absolute top-12 right-12 md:top-16 md:right-16 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-6 h-6 text-black" />
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
