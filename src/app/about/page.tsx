"use client";
import ThemeSwitch from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Briefcase } from "lucide-react";
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
        <Link href="/">
          <div className="dark:hover:text-neutral-400 hover:text-neutral-600">
            <ArrowLeft className="inline-block mr-2 size-3" />
            Go back to Homepage
          </div>
        </Link>
        <ThemeSwitch />
      </div>

      <Separator className="w-full my-3 dark:bg-neutral-800 bg-neutral-300" />

      <div className="mt-8">
        <h1 className="font-semibold text-4xl">About me</h1>
        <div className="mt-12 flex gap-5 items-center">
          <motion.img
            src="/pfpfp.jpg"
            height={200}
            width={200}
            whileHover={{ scale: 1.02 }}
            alt="Profile picture"
            className="w-36 h-36 rounded-xl"
          />
          <div>
            <div className="flex gap-3 items-center">
              <h2 className="text-3xl font-medium">Avinash</h2>
              <div className="border bg-green-600/20 border-green-300 dark:bg-green-700/10 dark:border-green-900 px-2 py-1 text-xs rounded-xl">
                <div className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse mr-1.5"></div>
                Available
              </div>
            </div>
            <div className="text-lg text-neutral-400 dark:text-neutral-600">
              Full Stack Developer
            </div>
          </div>
        </div>
        <div className="mt-8 text-neutral-800 dark:text-neutral-300 font-light text-md">
          <p>
            Hi, my name is Avinash. I am an undergrad CS student and a full
            stack developer.
          </p>
          <p>I love to turn my ideas into real and working solutions.</p>
          <p className="mt-2">
            My current tech stack is Nextjs as framework and postgreSQL as
            database, although i am flexible in working with different tech
            stacks.
          </p>
          <p className="mt-2">
            I am always open to learn new technologies, so if you have an
            awesome idea, feel free to DM for collaboration.
          </p>
          <p className="mt-2">
            Besides programming, i love to play competitive games like Valorant
            and BGMI. I am also a full time fitness guy who loves gym.
          </p>
          <div className="mt-4">
            <h2 className="font-semibold text-2xl">Hire me</h2>
            <p>
              I am currently availabe for internship oppurtunities, full-time
              offers and freelance projects. If you're looking for someone
              passionate, skilled, and ready to contribute, I'm here to help
              bring your ideas to life!
            </p>
            <Link href="https://mail.google.com/mail/?view=cm&to=avinashnarwariya5@gmail.com">
              <Button variant="outline" className="mt-2">
                <Briefcase />
                Hire me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
