import React from "react";
import Togglebar from "./Togglebar";
import ProfileSection from "./ProfileSection";
import { Separator } from "./ui/separator";

export default function PortfolioContent() {
  return (
    <div className="w-4xl mx-auto h-42 p-6.5">
      <Togglebar />
      <Separator className="w-full dark:bg-neutral-800 bg-neutral-300" />
      <ProfileSection />
    </div>
  );
}
