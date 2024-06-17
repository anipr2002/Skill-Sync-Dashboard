"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import BgNoiseWrapper from "@/components/texture-wrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Pricing from "./pricing";
import Marquee from "react-fast-marquee";
import { FlipWords } from "@/components/ui/flip-words";

const Heading = () => {
  const words = ["recruitment", "placements", "networking"];
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <BgNoiseWrapper url="/cult-noise.png">
      <div className="max-w-5xl h-full font-roger">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
          Redefining the way{" "}
          <span className="text-blue-600">graduate recruitment</span> is done
        </h1>

        <h3 className="text-base sm:text-xl md:text-2xl text-gray-400 font-medium max-w-prose my-10">
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
            <Link href="/dashboard">Enter Dashboard</Link>
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

        <div className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center mt-20">
          <div className="relative w-fit overflow-hidden">
            <div className="w-[30%] rotate-[-35deg] translte-y-[1rem] absolute top-14 left-[-5%] overflow-hidden z-[1] bg-blue-600 hidden sm:block">
              <Marquee autoFill={true}>
                <span className="px-3 font-albert text-[16px] text-white">
                  COMING SOON 🎉
                </span>
              </Marquee>
            </div>
            <Image src="/image.png" width={1920} height={1080} alt="image" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mt-40">
          Unlock Your Future with Seamless Career Connections
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-400 font-medium max-w-prose my-10">
          Are a recruiter searching for top talent? Skill Sync is your one-stop
          solution for pre-screened,qualified candidates and your partner for
          finding the right talent, the right way.
        </p>

        {/* list */}
        <ol className="my-8 space-y-4 pt-8 justify-center md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex">
            <div className="flex flex-col items-start space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                This is only test content.
              </span>
            </div>
          </li>
          <li className="md:flex">
            <div className="flex flex-col items-start space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                This is only test content.
              </span>
            </div>
          </li>
          <li className="md:flex">
            <div className="flex flex-col items-start space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-2 text-zinc-700">
                This is only test content.
              </span>
            </div>
          </li>
        </ol>

        <Pricing />
      </div>
    </BgNoiseWrapper>
  );
};

export default Heading;
