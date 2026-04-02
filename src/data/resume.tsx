import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import {
  TailwindCSS,
  MongoDB,
  Nodejs,
  Python,
  JavaScript,
  Bootstrap,
  shadcnui,
  Mongoose,
  Expressjs,
} from "@/components/ui/svgs/skills";

import { FaGithub } from "react-icons/fa";

import { Golang } from "@/components/ui/svgs/golang";
import { GithubDark } from "@/components/ui/svgs/githubDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Git } from "@/components/ui/svgs/git";
import { Vscode } from "@/components/ui/svgs/vscode";
import { OpenaiDark } from "@/components/ui/svgs/openaiDark";
import { Npm } from "@/components/ui/svgs/npm";
import { Bun } from "@/components/ui/svgs/bun";
import { Linux } from "@/components/ui/svgs/linux";

export const DATA = {
  name: "Nishank (Devnish)",
  initials: "Nishank",
  url: "https://nishank.dev",
  location: "Chandigarh, india ",
  locationLink: "https://www.google.com/maps/place/chandigarh",
  description:
    "A [full-stack developer] who loves coding, tech, and science. I build clean, modern web applications using [TypeScript, React, Next.js,] and [Express.js.]",
  summary:
    "I'm Open to [freelance projects , collaborations,] and [full-time opportunities.]",
  githubUsername: "Devnish0",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/156004996?s=400&u=5dcec61d6c5641d14381554d81e9380c50cabc2d&v=4",
  skills: {
    frontend: [
      { name: "React", icon: ReactLight },
      { name: "Next.js", icon: NextjsIconDark },
      { name: "Javascript", icon: JavaScript },
      { name: "Python", icon: Python },
      { name: "Tailwind CSS", icon: TailwindCSS },
      { name: "BootStrap", icon: Bootstrap },
      { name: "shadcn/ui", icon: shadcnui },

      // { name: "Postgres", icon: Postgresql },
      // { name: "Docker", icon: Docker },
      // { name: "Kubernetes", icon: Kubernetes },
      // { name: "Java", icon: Java },
      // { name: "C++", icon: Csharp },
    ],
    backend: [
      { name: "Node.js", icon: Nodejs },
      { name: "MongoDB", icon: MongoDB },
      { name: "Mongoose", icon: Mongoose },
      { name: "Express.js", icon: Expressjs },

      // { name: "React", icon: ReactLight },
      // { name: "Next.js", icon: NextjsIconDark },
      // { name: "Typescript", icon: TypeScript },
      // { name: "Node.js", icon: Nodejs },
      // { name: "Python", icon: Python },
      // { name: "MongoDB", icon: MongoDB },
      // { name: "Postgres", icon: Postgresql },
      // { name: "Docker", icon: Docker },
      // { name: "Kubernetes", icon: Kubernetes },
      // { name: "Java", icon: Java },
      // { name: "C++", icon: Csharp },
    ],
    tools: [
      { name: "React", icon: ReactLight },

      { name: "Github", icon: GithubDark },
      { name: "Git", icon: Git },
      { name: "VS Code", icon: Vscode },
      { name: "ChatGPT", icon: OpenaiDark },
      { name: "npm", icon: Npm },
      { name: "Bun", icon: Bun },
      { name: "linux", icon: Linux },

      // { name: "Typescript", icon: TypeScript },
      // { name: "Node.js", icon: Nodejs },
      // { name: "Python", icon: Python },
      // { name: "MongoDB", icon: MongoDB },
      // { name: "Postgres", icon: Postgresql },
      // { name: "Docker", icon: Docker },
      // { name: "Kubernetes", icon: Kubernetes },
      // { name: "Java", icon: Java },
      // { name: "C++", icon: Csharp },
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nishank.business@gmail.com",
    tel: "+123456789",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Devnish0",
        icon: Icons.github,
        navbar: true,
      },

      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nishank404/",
        icon: Icons.linkedin,

        navbar: true,
      },
      {
        name: "Twitter",
        url: "https://x.com/Devnish_",
        icon: Icons.x,

        navbar: true,
      },
      {
        name: "Email",
        url: "mailto:nishank.business@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    ],
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    // {
    //   school: "University of Waterloo",
    //   href: "https://uwaterloo.ca",
    //   degree: "Bachelor's Degree of Computer Science (BCS)",
    //   logoUrl: "/waterloo.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Tourist Safety Web App",
      href: "https://hackathon-kappa-seven.vercel.app/home.html",
      dates: "Sept 2025 - Oct 2025",
      active: true,
      description:
        "An AI-powered safety companion for tourists visiting India, built during a hackathon. Features include an emergency panic button with live GPS location sharing via WhatsApp, a Google Gemini–powered chatbot for localized travel guidance, a crowd-sourced community safety map, and a legal reference guide covering relevant IPC sections.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Leaflet.js",
        "OpenStreetMap",
        "Google Gemini API",
        "WhatsApp Web API",
        "Geolocation API",
      ],
      links: [
        {
          type: "Website",
          href: "https://hackathon-kappa-seven.vercel.app/home.html",
          icon: <Icons.globe className="size-3" />,
        },
        // Add a GitHub link here if you have one, e.g.:
        {
          type: "Source",
          href: "https://github.com/Devnish0/Hackathon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/emergency.png",

      video: "",
    },
    {
      title: "Restaurant website",
      href: "https://restaurant-website-blond-phi.vercel.app/",
      dates: "Nov 2025",
      active: false,
      description:
        "My first React app: a restaurant website built with React and Vite, using client-side routing for navigating pages/sections and styled with CSS (plus Tailwind available in the tooling). Deployed on Vercel.",
      technologies: [
        "React",
        "Vite",
        "JavaScript",
        "React Router",
        "CSS",
        "Tailwind CSS",
        "ESLint",
        "npm",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://restaurant-website-blond-phi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devnish0/restaurant-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/savora.png",
      video: "",
    },
    {
      title: "Zerodha Landing Page Clone",
      href: "https://zerodha-clone-ten-lake.vercel.app/",
      dates: "June 2025",
      active: false,
      description:
        "A responsive, pixel-inspired clone of Zerodha’s public-facing landing page built using pure HTML and CSS. The project focuses on clean layout structure, consistent spacing and typography, and recreating common marketing-site sections (hero, feature highlights, navigation, and footer) without any JavaScript frameworks.",
      technologies: [
        "HTML5 ",
        "CSS3 ",
        "Mobile Responsiveness ",
        "UI Recreation / Pixel-Style Cloning ",
        "Git & GitHub ",
      ],
      links: [
        {
          type: "Website",
          href: "https://zerodha-clone-ten-lake.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Devnish0/zerodha-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/zerodha.png",
      video: "",
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
} as const;
