
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  const scrollToSkills = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 container mx-auto relative">
      <div className="max-w-6xl mt-10 md:mt-0">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-12 text-brand-black">
          I build <span className="text-gray-400">AI-Native</span> Businesses <br className="hidden md:block" />
          with <span className="italic font-serif">Design Sensibility.</span>
        </h1>
        
        <div className="space-y-4 max-w-5xl">
            <p className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight break-keep">
              상상을 콘텐츠로 만드는 속도의 차이, <br className="hidden md:block" />
              마케팅 감각까지 갖춘 AI-Native 크리에이터 황호빈입니다.
            </p>
            <p className="text-lg md:text-xl text-gray-500 font-medium">
               {PROFILE.subTagline}
            </p>
        </div>
        
        <div className="mt-20">
          <a 
            href="#skills" 
            onClick={scrollToSkills}
            className="inline-flex items-center gap-2 text-xl font-bold hover:gap-4 transition-all group border-b-2 border-black pb-1 active:scale-95 origin-left"
          >
            Browse portfolio
            <span className="text-2xl group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10">
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-16 h-16 md:w-20 md:h-20 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:border-black group bg-white/50 backdrop-blur-sm"
        >
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
