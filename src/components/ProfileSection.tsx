"use client";
import React, { ReactNode } from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { motion } from "motion/react";
import { FileText, Send } from "lucide-react";
import X from "./svgs/X";
import LinkedIn from "./svgs/LinkedIn";
import Mail from "./svgs/Mail";
import Github from "./svgs/Github";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";

interface Social {
  icon: ReactNode;
  name: string;
  url: string;
}

const socials: Social[] = [
  {
    icon: <Github />,
    name: "GitHub",
    url: "https://github.com/avinash-1707",
  },
  {
    icon: <X />,
    name: "X",
    url: "https://x.com/ayyvinash",
  },
  {
    icon: <LinkedIn />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/avinash-narwariya-392513336/",
  },
  {
    icon: <Mail />,
    name: "Gmail",
    url: "https://mail.google.com/mail/?view=cm&to=avinashnarwariya5@gmail.com",
  },
];

export default function ProfileSection() {
  return (
    <div className="w-full py-8 my-2.5">
      <motion.img
        src="/pfpfp.jpg"
        height={200}
        width={200}
        whileHover={{ scale: 1.01, rotate: "-2deg" }}
        alt="Profile picture"
        className="w-24 h-24 rounded-md"
      />
      <div className="mt-8 leading-3  text-neutral-700 dark:text-neutral-300">
        <h1 className="text-xl">
          Hi, I'm Avinash. I am a developer from Gwalior, India
        </h1>
        <div className="text-md">
          I ❤️ to build{" "}
          <ContainerTextFlip
            words={["Products", "beautiful UIs", "AI stuff"]}
          />
        </div>
      </div>
      <div className="flex justify-start gap-3.5 mt-6">
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.3 }}
          className="flex text-neutral-800 dark:text-neutral-200 items-center px-3 py-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300 border border-neutral-500 rounded-md cursor-pointer"
        >
          <Send className="inline-block h-3.5 w-3.5 mr-1.5" />
          Contact me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.3 }}
          className="flex text-neutral-200 dark:text-neutral-800 items-center px-3 py-1 hover:bg-neutral-700 dark:hover:bg-neutral-400 transition-colors duration-300 bg-neutral-800 dark:bg-neutral-300 rounded-md cursor-pointer"
        >
          <FileText className="inline-block text-neutral-200 dark:text-neutral-800 -rotate-12 h-3.5 w-3.5 mr-1.5" />
          Resume/CV
        </motion.button>
      </div>
      <div className="flex justify-start gap-4.5 mt-8">
        {socials.map((social, idx) => (
          <Tooltip key={idx} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="text-neutral-700 dark:text-neutral-400 flex gap-2.5 items-center"
              >
                <span className="size-5">{social.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
