"use client";
import ThemeSwitch from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogs } from "@/config/Blogs";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const router = useRouter();
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
      <div className="flex justify-center my-7.5">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="w-full p-4 border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">{blog.title}</h1>
                <h3 className="text-md text-neutral-700 dark:text-neutral-400">
                  {blog.description}
                </h3>
                <p className="text-xs font-extralight mt-2">{blog.date}</p>
                <div className="flex gap-2 mt-4">
                  {blog.tags.map((item, idx) => (
                    <div
                      key={`item-${idx}`}
                      className="text-xs px-2 py-1 border border-neutral-500 rounded-xl"
                    >
                      #{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="ml-12">
                <Button
                  onClick={() => router.push(`${blog.url}`)}
                  variant="outline"
                  className="h-10 w-10 border-none"
                >
                  <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
