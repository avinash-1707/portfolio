import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    name: "inkognitOh!",
    description:
      "inkognitOh is a anonymous messaging platform where an user can register to get a unique message link, and can share the link to recieve anonymous messages.",
    thumbnail: "/inkognitoh-homepage.png",
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
