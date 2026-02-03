
import React from 'react';
import { PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Who's behind all this?</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl bg-gray-200">
               <img 
                 src="https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/77c4a04899bce8b2df8fbc4211e10689183c1d0e/PHP_9098-1-1.jpg" 
                 alt="Hobin Hwang" 
                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-6 right-6 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite] shadow-lg">
                  <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                    <path
                      id="curve"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                    />
                    <text className="text-[11px] uppercase font-bold tracking-widest fill-black">
                      <textPath xlinkHref="#curve">
                        About Me • About Me • About Me •
                      </textPath>
                    </text>
                  </svg>
               </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h3 className="text-3xl font-bold">"{PROFILE.about.intro}"</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {PROFILE.about.desc}
            </p>
            
            <div className="space-y-4 pt-4">
              {PROFILE.highlights.map((highlight, idx) => (
                <div key={idx} className="border-l-2 border-black pl-4">
                  <h4 className="font-bold text-lg">{highlight.label}</h4>
                  <p className="text-gray-600">{highlight.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
