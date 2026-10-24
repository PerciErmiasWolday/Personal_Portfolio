/**
 * Site-wide settings. Every value marked PLACEHOLDER needs your real content.
 * Search the project for "PLACEHOLDER" to find them all.
 */

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'scholar' | 'link';
}

export const site = {
  // Used for canonical URLs, Open Graph tags and the sitemap. No trailing slash.
  url: 'https://PLACEHOLDER-your-domain.com',

  firstName: 'Perci',
  lastName: 'Wolday',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Default <title> suffix and meta description.
  title: 'Perci Wolday · Computer Science & Mathematics, UIC',
  // Your hero introduction, used for search results and link previews.
  get description() {
    return this.intro;
  },

  // Hero: "Hey, I'm {firstName}." then this line and the intro.
  tagline: 'Computer Science & Mathematics · University of Illinois Chicago',
  // Key skills, shown as tags under your name. Taken from your experience entries.
  keySkills: ['Python', 'SQL', 'PyTorch', 'pandas', 'FastAPI', 'OpenCV', 'Machine Learning', 'AI Evaluation'],
  // Used for search results and link previews (not shown on the page).
  intro:
    "I'm studying Computer Science and Mathematics at UIC, graduating in May 2027. My work spans software engineering, machine learning, and AI evaluation, from building payment systems to researching how AI behaves in different situations.",
  // Second hero paragraph: why you build what you build.
  story:
    'I’ve worked with payment systems data at a Chicago startup and researched how machine learning models behave. Some of my most meaningful work has come from problems I’ve seen people face firsthand, like ReadingBridge, a tool I built to help autistic children better understand the context behind stories. The projects look different, but what draws me to each of them is the same: figuring out how things work, noticing where they fall short, and finding ways to make them better.',

  email: 'perciwolday2@gmail.com',

  // Path inside src/assets/, or null to show the placeholder sheet.
  photo: 'images/portrait.jpg' as string | null,
  // Also show the portrait beside the home page introduction (the text then shares the width).
  showPhotoInHero: false,
  photoAlt: 'Perci Wolday standing beside the research poster “Legible Uncertainty-Aware Robot Motion for Human-Shared Spaces”',

  resumePdf: '/Perci-Wolday-Resume.pdf',

  social: [
    { label: 'GitHub', url: 'https://github.com/PerciErmiasWolday', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/perci-wolday/', icon: 'linkedin' },
  ] satisfies SocialLink[] as SocialLink[],


  // Contact section line. `emphasis` renders in italic terracotta.
  contact: {
    before: 'Feel free to',
    emphasis: 'reach out',
    after: '.',
    note: "I really enjoy meeting people and hearing what they're working on. If you have a question about something I've done, an opportunity you think I'd be a good fit for, or just want to say hello, I'd be happy to hear from you.",
  },

  // Shown on /about and /resume. The school is the heading.
  education: [
    {
      school: 'University of Illinois Chicago',
      degree: 'B.S. in Computer Science & Mathematics',
      years: 'Expected graduation · May 2027',
      detail: 'GPA: 3.9',
    },
    {
      school: 'Alma College',
      degree: 'Undergraduate studies before transferring to UIC',
      detail: "Dean's List · Girls Who Code Founder & President",
    },
  ] as { school: string; degree: string; years?: string; detail?: string }[],

  // Skills grouped by category, shown as mono chips on /about and /resume.
  // Every item comes from your experience, project and research write-ups.
  skills: {
    Languages: ['Python', 'TypeScript', 'SQL', 'C#'],
    Frameworks: ['React', 'FastAPI', 'Flask', 'Vite', 'Tailwind CSS'],
    'AI/ML': ['PyTorch', 'OpenAI API', 'Whisper', 'OpenCV', 'CNNs'],
    Data: ['pandas', 'NumPy', 'SciPy', 'SQLite', 'SQLAlchemy', 'Matplotlib', 'Plotly.js'],
    Tools: ['QuTiP', 'scqubits', 'ReportLab', 'Playwright', 'Pydantic'],
  } as Record<string, string[]>,

  // "Beyond the classroom" cards on /about. Add a photo with
  // image: 'images/girls-who-code.jpg' (a path inside src/assets/) and imageAlt.
  beyond: [
    {
      title: 'Girls Who Code',
      image: 'images/beyond/girls-who-code.jpg',
      imageAlt: 'Five Girls Who Code members smiling and holding up their hands beside a marshmallow and spaghetti tower they built in a workshop',
      text: 'At Alma, I founded a Girls Who Code chapter and led weekly programming workshops. We grew to more than 30 members, and I loved seeing students go from being hesitant about coding to experimenting with their own ideas.',
    },
    {
      title: 'Model United Nations',
      image: 'images/beyond/model-un.png',
      imageAlt: 'Four Model UN delegates standing in front of the podium in the United Nations General Assembly Hall',
      text: "At Model UN, I've always enjoyed bringing people into the conversation. If I notice someone hasn't spoken, I'll make an effort to hear what they think. I've brought delegates into a circle, helped work through disagreements, and found ways to bring competing ideas into the same resolution. I like taking initiative when a discussion gets stuck, and I've found that some of the best ideas come from people who weren't speaking much at first.",
    },
    {
      title: 'Teaching & Mentorship',
      image: 'images/beyond/teaching-india.jpg',
      imageAlt: 'A group of students in school uniforms posing together in a classroom in India',
      text: "I've taught Global Affairs to students in India, mentored students through a nonprofit, and worked as a resident assistant for over 30 students at Alma. Teaching in India especially taught me to pay attention to the quieter students and find ways to get them involved. I really enjoy sharing what I know, but I've also learned a lot from the people I've had the chance to work with.",
    },
  ] as { title: string; text: string; image?: string; imageAlt?: string }[],
};
