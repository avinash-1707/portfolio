"use client";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Github from "./svgs/Github";
import { Globe } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  thumbnail: string;
  livelink: string;
  github: string;
  stack: string[];
}

const projects: Project[] = [
  {
    name: "inkognitOh!",
    description:
      "inkognitOh is a anonymous messaging platform where an user can register to get a unique message link, and can share the link to recieve anonymous messages.",
    thumbnail: "/inkognitoh.png",
    livelink: "https://inkognit-oh.vercel.app/",
    github: "https://github.com/avinash-1707/inkognitOh",
    stack: [
      "Nextjs",
      "React",
      "TailwindCSS",
      "ShadCN",
      "nextauth",
      "Gemini",
      "MongoDB",
    ],
  },
  {
    name: "Zeltra AI",
    description:
      "Zeltra AI is a llm interface which allows enterpreneurs and founders to validate and clarify their idea, and get a prompt to generate a prototype for the idea.",
    thumbnail: "/zeltra-home.png",
    livelink: "https://zeltra-ai.vercel.app/",
    github: "https://github.com/avinash-1707/zeltra-ai",
    stack: [
      "Nextjs",
      "React",
      "TailwindCSS",
      "ShadCN",
      "nextauth",
      "Gemini",
      "Prisma",
      "PostgreSQL",
      "Langchain",
    ],
  },
];

function Projects() {
  return (
    <div className="w-full mt-6.5">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Separator className="w-full my-3 dark:bg-neutral-800 bg-neutral-300" />
      <div className="w-full my-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="h-[440px] bg-neutral-100 dark:bg-neutral-900 dark:border-0 border border-neutral-200 rounded-xl overflow-hidden"
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={400}
              height={400}
            />
            <div className="py-4 px-5">
              <div className="flex justify-between items-center">
                <h2 className="font-medium text-2xl">{project.name}</h2>
                <div className="flex gap-4">
                  <Tooltip key={idx} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-neutral-700 dark:text-neutral-400 flex gap-2.5 items-center"
                      >
                        <span className="size-5">
                          <Github />
                        </span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Github</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.livelink}
                        target="_blank"
                        className="text-neutral-700 dark:text-neutral-400 flex gap-2.5 items-center"
                      >
                        <Globe className="size-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View live</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-[15px] font-light text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {project.stack.map((skill, idx) => (
                    <div
                      key={idx}
                      className="text-xs font-extralight px-1 py-0.5 dark:bg-neutral-800 bg-neutral-200 rounded-md"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
