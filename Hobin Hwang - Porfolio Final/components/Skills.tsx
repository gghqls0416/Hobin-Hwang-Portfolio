
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 border-t border-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My work skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {SKILLS.map((category, index) => (
            <div key={index} className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
