import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SkillTag } from "@/store/listing";
import LinearGradient from "@/components/magicui/linear-gradient";
type JobCardProps = {
  positionName: string;
  companyName: string;
  location: string;
  field?: string;
  iconSrc?: string;
  tags?: SkillTag[] | SkillTag;
  href: string;
};
function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

const JobCard = ({
  positionName,
  companyName,
  location,
  field,
  iconSrc,
  tags,
  href,
}: JobCardProps) => {
  return (
    <>
      <Card className="w-full max-w-md bg-blue-100 rounded-xl">
        <div className="flex items-center gap-4 p-4">
          <Avatar className="p-1 w-14 h-14 border bg-white rounded-lg">
            {iconSrc && <AvatarImage src={iconSrc} className="w-14 p-2" />}

            <AvatarFallback>{companyName.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-start">{companyName}</h3>
            <div className="flex items-center gap-2 text-sm ">
              <LocateIcon className="h-4 w-4 mt-1" />
              <span className="mt-2">{location}</span>
            </div>
          </div>
          <div>
            <Button
              className="bg-white rounded-lg"
              onClick={() => window.open(href, "_blank")}
            >
              Apply Now
            </Button>
          </div>
        </div>
        <CardContent className="border-t px-4 py-6">
          {/* <LinearGradient /> */}
          <h4 className="text-xl font-bold">{positionName}</h4>
        </CardContent>
      </Card>
    </>
  );
};

export default JobCard;

/**
 * The JobCard component is a reusable component that displays a job listing. It takes in the following props:
 * - positionName: The name of the position.
 * - companyName: The name of the company.
 * - location: The location of the job.
 * - field: The field of the job (e.g. Sales, Marketing).
 * - iconSrc: The source of the company logo.
 * - tags: An array of skill tags associated with the job.
 *
 *
 *
 */
