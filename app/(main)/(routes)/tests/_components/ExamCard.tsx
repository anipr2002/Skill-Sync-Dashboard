import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LinearGradient from "@/components/magicui/linear-gradient";

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

type ExamCardProps = {
  examTitle: string;
  examDescription: string;
  examDuration: string;
};

const ExamCard = (props: ExamCardProps) => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="bg-blue-100 dark:bg-gray-800 px-6 py-4">
        <h3 className="text-xl font-semibold">{props.examTitle}</h3>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="text-gray-500 dark:text-gray-400">
          {props.examDescription}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400">
              {props.examDuration}
            </span>
          </div>
          <Button variant="default" size="sm">
            Start Test
          </Button>
          {/* <LinearGradient /> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamCard;
