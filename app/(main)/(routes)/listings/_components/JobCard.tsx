/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SkillTag } from "@/store/listing";
import { Badge } from "@/components/ui/badge";
import { Bookmark } from "lucide-react";
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
  // Find the index of (m/w/d) or (m/f/d) in positionName
  const index = positionName.search(/\(m\/w\/d\)|\(m\/f\/d\)/i);
  // Slice companyName until (m/w/d) is found or display full companyName if not found
  const displayPositionName =
    index !== -1 ? positionName.slice(0, index) : positionName;

  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const tagArray = Array.isArray(tags) ? tags : tags ? [tags] : ["Other"];
  const colors = [
    "bg-fuchsia-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-red-300",
  ];

  return (
    <>
      <Card className="w-full max-w-md bg-blue-100 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-stretch mt-20">
        <div className="relative w-fill overflow-hidden flex flex-col justify-between">
          {/* Top Section */}
          {/* Logo, Company Name, Location, BookMark icon */}
          <div className="flex items-between justify-between p-4">
            <div className="flex items-center justify-stretch">
              <div className="w-fit h-fit p-2 bg-white border-black border mr-2">
                <Avatar className="w-12 h-12 border ">
                  {iconSrc ? (
                    <AvatarImage src={iconSrc} alt={companyName} />
                  ) : (
                    <AvatarFallback>{companyName[0]}</AvatarFallback>
                  )}
                </Avatar>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{companyName}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>{location}</span>
                </div>
              </div>
            </div>
            <div>
              <Bookmark
                onClick={() => setIsBookmarked((prev) => !prev)}
                fill={`${isBookmarked ? "black" : "transparent"}`}
              />
            </div>
          </div>

          {/* Middle Section */}
          {/* Position Name, Field, Applications Applied */}
          <CardContent className="p-4">
            <h2 className="text-2xl text-start font-semibold">
              {displayPositionName}
            </h2>
            <div className="flex items-between space-x-2 mt-2">
              {/* Loop through the tags and put it in a badge. If tag is null, then it should be other */}
              {Array.isArray(tags) && tags.length > 0 ? (
                tags.map((tag, index) => (
                  <Badge
                    className={`${colors[index % colors.length]}`}
                    key={index}
                  >
                    {tag}
                  </Badge>
                ))
              ) : (
                <Badge className="bg-gray-300 text-black">Other</Badge>
              )}
            </div>
            <div className="flex items-center space-x-2 mt-2 justify-start">
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  width={24}
                  height={24}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  width={24}
                  height={24}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  width={24}
                  height={24}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  width={24}
                  height={24}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="flex items-center font-roger font-mediumq">
                <span>{Math.floor(Math.random() * 100)}</span> + Applications
              </div>
            </div>
            {/*Print a random number of Applications  */}
          </CardContent>

          {/* Bottom Section */}
          {/* Apply Buttons */}
          <CardFooter className="p-4 border border-t-2 border-black w-full">
            <div className="flex items-between justify-between w-full">
              <Link href={href}>
                <Button
                  variant="default"
                  className="bg-blue-400 text-white border-blue-600"
                >
                  Apply Now
                </Button>
              </Link>
              <Button variant="default">Take a Test</Button>
            </div>
          </CardFooter>
        </div>
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
