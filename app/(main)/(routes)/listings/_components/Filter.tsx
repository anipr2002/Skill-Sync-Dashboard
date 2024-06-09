"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { SkillTag, useListingStore } from "@/store/listing";
import { cn } from "@/lib/utils";

const Filter = () => {
  const filters: SkillTag[] = [
    "Software Engineering",
    "Product Management",
    "Data Science",
    "Design",
    "Customer Support",
    "Marketing",
    "Sales",
    "Operations",
    "Finance",
    "Human Resources",
    "Legal",
    "Other",
  ];

  const { activeSkillTag, setActiveSkillTag } = useListingStore();

  return (
    <div className="mt-10 flex-wrap">
      <div className="flex flex-wrap gap-5 justify-center">
        {filters.map((filter, index) => (
          <Button
            key={index}
            className={cn(
              "rounded-md border ",
              activeSkillTag.includes(filter)
                ? "bg-blue-600 text-white font-semibold border border-blue-600 "
                : "bg-blue-100 text-black border border-black"
            )}
            onClick={() => {
              if (activeSkillTag.includes(filter)) {
                setActiveSkillTag(
                  activeSkillTag.filter((tag) => tag !== filter)
                );
              } else {
                setActiveSkillTag([...activeSkillTag, filter]);
              }
            }}
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;

/**
 * The Filter component is a simple component that displays a list of filters that the user can click on to filter the job listings.
 * The filters are stored in the filters array, and the active filters are stored in the activeSkillTag array in the useListingStore hook.
 * The setActiveSkillTag function is used to update the active filters when a filter is clicked. The Button component is used to display the filters,
 * and the cn function is used to conditionally apply styles based on whether a filter is active or not.
 */
