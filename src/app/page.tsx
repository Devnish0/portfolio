/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

import { Dock, DockIcon } from "@/components/magicui/dock";

import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Markdown from "react-markdown";
// import ContactSection from "@/components/section/contact-section";
// import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubActivityCalendar } from "@/components/github-activity-calendar";
import SkillIconBadge from "@/components/skill-icon-badge";
const BLUR_FADE_DELAY = 0.04;
const Formatter = (str: any) => {
  const parts = str.split(/(\[.*?\])/g);

  return parts.map((parts: any, index: any) => {
    if (parts.startsWith("[") && parts.endsWith("]")) {
      return (
        <span key={index} className="text-foreground/85 font-medium">
          {parts.slice(1, -1)}
        </span>
      );
    }
    return parts;
  });
};
// console.log(Formatter("Hi, I'm [Nishank]"));

export default function Page() {
  useEffect(() => {
    fetch("/api/log", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              {/* <BlurFadeText
                className="text-muted-foreground max-w-150 md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              /> */}
              <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
                <div className="text-muted-foreground max-w-150 md:text-lg lg:text-xl">
                  {Formatter(DATA.description)}
                </div>
                <div className="text-muted-foreground max-w-150 mt-3 md:text-lg lg:text-xl">
                  {Formatter(DATA.summary)}
                </div>
                <div className="text-muted-foreground max-w-150 mt-3 md:text-lg lg:text-xl flex justify-between  gap-4">
                  {/* make it working later */}
                  {/* <Button variant={"outline"} className="flex gap-3">
                    <Calendar size={"16px"} />
                    Book a meet
                  </Button> */}
                  <Link href={"mailto:" + DATA.contact.email}>
                    <Button className="flex  gap-3 cursor-pointer">
                      <Mail size={"16px"} />
                      Get in touch
                    </Button>
                  </Link>
                  {/* <Dock>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                          <ModeToggle className="size-full cursor-pointer" />
                        </DockIcon>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        sideOffset={8}
                        className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                      >
                        <p>Theme</p>
                        <TooltipArrow className="fill-primary" />
                      </TooltipContent>
                    </Tooltip>
                  </Dock> */}
                  <div className="border border-primary hover:bg-muted transition duration-110  h-9 w-9 cursor-pointer rounded-full flex items-center justify-center">
                    <ModeToggle className="w-6 cursor-pointer" />
                  </div>
                </div>
              </BlurFade>
              {/* <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                  <Markdown>{DATA.summary}</Markdown>
                </div>
              </BlurFade> */}
              {/* <BlurFade delay={BLUR_FADE_DELAY * 3}> */}
              {/* <h2 className="text-xl font-bold">About</h2> */}
              {/* </BlurFade> */}
            </div>

            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
        <hr className="h-px my-8 bg-border border-0" />
        <div className="flex  items-center gap-3 text-bold  ">
          {DATA.contact.social.map((social, index) => {
            return (
              <BlurFade
                delay={BLUR_FADE_DELAY}
                className="order-1 md:order-2 "
                key={index}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex  gap-2 items-center text-muted-foreground hover:text-foreground transition duration-150 justify-center ">
                    {social.icon && <social.icon className="size-5 " />}
                    <span>{social.name}</span>
                  </div>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </section>

      {/* <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section> */}
      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section> */}
      {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="Github Activity">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold">Github Activity</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <GitHubActivityCalendar username={DATA.githubUsername} />
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-3xl font-bold">Skills & Tools</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-md font-bold text-muted-foreground">
              Frontend
            </h2>
          </BlurFade>

          <div className="flex flex-wrap gap-2">
            {DATA.skills.frontend.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <SkillIconBadge name={skill.name} Icon={skill.icon} />
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-md font-bold text-muted-foreground">Backend</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.backend.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <SkillIconBadge name={skill.name} Icon={skill.icon} />
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-md font-bold text-muted-foreground">tools</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.tools.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <SkillIconBadge name={skill.name} Icon={skill.icon} />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section> */}
      {/* <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section> */}
    </main>
  );
}
