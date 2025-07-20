"use client";
import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Github from "./svgs/Github";
import { Globe } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/config/Projects";
import { Button } from "./ui/button";

function Projects() {
  return (
    <div className="w-full mt-6.5">
      <h1 className="text-3xl font-bold">Projects</h1>
      <Separator className="w-full my-3 dark:bg-neutral-800 bg-neutral-300" />
      <div className="w-full my-6 grid grid-cols-2 gap-5">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.01, y: -3 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
                <h2 className="font-semibold text-2xl">{project.name}</h2>
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
          </motion.div>
        ))}
      </div>
      <div className="w-full text-center mt-10 mb-16">
        <Link href="/projects">
          <Button variant="outline" className="cursor-pointer">
            See all projects
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
