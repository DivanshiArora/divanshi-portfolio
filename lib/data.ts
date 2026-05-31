export const siteConfig = {
  name: "Divanshi Arora",
  headline: "Learning. Building. Becoming.",
  role: "Computer Engineering Student",
  subheadline:
    "Exploring software engineering through curiosity, communication, and continuous growth.",
  intro:
    "I am currently learning DSA in Java and Web Development. I enjoy exploring new ideas, meeting new people, sketching, presenting ideas, and saying yes to opportunities that help me grow.",
  email: "divanshiarora18@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/divanshi-arora-",
    instagram:
      "https://www.instagram.com/diva.nshi.arora?igsh=MXU5NnlzcmZubzhxYw==",
    twitter: "https://x.com/Divanshi_Arora_",
  },
} as const;

export const coordinates = {
  age: 18,
  learning: ["DSA in Java", "Web Development"],
  building: ["My Portfolio Website", "Strong Technical Foundations"],
  explored: ["HTML Landing Page", "n8n Automation Basics"],
  goal: "Become a strong software engineer through consistent learning and building.",
} as const;

export const sayYesTo = [
  "New Ideas",
  "New People",
  "New Challenges",
  "New Opportunities",
] as const;

export const thingsExploring = [
  "Web Development",
  "DSA in Java",
  "Public Speaking",
  "Leadership & Communication",
  "Automation with n8n",
] as const;

export const beyondCode = [
  "Public Speaking",
  "Meaningful Conversations",
  "Exploration",
  "Sketching",
] as const;

export type TimelineItem = {
  title: string;
  description?: string;
};

export type TimelinePeriod = {
  period: string;
  items: TimelineItem[];
};

export const journeyTimeline: TimelinePeriod[] = [
  {
    period: "Before Engineering",
    items: [{ title: "Anchored School Independence Day Function" }],
  },
  {
    period: "First Year",
    items: [
      { title: "Won 1st Place in LinkedIn Profile Optimization Campaign" },
      {
        title:
          "Participated in National Science Day and pitched ideas at a project stall",
      },
      {
        title:
          "Participated in a 24-hour Hackathon and contributed through idea pitching and presentation",
      },
      {
        title: "Won 2nd Prize in Techtonic Talks Podcast Competition",
        description:
          "Received a topic on the spot and had only 2 hours to ideate, record, edit and submit a podcast.",
      },
      {
        title:
          "Took responsibility for organizing student meetups alongside the organizing team",
      },
      {
        title:
          "Helped coordinate regular co-ed meetups and lead girls' meetups involving students from different years and branches",
      },
    ],
  },
  {
    period: "Second Year",
    items: [
      { title: "Aspire Leadership Program" },
      { title: "Started learning Web Development" },
      { title: "Built first HTML Landing Page" },
    ],
  },
];

export type FirstCard = {
  title: string;
  status: "done" | "coming-soon";
  description?: string;
};

export const firsts: FirstCard[] = [
  { title: "First Landing Page", status: "done" },
  { title: "First Hackathon", status: "done" },
  { title: "First Portfolio Website", status: "done" },
  {
    title: "First Open Source Contribution",
    status: "coming-soon",
  },
  { title: "First Internship", status: "coming-soon" },
  { title: "First Software Engineering Role", status: "coming-soon" },
];

export const sketchbook = [
  { id: "cow", src: "/sketches/cow.png" },
  { id: "krishna", src: "/sketches/krishna.png" },
  { id: "tilak", src: "/sketches/tilak.png" },
] as const;

export const letterAge18 = `Stop measuring your progress against people who are walking a completely different path.

You were never meant to become someone else.

You were meant to become the fullest version of yourself.

Keep learning even when you feel behind.

Keep showing up even when results are invisible.

Trust your journey.

Trust your growth.

You have more potential than you can currently see.`;

export type StrangerMessage = {
  id: string;
  type: "advice" | "encouragement" | "feedback" | "opportunity";
  message: string;
  timestamp: string;
};

export const navLinks = [
  { label: "Coordinates", href: "#coordinates" },
  { label: "Journey", href: "#journey" },
  { label: "Firsts", href: "#firsts" },
  { label: "Say Yes", href: "#say-yes" },
  { label: "Sketchbook", href: "#sketchbook" },
  { label: "Exploring", href: "#exploring" },
  { label: "Letter", href: "#letter" },
  { label: "Messages", href: "#messages" },
  { label: "Contact", href: "#contact" },
] as const;
