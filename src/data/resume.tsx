import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { TypeScript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { FaGithub } from "react-icons/fa";

import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

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
      // { name: "Postgres", icon: Postgresql },
      // { name: "Docker", icon: Docker },
      // { name: "Kubernetes", icon: Kubernetes },
      // { name: "Java", icon: Java },
      // { name: "C++", icon: Csharp },
    ],
    backend: [
      { name: "Node.js", icon: Nodejs },
      { name: "MongoDB", icon: MongoDB },

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
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
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
  socials: [
    { Title: "GitHub", href: "https://github.com/Devnish0", icon: FaGithub },
    {
      Title: "LinkedIn",
      href: "https://www.linkedin.com/in/dillionverma/",
      icon: Icons.linkedin,
    },
    {
      Title: "Twitter",
      href: "https://twitter.com/dillionverma",
      icon: Icons.x,
    },
    {
      Title: "Email",
      href: "https://twitter.com/dillionverma",
      icon: Icons.email,
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
