import React from 'react';
import { EXPERIENCE, EDUCATION, LEADERSHIP } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 container mx-auto">
      
      {/* Work Experience */}
      <div className="flex justify-between items-center mb-12 border-b border-gray-200 pb-6">
        <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        <span className="hidden md:block text-gray-400">Past & Present</span>
      </div>

      <div className="grid gap-12 mb-24">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 group">
             <div className="md:w-1/4">
                <span className="text-sm font-semibold text-gray-400 block mb-1">{exp.period}</span>
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-gray-600 italic">{exp.role}</p>
             </div>
             <div className="md:w-3/4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
             </div>
          </div>
        ))}
      </div>

      {/* Education & Leadership Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Education */}
        <div>
           <h2 className="text-3xl font-bold mb-8 border-b border-gray-200 pb-4">Education</h2>
           <div className="space-y-10">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{edu.school}</h3>
                      <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">{edu.period}</span>
                   </div>
                   <p className="text-gray-700 font-medium">{edu.degree}</p>
                   {edu.gpa && <p className="text-gray-500 text-sm mt-1">GPA: {edu.gpa}</p>}
                </div>
              ))}
           </div>
        </div>

        {/* Leadership */}
        <div>
           <h2 className="text-3xl font-bold mb-8 border-b border-gray-200 pb-4">Leadership</h2>
           <div className="space-y-10">
              {LEADERSHIP.map((lead, idx) => (
                <div key={idx}>
                   <h3 className="font-bold text-lg">{lead.company}</h3>
                   <div className="flex items-center gap-2 mb-2">
                     <span className="text-sm font-medium bg-pastel-blue px-2 py-0.5 rounded">{lead.role}</span>
                     <span className="text-xs text-gray-400">{lead.period}</span>
                   </div>
                   <p className="text-gray-600 text-sm">{lead.description[0]}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;