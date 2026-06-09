export interface Links {
  linkedin: string;
  github: string;
}

export interface About {
  greeting: string;
  headline: string;
  bio: string[];
  skills: string[];
  links: Links;
}

export const about: About = {
  greeting: "Hello, I'm Rajasekar",
  headline: "I build products that think.",
  bio: [
    "I am an AI-native product engineer focused on building software where intelligence is the product. I create systems that combine language models, automation, and thoughtful design into experiences that feel useful, natural, and inevitable.",
    "My work spans the full journey from concept to production. I obsess over the details that matter: model behavior, user intent, product ergonomics, and feedback loops. The goal is simple—reduce the distance between what users want and what software can do.",
    "Builder first, always. I ship quickly, learn continuously, and believe the most important AI breakthrough isn't a model—it's a product people can't imagine working without.",
  ],
  skills: [
    "AI-Native Product Design",
    "Agentic Systems",
    "Prompt Engineering",
    "Browser Automation",
    "Full-Stack Engineering",
  ],
  links: {
    linkedin: "https://linkedin.com/in/rajasekarm",
    github: "https://github.com/rajasekarm",
  },
};
