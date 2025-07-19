import React from "react";
import Togglebar from "./Togglebar";
import ProfileSection from "./ProfileSection";
import Experience from "./Experience";
import Skillls from "./Skillls";
import { motion } from "motion/react";

export default function PortfolioContent() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="w-3xl mx-auto h-42 p-6.5"
    >
      <Togglebar />
      {/* <Separator className="w-full dark:bg-neutral-800 bg-neutral-300" /> */}
      <ProfileSection />
      <Experience />
      <Skillls />
    </motion.div>
  );
}
