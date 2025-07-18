import React from "react";
import { Separator } from "./ui/separator";

export default function Experience() {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold">Experience</h1>
      <Separator className="w-full my-3 dark:bg-neutral-800 bg-neutral-300" />
      <div className="w-full my-5 h-48 flex flex-col bg-neutral-400/10 dark:bg-neutral-700/10 text-neutral-500 justify-center items-center rounded-lg">
        <div>No Experience for now...</div>
        <div>Looking for oppurtunities</div>
      </div>
    </div>
  );
}
