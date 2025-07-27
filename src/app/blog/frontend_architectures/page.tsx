"use client";
import ThemeSwitch from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
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
        <Link href="/blogs">
          <div className="dark:hover:text-neutral-400 hover:text-neutral-600">
            <ArrowLeft className="inline-block mr-2 size-3" />
            Go back to Blogs
          </div>
        </Link>
        <ThemeSwitch />
      </div>

      <Separator className="w-full my-3 dark:bg-neutral-800 bg-neutral-300" />
      <div>Under writing</div>
    </motion.div>
  );
}
