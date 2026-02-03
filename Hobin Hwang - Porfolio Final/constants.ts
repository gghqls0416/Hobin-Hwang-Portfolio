
import { Project, Experience, Education, SkillCategory } from './types';

export const PROFILE = {
  name: "Hobin Hwang",
  koreanName: "황호빈",
  title: "AI-Native Maker & Business Builder",
  tagline: "기술로 상상을 현실로, 데이터로 비즈니스는 증명합니다.",
  subTagline: "Design Media Arts Major @ UCLA | AI Vibe Coder",
  email: "cisshhb@gmail.com",
  phone: "010-4620-8051",
  about: {
    intro: "Design x Tech x Business",
    desc: "UCLA에서 Design Media Arts를 전공하며, 디자인 감각과 비즈니스 마인드를 겸비했습니다. 코딩 전문 지식이 없어도 AI(LLM)를 활용해 실제 상용 수준의 프로덕트를 구현하는 'AI Vibe Coding' 역량을 보유하고 있습니다. 패션 브랜드 1인 창업부터 앱 개발까지, 아이디어를 0에서 1로 만들어내는 실행력(Execution)과 문제를 끝까지 해결하는 집요함(Grit)이 저의 가장 큰 무기입니다."
  },
  highlights: [
    { label: "AI-Native", desc: "ChatGPT, Gemini 등 거대언어모델(LLM)을 활용한 AI 네이티브 풀스택 개발 가능." },
    { label: "Design Proficiency", desc: "Adobe Illustrator, Adobe Photoshop 등 디자인 툴의 능숙한 활용 및 실제 제품 생산 경험 보유." },
    { label: "All-Rounder", desc: "기획, 디자인, 개발, 마케팅, CS, 생산 관리까지 비즈니스 전 주기 경험." },
    { label: "Global Communication", desc: "Native 수준의 영어 구사 능력 및 글로벌 콘텐츠 감각 보유." }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'bornlazy',
    title: "BORNLAZY",
    subtitle: "기획부터 디자인, 생산, CS까지. 1인 창업으로 경험한 A to Z",
    period: '2025.04 - 2025.10',
    role: 'Brand Director (Founder)',
    tech: 'Adobe Illustrator, Adobe Photoshop',
    bgColor: 'bg-neutral-900', // Dark neutral
    image: 'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/7410bceb3778b7a45113db1681f127b8de9d7a95/Gemini_Generated_Image_2504032504032504%202.png',
    gallery: [
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/sns%20contents.png',
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/sns%20contents%202.png',
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/post%203%20demo.png',
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/post%205%20demo.png',
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/post%207-2%20demo.png',
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/brand%20photo%203.jpg',
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/product%20shot%203.jpg',
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/product%20shot.jpg',
      'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/6ea2c56f2019800816977eee3cb2957b0ce8fbb5/product%20shot%202.jpg'
    ],
    description: [
      '[Concept: MZ세대의 딜레마를 입다]',
      '"게으르지만 성공하고 싶은" 심리를 대변하는 브랜드 B[ ]RNLAZY를 런칭했습니다. 단순한 의류 판매를 넘어 타겟 오디언스의 공감을 이끌어내는 브랜딩을 시도했습니다.'
    ],
    features: [
      { title: 'Identity Spot', desc: '키링/참을 부착할 수 있는 \'Identity Spot\'을 의류에 배치하여 커스터마이징 트렌드 공략.' },
      { title: 'Production Process', desc: '일러스트레이터로 도안 직접 제작 및 공장 핸들링. 3-4회의 샘플링을 통해 핏과 퀄리티 최적화.' },
      { title: 'Risk Management', desc: '\'Pre-order\' 및 \'Made-to-order\' 방식과 프리사이즈 전략으로 재고 리스크 및 반품률 최소화.' }
    ],
    result: '제품 퀄리티를 넘어 브랜드의 \'문화\'와 \'헤리티지\'를 파는 마케팅의 중요성 체득.'
  },
  {
    id: 'running-audio-nav',
    title: 'Running Audio Nav',
    subtitle: '러너의 안전과 몰입을 위한 핸즈프리(Hands-free) 턴바이턴 내비게이션',
    period: '2025.12 - 2026.01',
    role: '1인 개발 (Product Owner, Dev, Design)',
    tech: 'Antigravity(Gemini), ChatGPT(Codex), Lovable, Figma Make, Kakaomap API',
    bgColor: 'bg-[#1a1a1a]', // Off-black
    image: 'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/main/Gemini_Generated_Image_7kav2x7kav2x7kav.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=1000'
    ],
    description: [
      '[Problem: 화면을 보느라 깨지는 몰입과 안전]',
      '새로운 코스를 달릴 때 경로 확인을 위해 스마트폰을 수시로 주시해야 하는 불편함과 전방 주시 태만으로 인한 사고 위험성을 발견했습니다.',
      '이러한 문제를 해결하기 위해 오직 소리에만 의존하여 달릴 수 있는 서비스를 기획했습니다.'
    ],
    features: [
      { title: 'Turn-by-Turn Logic', desc: 'GPX 경로 데이터를 기반으로 회전 구간 각도를 계산, 진입 전 음성으로 방향을 안내하는 자체 알고리즘 구현.' },
      { title: 'AI-Driven Dev', desc: 'Lovable 등 AI 툴을 복합적으로 활용하여 자연어로 로직을 설계하고 디버깅하는 프로세스 정립.' },
      { title: 'UX/UI', desc: '러닝 중 시인성을 고려한 직관적 인터페이스 설계 및 도보 전용 API 활용.' }
    ],
    result: 'GPS 오차 보정 알고리즘 적용 및 Localhost 환경 MVP 구동 성공. 비개발자의 한계를 기술(AI) 활용 능력으로 극복.'
  },
  {
    id: 'dream-recorder',
    title: 'Dream Recorder',
    subtitle: '무의식의 시각화, AI가 그려주는 나만의 꿈 기록장',
    period: '진행 중 (Current)',
    role: 'Product Planner & Developer',
    tech: 'Antigravity(Gemini), ChatGPT, Figma Make',
    bgColor: 'bg-[#111111]', // Pure dark
    image: 'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/7410bceb3778b7a45113db1681f127b8de9d7a95/Gemini_Generated_Image_ugelrmugelrmugel%20(1).png',
    gallery: [
        'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/fc51e2c6861aa2193984a4efc86c849516d1b5f2/IMG_4419.jpg',
        'https://raw.githubusercontent.com/gghqls0416/Hobin-Hwang-Portfolio/fc51e2c6861aa2193984a4efc86c849516d1b5f2/IMG_4407.jpg'
    ],
    description: [
      '무의식의 영역인 꿈을 AI 기술을 활용해 시각화하고 기록하는 서비스입니다.',
      '텍스트 입력의 번거로움을 없애고, 목소리만으로 꿈을 기록하면 AI가 서사를 분석하고 이미지를 생성해줍니다.'
    ],
    features: [
      { title: 'Voice-to-Dream', desc: '텍스트 입력 없이 목소리만으로 꿈 내용을 기록 및 분석.' },
      { title: 'Thinking Brain', desc: '멀티모달 AI를 활용해 꿈의 서사를 추론하고 논리적으로 재구성.' },
      { title: 'Creative Artist', desc: 'AI 이미지 생성 모델을 활용해 꿈의 몽환적인 분위기를 시각화하는 생성 파이프라인 구축.' }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'esteem',
    company: 'Esteem (에스팀)',
    role: 'Intern',
    period: '2018.07 - 2018.09',
    location: 'Seoul',
    description: [
      "글로벌 모델들의 토론 팟캐스트 '얄개즈' 번역 수행 (브랜드, 디자인, 스타일 주제).",
      "영상 콘텐츠 모니터링 및 피드백, 비즈니스 영어 커뮤니케이션 지원."
    ]
  },
  {
    id: 'wordpress',
    company: 'Wordpress 여행 블로그',
    role: 'Creator',
    period: '2023.09 - 2024.02',
    description: [
      "국가별 관광지 여행 코스 및 숙박 추천 콘텐츠 기획/발행.",
      "웹 기반 미디어 운영 및 트래픽 분석 경험."
    ]
  },
  {
    id: 'self-employed',
    company: 'Project Manager (Self-employed)',
    role: 'Project Manager',
    period: '2023.12 - 2024.07',
    description: [
      "팀 기반 프로젝트 투자 및 운영, 의사결정 책임 수행.",
      "조직 내 역할 분담과 커뮤니케이션의 중요성 체득."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: 'University of California, Los Angeles (UCLA)',
    period: '2019.09 - 2028.06 (Expected)',
    degree: 'Design Media Arts (휴학 중)',
    gpa: '3.0 / 4.0'
  },
  {
    school: 'Korea International School Jeju (KIS Jeju)',
    period: '2017.08 - 2019.05',
    degree: 'High School Diploma',
    gpa: '3.5 / 4.0'
  }
];

export const LEADERSHIP: Experience[] = [
  {
    id: 'ukv',
    company: 'UCLA 총 한인학생회 (UKV)',
    role: '미디어부',
    period: '2019.09 - 2021.05',
    description: ["캘리포니아주 연합 대학(USC, UCI 등) 교류 이벤트 홍보물 기획 및 디자인 제작."]
  },
  {
    id: 'kis-keyclub',
    company: 'KIS Jeju Key Club',
    role: 'Art Director',
    period: '2018.08 - 2019.05',
    description: ["교내 이벤트 총괄 및 모금 활동용 굿즈 디자인/제작."]
  },
  {
    id: 'kis-yearbook',
    company: 'KIS Jeju Yearbook & Goods Club',
    role: 'Designer',
    period: '2018.08 - 2019.05',
    description: ["졸업앨범 사진 촬영, 편집 및 레이아웃 디자인.", "교내 단체 의류 및 로고 디자인 총괄."]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "AI & Tech",
    items: ["AI Vibe Coding", "Antigravity(Gemini)", "ChatGPT(Codex)", "Lovable", "Figma Make", "Web MVP Development"]
  },
  {
    title: "Design",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Product Design", "Brand Identity"]
  },
  {
    title: "Data & Office",
    items: ["Excel (Pivot Table)", "PowerPoint (Expert)", "MOS Excel Expert", "MOS PPT 2016"]
  },
  {
    title: "Languages",
    items: ["English (Native/Business)", "Korean (Native)"]
  }
];
