import Image from "next/image";
import React from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";

export default function ProfileSection() {
  return (
    <div className="w-full p-8 mt-2.5">
      <Image
        src="/pfpfp.jpg"
        height={200}
        width={200}
        alt="Profile picture"
        className="w-24 h-24 rounded-md"
      />
      <div className="mt-8 leading-3">
        <h1 className="text-xl">
          Hi, I'm Avinash. I am a developer from Gwalior, India
        </h1>
        <div className="text-md">
          I ❤️ to build{" "}
          <ContainerTextFlip
            words={["Products", "beautiful UIs", "AI stuff"]}
          />
        </div>
      </div>
    </div>
  );
}
