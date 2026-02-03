
import React from 'react';
import { PROFILE } from '../constants';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-black text-white py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight break-keep">
            준비된 실행력으로 <br className="hidden md:block" />
            조직의 성장에 기여하겠습니다.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mb-12 break-keep leading-relaxed">
            디자인적 감각과 AI 기술력을 결합하여, <br className="hidden md:block" />
            비즈니스의 가치를 시각화하고 현실로 구현합니다.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20">
             <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
               <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
               </div>
               <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl font-medium">{PROFILE.email}</p>
               </div>
             </a>

             <div className="group flex items-center gap-4">
               <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
               </div>
               <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-xl font-medium">{PROFILE.phone}</p>
               </div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-500">
          <div className="mb-8 md:mb-0">
            <p className="font-bold text-white mb-2 text-lg">Hobin Hwang</p>
            <p>Copyright © {new Date().getFullYear()} Hobin Hwang. All rights reserved.</p>
          </div>

          <div className="flex gap-x-12 gap-y-4">
            <div className="flex flex-col gap-2">
               <h4 className="text-white font-bold mb-1">Menu</h4>
               <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">About</a>
               <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Projects</a>
               <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">Experience</a>
            </div>
          </div>
          
           <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-8 md:mt-0 w-16 h-16 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <ArrowRight className="w-6 h-6" />
           </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
