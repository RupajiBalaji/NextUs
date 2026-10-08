export interface CompanyPartner {
  id: string;
  name: string;
  type: string;
  industry: string;
  location: string;
  testimonial?: {
    quote: string;
    author?: string;
    designation?: string;
  };
  highlighted?: boolean;
  servicesProvided: string[];
}

export interface StudentSuccessStory {
  id: string;
  studentName: string;
  role: string;
  company: string;
  testimonial: string;
  batch?: string;
  domain: 'Engineering' | 'Frontend' | 'Data & Cloud' | 'Quality Assurance' | 'Full Stack';
  avatarInitials: string;
  avatarBg: string;
}

export interface RecruitmentService {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detailedPoints: string[];
  audience: 'Both' | 'Candidates' | 'Companies';
  badge: string;
}

export interface LeaderContact {
  name: string;
  role: string;
  mobile: string;
  mobileRaw: string;
  email: string;
  bio?: string;
}

export const COMPANY_INFO = {
  name: 'NextUs',
  parentCompany: 'SwapNow Private Limited',
  tagline: 'Helping the right talent reach the right position.',
  subTagline: 'Right Talent. Right Position. Right Opportunity.',
  category: 'IT Recruitment Firm',
  headquarters: {
    name: 'Alt.f Begumpet',
    street: 'Alt.f, Begumpet',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    mapsUrl: 'https://maps.google.com/?q=Alt.f+Begumpet+Hyderabad',
  },
  mission: 'To eliminate the mismatch in the tech talent ecosystem by deeply evaluating skills, aspirations, and organizational culture before every placement.',
};

export const LEADERSHIP: LeaderContact[] = [
  {
    name: 'Roshini Thakur',
    role: 'Founder',
    mobile: '+91 86392 88140',
    mobileRaw: '+918639288140',
    email: 'Thakurroshinisingh@gmail.com',
    bio: 'Leading strategic partnerships, institutional networks, and talent acquisition operations across NextUs.',
  },
  {
    name: 'Jayprakash Yadav Bomma',
    role: 'Co-Founder',
    mobile: '+91 90141 93358',
    mobileRaw: '+919014193358',
    email: 'jpyadav.bomma@gmail.com',
    bio: 'Spearheading client relations, technical screening frameworks, and recruitment delivery.',
  },
];

export const SERVICES: RecruitmentService[] = [
  {
    id: 'it-talent-recruitment',
    number: '01',
    title: 'IT Talent Recruitment',
    shortDesc: 'Full-lifecycle technical recruitment for software engineers, frontend/backend developers, and infrastructure specialists.',
    detailedPoints: [
      'Niche tech stack talent acquisition',
      'Pre-vetted candidates aligned with stack architecture',
      'Rapid turnaround time for mission-critical roles',
    ],
    audience: 'Companies',
    badge: 'Enterprise & Startups',
  },
  {
    id: 'student-graduate-placement',
    number: '02',
    title: 'Student & Graduate Placement',
    shortDesc: 'Structured placement assistance matching graduating engineers and MCA/BCA students to entry-level IT roles.',
    detailedPoints: [
      'Resume refinement and portfolio readiness',
      'Mock interview preparation and assessment feedback',
      'Direct interview pipelines with verified hiring partners',
    ],
    audience: 'Candidates',
    badge: 'Early Career',
  },
  {
    id: 'candidate-screening',
    number: '03',
    title: 'Candidate Screening & Assessment',
    shortDesc: 'Rigorous multi-stage vetting assessing both foundational coding ability and real-world problem-solving aptitude.',
    detailedPoints: [
      'Hands-on technical assessment checks',
      'Communication and culture-fit evaluations',
      'Validation of practical project repositories',
    ],
    audience: 'Companies',
    badge: 'Quality Assurance',
  },
  {
    id: 'talent-matching',
    number: '04',
    title: 'Precision Talent Matching',
    shortDesc: 'Purposeful matching based on technical proficiency, problem-solving mindset, and workplace culture fit.',
    detailedPoints: [
      'Zero keyword-stuffing; true competency mapping',
      'Requirement-depth interviews with hiring managers',
      'High retention rates post-probation',
    ],
    audience: 'Both',
    badge: 'Core Competency',
  },
  {
    id: 'company-hiring-support',
    number: '05',
    title: 'Company Hiring Support',
    shortDesc: 'Dedicated talent partner support acting as an agile extension of internal HR and engineering leadership teams.',
    detailedPoints: [
      'Role requirement definition and salary benchmarking',
      'Interview scheduling and candidate coordination',
      'Offer rollout guidance and joining assistance',
    ],
    audience: 'Companies',
    badge: 'End-to-End',
  },
  {
    id: 'educational-institutional-connect',
    number: '06',
    title: 'Connecting Institutions with Industry',
    shortDesc: 'Bridging engineering colleges and technical universities directly with corporate hiring drives and internship programs.',
    detailedPoints: [
      'Campus pool drives and centralized recruitment',
      'Curriculum-to-industry alignment workshops',
      'Direct industry access for Tier-2 & Tier-3 colleges',
    ],
    audience: 'Both',
    badge: 'Campus Connect',
  },
  {
    id: 'career-opportunities-freshers',
    number: '07',
    title: 'Career Opportunities for Fresh Graduates',
    shortDesc: 'Guiding aspiring tech graduates through their critical first career transition into reputable software firms.',
    detailedPoints: [
      'Access to unlisted and emerging entry roles',
      'Salary negotiation and contract clarity',
      'Ongoing post-placement career check-ins',
    ],
    audience: 'Candidates',
    badge: 'Launchpad',
  },
];

export const PARTNERS_AND_CLIENTS: CompanyPartner[] = [
  {
    id: 'urvah-dynamics',
    name: 'Urvah Dynamics Private Limited',
    type: 'Primary Client & Hiring Partner',
    industry: 'Engineering & Advanced Technology',
    location: 'Hyderabad, India',
    testimonial: {
      quote: 'Thank you to NextUs for helping us find and deliver the right talent for our company.',
      author: 'Leadership Team',
      designation: 'Urvah Dynamics Private Limited',
    },
    highlighted: true,
    servicesProvided: ['Core IT Hiring', 'Specialized Engineering Talent', 'Technical Screening'],
  },
  {
    id: 'viswam-edutech',
    name: 'Viswam Edutech',
    type: 'Placement & Educational Partner',
    industry: 'EdTech & Learning Solutions',
    location: 'Hyderabad, India',
    testimonial: {
      quote: 'NextUs consistently bridges the gap between academic capability and dynamic corporate requirements with dependable precision.',
      author: 'Operations Team',
      designation: 'Viswam Edutech',
    },
    highlighted: false,
    servicesProvided: ['Graduate Placement', 'EdTech Talent Sourcing', 'Institutional Connect'],
  },
  {
    id: 'radiant',
    name: 'Radiant',
    type: 'Technology & Enterprise Partner',
    industry: 'IT Services & Business Solutions',
    location: 'Hyderabad, India',
    testimonial: {
      quote: 'Fast turnaround time and meticulously vetted profiles saved our technical leads countless interview hours.',
      author: 'Hiring Team',
      designation: 'Radiant',
    },
    highlighted: false,
    servicesProvided: ['Full Stack Sourcing', 'Candidate Screening', 'Sprint Hiring Support'],
  },
];

export const STUDENT_SUCCESS_STORIES: StudentSuccessStory[] = [
  {
    id: 'story-1',
    studentName: 'Praveen Kumar Reddy',
    role: 'Junior Full Stack Developer',
    company: 'Urvah Dynamics Private Limited',
    testimonial: 'NextUs helped me find the right opportunity and guided me throughout the placement process. From mock interviews to the final round, their personal mentoring gave me the confidence I needed.',
    batch: 'Batch of 2025',
    domain: 'Full Stack',
    avatarInitials: 'PK',
    avatarBg: 'bg-blue-600',
  },
  {
    id: 'story-2',
    studentName: 'Ananya S. Sharma',
    role: 'Frontend Software Engineer',
    company: 'Radiant',
    testimonial: 'Unlike standard job portals where resumes disappear into a void, NextUs actually assessed my React projects and connected me directly with the team. I secured my offer within two weeks.',
    batch: 'Batch of 2025',
    domain: 'Frontend',
    avatarInitials: 'AS',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 'story-3',
    studentName: 'Sai Teja Varma',
    role: 'Associate Cloud & DevOps Engineer',
    company: 'Viswam Edutech',
    testimonial: 'As a fresher, finding companies willing to test real practical skills is tough. NextUs highlighted my AWS certifications and hands-on lab work to the hiring manager. Immensely grateful!',
    batch: 'Batch of 2024',
    domain: 'Data & Cloud',
    avatarInitials: 'ST',
    avatarBg: 'bg-indigo-600',
  },
  {
    id: 'story-4',
    studentName: 'Kavitha R. Nair',
    role: 'QA & Automation Engineer',
    company: 'Urvah Dynamics Private Limited',
    testimonial: 'The team at NextUs was approachable and honest about what the role demanded. They prepped me thoroughly on Selenium and API testing questions. Best recruitment team in Hyderabad!',
    batch: 'Batch of 2025',
    domain: 'Quality Assurance',
    avatarInitials: 'KN',
    avatarBg: 'bg-teal-600',
  },
  {
    id: 'story-5',
    studentName: 'Mohammed Zeeshan',
    role: 'Backend Java Developer',
    company: 'Radiant',
    testimonial: 'NextUs doesn’t treat candidates as numbers. They understood my passion for distributed backend systems and placed me where my coding abilities were actually put to use.',
    batch: 'Batch of 2025',
    domain: 'Engineering',
    avatarInitials: 'MZ',
    avatarBg: 'bg-amber-600',
  },
];

export const RECRUITMENT_METRICS = [
  { label: 'Screening Accuracy', value: '98%', detail: 'Candidates passing hiring manager rounds' },
  { label: 'Time-to-Hire', value: '< 14 Days', detail: 'Average pipeline speed from screening to offer' },
  { label: 'Campus & Institutional Reach', value: '40+', detail: 'Colleges and technical institutions linked' },
  { label: 'Post-Placement Retention', value: '94%', detail: 'Retention through first year milestones' },
];
