"use client";

import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import _ from "lodash";
import { useListingStore, IListing } from "@/store/listing";
import JobsList from "@/components/mock_data/jobs.json";

const Jobs = () => {
  const { activeSkillTag } = useListingStore();

  // const jobList: IListing[] = JobsList as IListing[];

  const [jobList, setJobList] = useState<IListing[]>([]);

  // useEffect(() => {
  //   fetch("/api/skf")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setJobList(data);
  //     });
  // }, []);

  //setJoblist from two api points. /api/skf and /api/zf

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [skfResponse, zfResponse] = await Promise.all([
          fetch("/api/skf"),
          fetch("/api/zf"),
        ]);

        const skfData = await skfResponse.json();
        const zfData = await zfResponse.json();

        setJobList([...skfData, ...zfData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(jobList);
  return (
    <>
      <div className=" flex flex-wrap gap-5 justify-center mt-10">
        {jobList.map((job, index) => {
          if (_.intersection(job.tags, activeSkillTag).length > 0) {
            return (
              <JobCard
                key={index}
                positionName={job.positionName}
                companyName={job.companyName}
                location={job.location}
                tags={job.tags}
                href={job.href}
                iconSrc={job.iconSrc}
              />
            );
          } else if (activeSkillTag.length === 0) {
            return (
              <JobCard
                key={index}
                positionName={job.positionName}
                companyName={job.companyName}
                location={job.location}
                tags={job.tags}
                href={job.href}
                iconSrc={job.iconSrc}
              />
            );
          } // if activeSkillTag is "Other" and job.tags is empty or job.tags is not equal to SkillTags, show the job
          else if (
            activeSkillTag.includes("Other") &&
            (job.tags?.length === 0 ||
              !job.tags?.every((tag) => activeSkillTag.includes(tag)))
          ) {
            return (
              <JobCard
                key={index}
                positionName={job.positionName}
                companyName={job.companyName}
                location={job.location}
                tags={job.tags ?? []}
                href={job.href}
                iconSrc={job.iconSrc}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Jobs;

/**
 * The Jobs component is a simple component that displays a list of job listings.
 * The job listings are stored in the jobList array, and the active filters are stored in the activeSkillTag array in the useListingStore hook.
 * The JobCard component is used to display each job listing.
 */
