"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

interface Option {
  name: string;
  link: string;
}

const options: Option[] = [
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "About",
    link: "/about",
  },
];

export default function Togglebar() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="h-10 flex justify-between pr-4 w-full">
      <div className="flex justify-start">
        {options.map((option, idx) => (
          <motion.div
            key={idx}
            className="h-full flex justify-start items-center"
          >
            <Link
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              href={option.link}
              className="relative w-18 flex items-center justify-center h-full text-sm text-neutral-900 dark:text-neutral-100"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute h-[2px] w-full bg-black/80 dark:bg-white/80 rounded-full bottom-0"
                ></motion.div>
              )}
              <span className="relative">{option.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
      <ModeToggle />
    </div>
  );
}
