"use client";
import React from "react";
import Togglebar from "./Togglebar";
import ProfileSection from "./ProfileSection";
import Experience from "./Experience";
import Skills from "./Skills";
import { motion } from "motion/react";
import Projects from "./Projects";

export default function PortfolioContent() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="w-3xl mx-auto p-6.5 "
    >
      <Togglebar />
      <ProfileSection />
      <Projects />
      <Experience />

      <Skills />
    </motion.div>
  );
}
