import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LocateIcon } from "lucide-react";
import React from "react";

const JobCard2 = () => {
  return (
    <Card className="w-full max-w-md bg-blue-100 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center mt-20">
      <div className="relative w-fit overflow-hidden">
        <div className="flex items-center gap-4 p-4">
          <Avatar className="p-1 w-14 h-14 border bg-white rounded-lg">
            {iconSrc && <AvatarImage src={iconSrc} className="w-14 p-2" />}

            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-start">companyName</h3>
            <div className="flex items-center gap-2 text-sm ">
              <LocateIcon className="h-4 w-4 mt-1" />
              <span className="mt-2">location</span>
            </div>
          </div>
          <div>
            <Button
              className="bg-white rounded-lg"
              onClick={() => window.open("", "_blank")}
            >
              Apply Now
            </Button>
          </div>
        </div>
        <CardContent className="border-t px-4 py-6">
          {/* <LinearGradient /> */}
          <h4 className="text-xl font-bold border border-black bg-white p-4z">
            positionName
          </h4>
        </CardContent>
      </div>
    </Card>
  );
};

export default JobCard2;
