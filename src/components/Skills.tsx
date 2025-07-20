"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";

interface Skill {
  name: string;
  skills: string[];
}

const skills: Skill[] = [
  {
    name: "Frontend Skills",
    skills: ["React", "Nextjs", "Shadcn", "TailwindCSS", "Motion"],
  },
  {
    name: "Backend Skills",
    skills: [
      "nodejs",
      "express",
      "WebSockets",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    name: "AI technologies",
    skills: ["Langchain", "Groq", "Ollama"],
  },
  {
    name: "Other Skills",
    skills: ["Docker", "Postman", "nextauth"],
  },
];

const parentVariant = {
  initial: {},
  animate: {},
  hover: {},
};

const childVariants = {
  initial: { width: 0 },
  animate: { width: 0 },
  hover: { width: "100%" },
};

export default function Skills() {
  return (
    <div className="w-full mt-6.5">
      <h1 className="text-3xl font-bold">Tech Stack</h1>
      <Separator className="w-full my-3 dark:bg-neutral-800 bg-neutral-300" />
      <div>
        {skills.map((skill, idx) => (
          <>
            <motion.div
              variants={parentVariant}
              initial="initial"
              animate="animate"
              whileHover="hover"
              key={`skill-${idx}`}
              className="relative w-fit p-1 text-xl font-semibold cursor-default"
            >
              <motion.div
                variants={childVariants}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute left-0 bottom-0 h-[2px] bg-white"
              ></motion.div>
              <span>{skill.name}</span>
            </motion.div>
            <div className="my-3 flex flex-wrap gap-1.5 h-7.5">
              {skill.skills.map((tech, idx) => (
                <motion.div
                  whileHover={{ scale: 1.03, fontSize: "15px" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  key={`tech-${idx}`}
                  className="px-2 py-1 h-fit w-fit dark:bg-neutral-800 bg-neutral-300 rounded-md text-sm cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
