// Portfolio data - projects and tech stack
// Update these values with your own information

import type { TechCard, Project } from "./types";

// Technology/Skills cards - organized by category
export const techCardsItems: TechCard[] = [
  {
    name: "React",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
    category: "Frontend",
  },
  {
    name: "Next.js",
    imageUrl: "/imgs/logos/nextdotjs.svg",
    bgColor: "bg-white/10",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    imageUrl: "/imgs/logos/tailwindcss.svg",
    bgColor: "bg-[#06B6D4]/20",
    category: "Frontend",
  },
  {
    name: "Node.js",
    imageUrl: "/imgs/logos/nodedotjs.svg",
    bgColor: "bg-[#68A063]/20",
    category: "Backend & Database",
  },
  {
    name: "PostgreSQL",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/20",
    category: "Backend & Database",
  },
  {
    name: "Supabase",
    imageUrl: "/imgs/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
    category: "Backend & Database",
  },
  {
    name: "Git",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F05032]/20",
    category: "Tools",
  },
];

// Portfolio projects - displayed in the Projects section
export const portfolioProjects: Project[] = [
  {
    id: "project-1",
    heading: "TaskFlow",
    subheading: "SaaS Task Management Platform",
    valueProp:
      "A production-ready Kanban board that helps teams organize work with real-time collaboration.",
    highlights: [
      "Real-time sync across tabs using Supabase Realtime subscriptions",
      "Drag-and-drop task management powered by dnd-kit",
      "Row-level security policies for multi-tenant data isolation",
    ],
    role: "Sole full-stack developer",
    imageUrl: "/imgs/projects/taskflow.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Clerk", "PostgreSQL"],
    liveUrl: "https://taskboard-nextjs.vercel.app/",
    githubUrl: "https://github.com/sambai-dev/taskflow-board",
    featured: true,
  },
  {
    id: "project-2",
    heading: "Waka Eastern Bay",
    subheading: "Internal Booking System",
    valueProp:
      "A complete booking system for a NZ non-profit, replacing manual coordination with automated scheduling.",
    highlights: [
      "Automated email confirmations via Nodemailer integration",
      "RESTful API with Express.js for booking management",
      "MongoDB for flexible scheduling data storage",
    ],
    role: "Full-stack Developer · Client Project",
    imageUrl: "/imgs/projects/wakawebsite.png",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    featured: false,
  },
  {
    id: "project-3",
    heading: "Animated Portfolio",
    subheading: "Personal Portfolio",
    valueProp:
      "Exploring Framer Motion animation patterns and portfolio performance optimizations.",
    highlights: [
      "Custom scroll-triggered animations with IntersectionObserver",
      "Optimized Core Web Vitals with Next.js App Router",
      "Responsive design with mobile-first approach",
    ],
    role: "Designer & developer",
    imageUrl: "/imgs/projects/portfolio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/sambai-dev/portfolio-under-construction",
    featured: false,
  },
];
