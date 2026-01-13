export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  tagline: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  impact?: string[];
  liveUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
}

export interface Education {
  institution: string;
  degree: string;
  score: string;
  period: string;
}

export interface Achievement {
  title: string;
  issuer?: string;
}

export interface Interest {
  title: string;
  description: string;
  stats?: string;
  link?: string;
}

export const profile: Profile = {
  name: "Soumya Jain",
  title: "Software Engineer",
  email: "somyajain2208@gmail.com",
  phone: "+91 9511335264",
  linkedin: "https://www.linkedin.com/in/soumya-jain-dev/",
  github: "https://github.com/Sandytherock",
  tagline: "Building production-ready mobile & web applications with React, React Native, and MERN stack",
  summary: "2025 B.Tech Computer Science Engineering graduate with hands-on experience in building and deploying mobile and web applications. Proficient in React, React Native, and MERN stack development with strong focus on secure authentication, clean UI/UX, and performance optimization. Experienced in real-world product development, internships, and hackathons, with solid understanding of Data Structures and Algorithms.",
  highlights: [
    "B.Tech CSE 2025",
    "React Native + MERN",
    "Play Store Deployed",
    "Production Experience"
  ]
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Frontend/Mobile",
    items: ["ReactJS", "React Native", "Bootstrap", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "ExpressJS", "Flask", "Firebase"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Supabase", "Razorpay"]
  },
  {
    category: "Concepts",
    items: ["Data Structures and Algorithms"]
  }
];

export const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "ByteXL",
    period: "June 2025 - July 2025",
    description: [
      "Developed Captcha Crafters, a multi-format CAPTCHA platform supporting text, image, and audio CAPTCHAs using React and Flask",
      "Implemented secure user authentication, role-based access, and API key management using Supabase for controlled API usage",
      "Worked on backend logic and database handling, improving system reliability and response handling",
      "Collaborated using Git/GitHub for version control, code reviews, and team-based development workflows"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Test Yodha",
    description: "Production-ready competitive exam preparation mobile application with comprehensive test series and analytics",
    tech: ["React Native (Expo)", "Firebase", "Razorpay"],
    features: [
      "Firebase Authentication (Email/Google) and Firestore for real-time data storage",
      "MCQ-based test series with detailed performance analytics including accuracy, speed, and time analysis",
      "Integrated Razorpay payments with coupon system, wallet balance, and referral rewards",
      "Community-driven Doubt Discussion section where users can post questions, comment, and share images",
      "Anti-cheat mechanisms including auto-submit on minimize and single-device login restriction"
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.manishjr18.TestYodha"
  },
  {
    title: "Chalo Kahi Chale",
    description: "Responsive travel booking web application with focus on performance and scalability",
    tech: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
    features: [
      "Secure user authentication and authorization flows for account creation and session management",
      "MongoDB schemas for users, destinations, and bookings ensuring efficient data organization",
      "Destination search and filtering functionality to enhance user navigation",
      "Optimized database queries and indexing strategies"
    ],
    impact: [
      "~25% faster data retrieval",
      "~40% faster page load times"
    ]
  },
  {
    title: "Bharat Abhiyantrik",
    description: "Cross-platform desktop application for Shell engineers to analyze and manage chemical composition data",
    tech: ["ElectronJS", "NodeJS", "ExpressJS", "MongoDB", "Bootstrap", "ExcelJS", "ChartJS"],
    features: [
      "ChartJS integration for visual data analytics and insights for efficient decision-making",
      "ExcelJS for bulk data import and admin-level data management",
      "Backend services using Node.js, ExpressJS, and MongoDB to streamline data processing and storage"
    ],
    impact: [
      "~30% improvement in data handling efficiency"
    ]
  }
];

export const education: Education[] = [
  {
    institution: "Parul Institute of Engineering and Technology, Vadodara",
    degree: "B.Tech, Computer Science Engineering",
    score: "CGPA 7.67",
    period: "Aug 2021 – May 2025"
  },
  {
    institution: "Maharshi Dayanand Saraswati Sr. Sec. School",
    degree: "Class XII (Science/Maths)",
    score: "86.2%",
    period: "Apr 2021 – Mar 2022"
  }
];

export const achievements: Achievement[] = [
  {
    title: "Software Engineering",
    issuer: "NPTEL"
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL"
  },
  {
    title: "Finalist",
    issuer: "Odoo Hackathon"
  },
  {
    title: "Offer Secured",
    issuer: "Tech Mahindra (Graduate Engineer Trainee)"
  }
];

export const interests: Interest[] = [
  {
    title: "Guitar Tutorial Creator",
    description: "Creating structured guitar learning content on YouTube",
    stats: "5K+ subscribers (sandytherock)",
    link: "https://www.youtube.com/@SandyTheRock"
  },
  {
    title: "Travel Vlogger",
    description: "Capturing and publishing travel stories",
    stats: "4K+ subscribers (Safarnama – The Traveller)",
    link: "https://www.youtube.com/@safarnamathetraveller"
  }
];
