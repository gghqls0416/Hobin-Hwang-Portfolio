
import { ArrowLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps & { onBack: () => void }> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  const isBornLazy = project.id === 'bornlazy';
  const isDreamRecorder = project.id === 'dream-recorder';
  const isRunningAudioNav = project.id === 'running-audio-nav';

  // BORNLAZY brand story image
  const brandStoryImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/brand%20story.png";

  // BORNLAZY conceptual images
  const conceptualImages = [
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/hoodie%20on%20the%20ground.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/hoodies%20on%20tree.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-01-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.39.08.png"
  ];

  // BORNLAZY Art Direction & Visuals Gallery
  const artDirectionImages = [
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/post%203%20demo.png",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/post%205%20demo.png",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/post%207-2%20demo.png",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/sns%20contents.png",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/sns%20contents%202.png",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/brand%20photo%205.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/brand%20photo%206.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/brand%20photo%207.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/brand%20photo%203.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/product%20shot%203.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/product%20shot.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/product%20shot%202.jpg"
  ];

  // BORNLAZY identity spot images
  const identitySpotImages = [
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/identity%20spot%20key%20ring.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/yellow%20scarf%20identity%20spot.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202026-01-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.39.08.png"
  ];

  // BORNLAZY Marketing Result Images
  const marketingResultImages = [
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/Gemini_Generated_Image_va23w4va23w4va23.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4573.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4572.jpg"
  ];

  // Running Audio Nav images
  const runningNavHomeImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%8E%E1%85%A5%E1%86%BA%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB.jpg";
  const runningNavMapImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%85%E1%85%A5%E1%84%82%E1%85%B5%E1%86%BC%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB.jpg";
  const runningNavArchiveImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%8C%E1%85%A5%E1%84%8C%E1%85%A1%E1%86%BC%E1%84%83%E1%85%AC%E1%86%AB%20%E1%84%85%E1%85%A5%E1%84%82%E1%85%B5%E1%86%BC%E1%84%8F%E1%85%A9%E1%84%89%E1%85%B3.jpg";
  const runningNavSearchImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3%E1%84%90%E1%85%A1%E1%86%B7%E1%84%89%E1%85%A2%E1%86%A8%E1%84%8E%E1%85%A1%E1%86%B7.jpg";
  const runningNavResultImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/result.jpg";
  const runningNavOptimizationImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A9%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC.jpg";
  const runningNavRoutePreviewImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%80%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A9%E1%84%89%E1%85%A2%E1%86%BC%E1%84%89%E1%85%A5%E1%86%BC%20%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3%20%E1%84%86%E1%85%B5%E1%84%85%E1%85%B5%E1%84%87%E1%85%A9%E1%84%80%E1%85%B5.jpg";
  const runningNavTransitionImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3%20%E1%84%89%E1%85%B5%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5.jpg";
  const runningNavHistoryImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%85%E1%85%A5%E1%84%82%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8.jpg";
  const runningNavDetailPopupImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%A8%E1%84%92%E1%85%A1%E1%84%86%E1%85%A7%E1%86%AB%20%E1%84%85%E1%85%A5%E1%84%82%E1%85%B5%E1%86%BC%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8%20%E1%84%8F%E1%85%B3%E1%84%80%E1%85%A6%E1%84%87%E1%85%A9%E1%84%80%E1%85%B5.jpg";
  const runningNavInteractiveRouteImage = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/%E1%84%85%E1%85%AE%E1%84%90%E1%85%B3%20%E1%84%86%E1%85%B5%E1%84%87%E1%85%A9%E1%84%80%E1%85%B5.jpg";

  // Dream Recorder images
  const dreamRecorderInterfaceImages = [
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4419.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4407.jpg"
  ];
  const dreamRecorderInteractionImages = [
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4408.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4409.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4410.jpg"
  ];
  const dreamRecorderMainResult = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4411.jpg";
  const dreamRecorderGalleryView = "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/33.jpg";
  const dreamGalleryCollection = [
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/IMG_4418.jpg",
    "https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/11.jpg"
  ];

  return (
    <div className="relative animate-in fade-in duration-500">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-all group active:scale-95"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold text-sm">Back to Home</span>
      </button>

      {/* Hero Header */}
      <div className={`w-full min-h-[60vh] md:min-h-[80vh] ${project.bgColor} relative flex items-end`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="container mx-auto px-6 pb-20 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded text-xs font-bold text-white uppercase tracking-widest">{project.role}</span>
              <span className="text-white/40 font-bold">•</span>
              <span className="text-white/80 font-bold text-xs uppercase tracking-widest">{project.period}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl text-white/90 font-medium leading-tight max-w-2xl">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="space-y-32">
          
          {/* 1. Overview Section */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Overview</h2>
            <div className="space-y-6">
              {project.description.map((para, i) => {
                const isHeader = para.startsWith('[') && para.includes(']');
                return (
                  <p 
                    key={i} 
                    className={`text-xl md:text-2xl leading-relaxed ${isHeader ? 'text-3xl md:text-4xl font-bold text-brand-black pt-8 first:pt-0' : 'text-gray-600'}`}
                  >
                    {para}
                  </p>
                );
              })}
            </div>
          </section>

          {/* 2. Core Experience Section */}
          {project.features.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Core Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3. Tech Stack & Project Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-y border-gray-100 py-16">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {project.tech.split(',').map((t, i) => (
                  <span key={i} className="text-sm font-bold px-5 py-2.5 bg-gray-100 rounded-xl text-brand-black">{t.trim()}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Project Metadata</h4>
              <div className="space-y-3">
                <p className="text-lg font-bold text-brand-black">Location: Seoul, KR / Remote</p>
                <p className="text-lg text-gray-500 font-medium">Duration: {project.period}</p>
                <p className="text-lg text-gray-500 font-medium">Role: {project.role}</p>
              </div>
            </div>
          </div>

          {/* 4. Impact & Results Section */}
          {project.result && (
            <section className="bg-pastel-green/10 p-10 md:p-16 rounded-[40px] border border-green-50/50">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-green-700/50 mb-6">Impact & Results</h2>
              <p className="text-2xl md:text-4xl font-bold text-green-900 leading-tight">
                {project.result}
              </p>
            </section>
          )}

          {/* 5. Project Specific Visual Content */}
          <div className="space-y-32">
            {isBornLazy && (
              <>
                {/* Brand Story */}
                <div className="space-y-12">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Brand Story</h4>
                    <p className="text-2xl font-bold text-brand-black">본레이지가 태어난 이유</p>
                  </div>
                  <div className="rounded-[40px] overflow-hidden shadow-2xl bg-black">
                    <img src={brandStoryImage} alt="BORNLAZY Story" className="w-full opacity-90" />
                  </div>
                </div>

                {/* Art Direction & Visuals Gallery */}
                <div className="space-y-12">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Art Direction & Visuals</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {artDirectionImages.map((img, i) => (
                      <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                        <img 
                          src={img} 
                          alt={`Art Direction ${i + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    ))}
                  </div>

                  <div className="max-w-3xl bg-gray-50/80 p-10 md:p-16 rounded-[40px] border border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 text-brand-black">도파민의 두 얼굴 : Smoking Kills?</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      니코틴도 결국 도파민입니다. 우리가 쫓는 모든 자극의 본질이죠. 
                      "흡연은 살인"이라는 경고문에 물음표를 더해, 도파민을 향한 인간의 맹목적인 추구가 시니컬하게 시각화했습니다.
                    </p>
                  </div>
                </div>

                {/* Conceptual Visuals Grid */}
                <div className="space-y-12">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Conceptual Visuals</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {conceptualImages.slice(0, 2).map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-xl">
                        <img src={img} alt={`Conceptual ${i}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                    
                    <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-xl">
                        <img src={conceptualImages[2]} alt="Conceptual 3" className="w-full h-full object-cover" />
                    </div>

                    <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-gray-100 bg-gray-50/80 p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 break-keep leading-tight text-brand-black uppercase tracking-tight">
                        Paradoxical Equilibrium: <br/>Dopamine in the Wild
                      </h3>
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed break-keep">
                        도파민이 결핍된 공간인 '숲'과 자극의 상징인 '도파민' 제품을 한 프레임에 담아, 
                        인위와 천연의 충돌을 통한 자극의 본질을 역설적으로 시각화했습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isRunningAudioNav && (
               <div className="space-y-32">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                        <img src={runningNavHomeImage} alt="Goal-Oriented Home Interface" className="w-full h-auto block" />
                    </div>
                    <div className="space-y-8 md:sticky md:top-32">
                       <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Core Interface Strategy</h4>
                          <h3 className="text-3xl md:text-4xl font-bold text-brand-black break-keep leading-tight">러너를 위한 목적 지향적 <br/>홈 인터페이스</h3>
                       </div>
                       <div className="bg-gray-50/80 border border-gray-100 p-8 md:p-10 rounded-[40px] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-md">
                          <p className="text-gray-600 leading-relaxed text-lg font-medium break-keep">
                            <strong className="text-brand-black block text-2xl mb-4">"준비는 짧게, 러닝은 길게."</strong>
                            사용자가 앱을 실행한 직후 '경로 탐색'과 '즉시 시작'이라는 두 가지 핵심 가치에 바로 도달할 수 있도록 설계했습니다. 
                            불필요한 단계를 제거하고, 사용자의 현재 상황에 맞는 최적의 옵션을 시각적 위계에 따라 배치하여 러닝 전의 인지적 부하를 최소화했습니다.
                          </p>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="order-2 md:order-1 space-y-8 md:sticky md:top-32">
                       <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Real-time Voice Guidance System</h4>
                          <h3 className="text-3xl md:text-4xl font-bold text-brand-black break-keep leading-tight">안전을 최우선으로 한 실시간 <br/>보이스 가이드 시스템</h3>
                       </div>
                       <div className="bg-gray-50/80 border border-gray-100 p-8 md:p-10 rounded-[40px] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-md">
                          <p className="text-gray-600 leading-relaxed text-lg font-medium break-keep">
                            <strong className="text-brand-black block text-2xl mb-4">"시각적 의존도를 낮춰 러너의 시선을 안전하게 확보합니다."</strong>
                            실시간 GPS 추적 기술을 기반으로 한 맵 인터페이스입니다. 상세한 턴바이턴(Turn-by-Turn) 음성 안내 시스템을 통해 사용자가 스마트폰 화면을 확인하느라 전방 주시를 놓치는 사고를 예방하고, 오직 달리는 행위 그 자체에만 몰입할 수 있도록 돕습니다.
                          </p>
                       </div>
                    </div>
                    <div className="order-1 md:order-2 rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                        <img src={runningNavMapImage} alt="Real-time Voice Guidance System" className="w-full h-auto block" />
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                        <img src={runningNavArchiveImage} alt="Personalized Route Archive" className="w-full h-auto block" />
                    </div>
                    <div className="space-y-8 md:sticky md:top-32">
                       <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Personalized Route Archive</h4>
                          <h3 className="text-3xl md:text-4xl font-bold text-brand-black break-keep leading-tight">GPX 기반의 개인화된 <br/>경로 아카이브</h3>
                       </div>
                       <div className="bg-gray-50/80 border border-gray-100 p-8 md:p-10 rounded-[40px] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-md">
                          <p className="text-gray-600 leading-relaxed text-lg font-medium break-keep">
                            <strong className="text-brand-black block text-2xl mb-4">"나만의 러닝 지도를 데이터로 체계화하다."</strong>
                            GPX 데이터를 활용하여 반포 한강부터 청계천까지, 사용자가 선호하는 다양한 경로를 한눈에 관리할 수 있는 라이브러리를 구축했습니다. 
                            거리와 예상 소요 시간을 직관적으로 노출하여 사용자가 그날의 컨디션에 따라 최적의 코스를 즉각적으로 선택할 수 있는 환경을 제공합니다.
                          </p>
                       </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-start pt-16">
                    <div className="order-2 md:order-1 px-6 md:px-0 mt-12 md:mt-0 space-y-8 md:sticky md:top-32">
                       <div className="space-y-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">INTERACTIVE ROUTE ANALYSIS VIA DATA VISUALIZATION</h4>
                          <h3 className="text-3xl md:text-4xl font-bold text-brand-black break-keep leading-tight">데이터 시각화를 통한 <br/>인터랙티브 루트 분석</h3>
                       </div>
                       <div className="bg-gray-50/80 border border-gray-100 p-8 md:p-12 rounded-[40px] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-md">
                          <p className="text-gray-600 leading-relaxed text-lg font-medium break-keep">
                            <strong className="text-brand-black block text-2xl mb-4">"시작 전, 경로를 완벽하게 인지하는 시각적 프리뷰."</strong>
                            선택한 루트의 실제 지형과 이동 경로를 맵 인터페이스 위에 시각화하여 제공합니다. 총 거리와 예상 시간뿐만 아니라 GPX 데이터에서 추출한 포인트 정보를 공유하여, 사용자가 달리기를 시작하기 전 전체적인 코스 난이도와 흐름을 완벽히 파악하고 심리적 대비를 할 수 있도록 설계했습니다.
                          </p>
                       </div>
                    </div>
                    <div className="order-1 md:order-2 w-full rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                        <img src={runningNavInteractiveRouteImage} alt="Interactive Route Analysis" className="w-full h-auto block" />
                    </div>
                 </div>

                 <div className="space-y-12">
                    <div className="space-y-2">
                       <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Intelligent Destination Search</h4>
                       <h3 className="text-3xl md:text-4xl font-bold text-brand-black break-keep leading-tight">카카오맵 API 기반의 정교한 <br/>목적지 탐색</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                           <img src={runningNavSearchImage} alt="Destination Search Input" className="w-full h-auto block" />
                       </div>
                       <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                           <img src={runningNavResultImage} alt="Destination Search Results" className="w-full h-auto block" />
                       </div>
                    </div>
                    <div className="bg-gray-50/80 border border-gray-100 p-8 md:p-10 rounded-[40px] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-md max-w-4xl">
                       <p className="text-gray-600 leading-relaxed text-lg font-medium break-keep">
                         <strong className="text-brand-black block text-2xl mb-4">"복잡한 도시 속, 러너의 목적지를 가장 빠르고 정확하게 찾아냅니다."</strong>
                         카카오맵 API를 연동하여 사용자가 원하는 목적지를 직관적으로 검색하고 선택할 수 있는 환경을 구축했습니다. 단순한 장소 검색을 넘어, 보도 전용 데이터를 기반으로 러너가 안전하게 접근할 수 있는 최적의 지점들을 우선적으로 제시합니다.
                       </p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-start pt-16">
                    <div className="w-full rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
                        <img src={runningNavOptimizationImage} alt="Pedestrian Route Optimization" className="w-full h-auto block" />
                    </div>
                    <div className="px-6 md:px-0 mt-12 md:mt-0 space-y-8 md:sticky md:top-32">
                       <div className="space-y-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">REAL-TIME PEDESTRIAN ROUTE OPTIMIZATION</h4>
                          <h3 className="text-3xl md:text-4xl font-bold text-brand-black break-keep leading-tight">실시간 보도 전용 <br/>경로 최적화 로직</h3>
                       </div>
                       <div className="bg-gray-50/80 border border-gray-100 p-8 md:p-12 rounded-[40px] hover:bg-white transition-all duration-500 shadow-sm hover:shadow-md">
                          <p className="text-gray-600 leading-relaxed text-lg font-medium break-keep">
                            <strong className="text-brand-black block text-2xl mb-4">"러닝에 최적화된 보도 전용 경로를 실시간으로 생성합니다."</strong>
                            사용자가 선택한 목적지까지의 경로를 생성하는 단계입니다. 자동차 중심의 길 안내가 아닌, 보행자 전용 도로 데이터를 필터링하고 분석하여 러너가 멈춤 없이 달릴 수 있는 최적의 루트를 알고리즘을 통해 계산합니다.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
            )}

            {isDreamRecorder && (
              <div className="space-y-16">
                 <div className="space-y-12">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Dream Recorder: 인터페이스 디자인</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {dreamRecorderInterfaceImages.map((img, i) => (
                         <img key={i} src={img} alt="Interface" className="w-full rounded-[40px] shadow-xl" />
                       ))}
                    </div>
                 </div>
                 <div className="bg-gray-50/80 border border-gray-100 p-10 md:p-16 rounded-[40px]">
                    <h4 className="text-3xl font-bold mb-6 break-keep leading-tight text-brand-black">기록의 흐름을 방해하지 않는 직관적 UI</h4>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-4xl break-keep">
                      꿈에서 깬 직후의 희미한 기억을 놓치지 않도록, 복잡한 과정을 덜어내고 본질에 집중했습니다. 버튼 하나로 '준비됨'에서 '기록 중' 상태로 매끄럽게 전환되는 인터랙션을 통해, 사용자가 흐름을 놓치지 않고 오직 목소리에만 집중할 수 있는 환경을 구축했습니다.
                    </p>
                 </div>
              </div>
            )}
          </div>
        </div>

        {/* 6. Signature DNA / Final Showcase Section */}
        <div className="mt-40 pt-40 border-t border-gray-100">
           {isBornLazy && (
             <div className="space-y-40">
               {/* Signature DNA Section */}
               <section className="space-y-12">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Signature DNA: The Identity Spot</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {identitySpotImages.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-xl">
                          <img src={img} alt="Identity Spot Detail" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-gray-100 bg-gray-50/80 p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 break-keep leading-tight text-brand-black uppercase tracking-tight">Modular Identity: <br/>Beyond the Garment</h3>
                      <p className="text-lg md:text-xl text-gray-600 leading-relaxed break-keep">
                        의류를 완제품이 아닌, 사용자의 개성이 투영되는 '플랫폼'으로 정의했습니다. 후드 하단에 설계된 Identity Spot은 키링, 체인, 반다나 등 다양한 오브제의 결합이 가능한 물리적 접점이 되어, 사용자에 의해 매일 새롭게 큐레이션되는 동적인 아이덴티티를 완성합니다.
                      </p>
                    </div>
                  </div>
               </section>

               {/* Marketing Performance Section */}
               <section className="space-y-16">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Performance & Data</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-black break-keep leading-tight">데이터로 증명된 실행력: <br/>런칭 3개월, 누적 2만뷰·팔로워 80%↑ 달성</h2>
                  </div>

                  <div className="bg-gray-50/80 border border-gray-100 p-10 md:p-16 rounded-[40px] space-y-10">
                    <h3 className="text-2xl font-bold text-brand-black">마케팅 성과 요약</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-brand-black mt-3 flex-shrink-0" />
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed break-keep">
                          <strong className="text-brand-black block md:inline mb-1 md:mb-0">단기간 내 폭발적 성장:</strong> 제품 디자인 및 공장 핸들링 완료 후, 본격적인 홍보 시작 3~4개월 만에 브랜드 인지도를 빠르게 확보했습니다.
                        </p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-brand-black mt-3 flex-shrink-0" />
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed break-keep">
                          <strong className="text-brand-black block md:inline mb-1 md:mb-0">누적 조회수 약 20,000회 달성:</strong> 인스타그램 채널 운영을 통해 총 19,938회의 누적 조회수를 기록하며 잠재 고객들의 높은 관심을 이끌어냈습니다.
                        </p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-brand-black mt-3 flex-shrink-0" />
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed break-keep">
                          <strong className="text-brand-black block md:inline mb-1 md:mb-0">킬러 콘텐츠의 발견:</strong> 단일 게시물 기준 <strong className="text-brand-black">최고 조회수 8,220회(약 1만 회)</strong>를 기록하며, 타겟 고객이 반응하는 핵심 비주얼과 메시지를 데이터로 확인했습니다.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {marketingResultImages.map((img, i) => (
                      <div key={i} className="rounded-[40px] overflow-hidden shadow-xl border border-gray-100 bg-white">
                        <img src={img} alt={`Marketing Result ${i + 1}`} className="w-full h-auto block" />
                      </div>
                    ))}
                  </div>

                  {/* FIXED: Style unified to match other light grey cards */}
                  <div className="bg-gray-50/80 border border-gray-100 p-10 md:p-16 rounded-[40px] shadow-sm hover:shadow-md transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 break-keep leading-tight text-brand-black">가설을 결과로 증명하는 1인 메이커의 시선</h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed break-keep">
                      디자인과 생산은 시작일 뿐, 비즈니스의 완성은 고객의 반응에 있다고 믿습니다. 1인 창업가로서 브랜드 기획부터 제품 생산까지 마친 뒤, 데이터 중심의 SNS 마케팅을 전개했습니다. <br className="hidden md:block" /><br className="hidden md:block" />
                      결과적으로 홍보 시작 120일 이내에 누적 조회수 2만 회라는 수치를 이끌어냈습니다. 단순히 심미적인 디자인에 그치지 않고, 고객의 시선을 사로잡는 콘텐츠 전략을 통해 브랜드의 시장 가능성을 직접 증명했습니다. 이러한 데이터 기반의 기획력과 빠른 실행력을 바탕으로, 조직의 목표를 현실적인 성과로 연결하겠습니다.
                    </p>
                  </div>
               </section>
             </div>
           )}

           {isDreamRecorder && (
             <section className="space-y-32">
                <div className="space-y-12">
                  <div className="space-y-2"><h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Dream Recorder: 무의식의 시각화 과정</h4></div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dreamRecorderInteractionImages.map((img, i) => (
                      <img key={i} src={img} alt="Loading sequence" className="w-full rounded-3xl shadow-md" />
                    ))}
                  </div>
                  <div className="bg-gray-50/80 border border-gray-100 p-10 md:p-16 rounded-[40px] space-y-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-black leading-tight break-keep">설계 의도: AI가 이미지를 생성하는 동안 발생하는 필연적인 대기 시간을 지루한 '멈춤'이 아닌, 꿈이 구체화되는 '기대감의 여정'으로 재정의했습니다.</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold uppercase tracking-wider text-gray-400">단계별 서사</h4>
                        <div className="space-y-4">
                          <div className="flex gap-4"><span className="text-gray-300 font-bold">01</span><p className="text-gray-600 leading-relaxed"><strong className="text-brand-black">꿈의 조각을 모으는 중...:</strong> 흩어진 음성 데이터를 수집하는 단계</p></div>
                          <div className="flex gap-4"><span className="text-gray-300 font-bold">02</span><p className="text-gray-600 leading-relaxed"><strong className="text-brand-black">무의식을 캔버스에 옮기는 중...:</strong> 데이터를 시각적 구도로 변환하는 단계</p></div>
                          <div className="flex gap-4"><span className="text-gray-300 font-bold">03</span><p className="text-gray-600 leading-relaxed"><strong className="text-brand-black">AI 화가가 붓을 들었습니다...:</strong> 최종 이미지를 생성하는 마지막 단계</p></div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-lg font-bold uppercase tracking-wider text-gray-400">사용자 경험(UX)</h4>
                        <p className="text-gray-600 leading-relaxed text-lg break-keep">정적인 로딩 바 대신 브랜드의 몽환적인 분위기를 담은 세 가지 문구를 순차적으로 노출했습니다. 이를 통해 사용자는 자신의 무의식이 시각화되는 과정을 직관적으로 체감하며 자연스럽게 서비스에 몰입하게 됩니다.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-12">
                  <div className="space-y-2"><h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">결과와 해석 (Generation & Reading)</h4></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                     <div className="rounded-[60px] overflow-hidden shadow-2xl border border-gray-100 bg-black"><img src={dreamRecorderMainResult} alt="Visualization result" className="w-full h-auto block object-contain" /></div>
                     <div className="rounded-[60px] overflow-hidden shadow-2xl border border-gray-100 bg-black"><img src={dreamRecorderGalleryView} alt="Gallery view" className="w-full h-auto block object-contain" /></div>
                  </div>
                </div>
             </section>
           )}

           {!isBornLazy && !isDreamRecorder && !isRunningAudioNav && project.gallery && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((img, i) => (
                  <img key={i} src={img} alt="Gallery" className="w-full rounded-[40px] shadow-xl" />
                ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
