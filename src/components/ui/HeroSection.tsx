import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight-new";

const HeroSection = () => {
  const words = `Master the art of Music`;
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 z-10 relative text-center w-full">
        <Spotlight />
        <TextGenerateEffect
          as="h1"
          words={words}
          className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          wordClassName="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        />
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you are a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}> Explore Courses </Link>
        </div>

        <div className="mt-10 inline-block relative group"></div>
      </div>
    </div>
  );
};

export default HeroSection;
