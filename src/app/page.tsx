"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const features: string[] = ["Home", "Blog", "Components", "About"];

function Page() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-md flex h-8 items-center justify-evenly rounded-md">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="relative w-fit h-full inline-block cursor-pointer"
          >
            <motion.div
              className="absolute left-0 bottom-0 h-[3px] bg-white"
              variants={{
                rest: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <span className="relative">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Page;
