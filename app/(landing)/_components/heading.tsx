"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Sign } from "crypto";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-3xl space-y-4 ">
      <h1 className="text-3xl sm:text-5xl md:6xl font-bold">
        Redefining the way graduate recruitment is done
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        An intelligent and automated campus placements management platform to
        connect corporates, universities and students
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button>
          <Link href="/dashboard">Enter Notion</Link>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Try Skill Sync for free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
