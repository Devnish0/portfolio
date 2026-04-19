"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { useRouter } from "next/navigation";
import ProjectsSection from "@/components/section/projects-section";
import { ArrowLeft } from "lucide-react";
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
  const router = useRouter();
  return (
    <main className="min-h-dvh flex flex-col gap-10 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl gap-3 flex flex-col items-center justify-center">
          <span className="font-bold text-4xl ">Projects</span>
          <span className=" text-sm font-bold text-muted-foreground ">
            Projects ive built so far...
          </span>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
          <hr className="h-px my-8 bg-border border-0" />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY} className="order-1 px-3 md:order-2">
          <button
            className="text-muted-foreground cursor-pointer underline flex items-center justify-center gap-1"
            onClick={() => router.push("/")}
          >
            <span>
              <ArrowLeft size={15} />
            </span>
            <span>Home</span>
          </button>
        </BlurFade>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection DATA={DATA.projects} />
        </BlurFade>
      </section>
    </main>
  );
}
