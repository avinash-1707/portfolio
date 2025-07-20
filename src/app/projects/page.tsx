"use client";
import ThemeSwitch from "@/components/mode-toggle";
import Github from "@/components/svgs/Github";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/config/Projects";
import { ArrowLeft, Globe } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="w-3xl mx-auto p-6.5"
    >
      <div className="text-sm text-neutral-500 flex justify-between items-center">
        <Link href="/">
          <div className="dark:hover:text-neutral-400 hover:text-neutral-600">
            <ArrowLeft className="inline-block mr-2 size-3" />
            Go back to Homepage
          </div>
        </Link>
        <ThemeSwitch />
      </div>

      <Separator className="w-full my-3 dark:bg-neutral-800 bg-neutral-300" />
      <div className="flex flex-col gap-4 items-center mt-20 mb-15">
        <h1 className="text-5xl font-semibold">Projects</h1>
        <p className="text-xl text-neutral-500">
          Some projects I poured my time, brain cells, and caffeine into
        </p>
      </div>
      <Separator className="w-full my-3 dark:bg-neutral-800 bg-neutral-300" />
      <div className="w-full my-10 grid grid-cols-2 gap-5">
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
    </motion.div>
  );
}
