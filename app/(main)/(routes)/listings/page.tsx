"use client";

import { Button } from "@/components/ui/button";
// import { Filter } from "lucide-react";
import React from "react";
import Filter from "./_components/Filter";
import Jobs from "./_components/Jobs";

const Listings = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center px-24 text-center">
        <h1 className=" font-bold text-3xl mt-10"> Remote Job Listing</h1>
        <p className="max-w-prose font-semibold mt-5">
          Discover remote roles hiring worldwide, at companies interested in
          seeing beyond your resume.
        </p>

        <Button className="text-white mt-5 rounded-md shadow-lg border-b-8 border-r-4 bg-blue-600 border-black/20">
          Post a Job
        </Button>

        <Filter />
        <Jobs />
      </div>
    </>
  );
};

export default Listings;
