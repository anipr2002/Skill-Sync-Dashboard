"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import BgNoiseWrapper from "@/components/texture-wrapper";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  const words = ["Skill Sync", ""];

  return (
    <BgNoiseWrapper url="/cult-noise.png">
      <div
        className={cn(
          "z-50 bg-blue-50 font-roger opacity-95 dark:bg-[#1f1f1f] fixed flex items-center w-full p-6",
          scrolled &&
            "border-b border-zinc-900/20 transition ease-in duration-300 shadow-sm"
        )}
      >
        {/* <Logo /> */}
        <div className="flex space-x-2">
          <Image src="/logo.png" alt="Skill Sync" width={30} height={30} />
          <span className="whitespace-nowrap text-xl font-bold text-blue-600">
            SKILL SYNC
          </span>
          {/* <FlipWords
            words={words}
            className="whitespace-nowrap text-xl font-bold text-blue-600"
            duration={2}
          /> */}
        </div>
        <div
          className="md:ml-auto md:justify-end justify-between w-full
       flex items-center gap-x-2"
        >
          {isLoading && (
            <p className="text-muted-foreground">
              <Spinner />
            </p>
          )}

          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant="default" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm" variant="sidebar">
                  Get Skill Sync free
                </Button>
              </SignInButton>
            </>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <Button variant="sidebar" size="sm">
                <Link href="/dashboard">Enter Dashboard</Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
          {
            // Corparate Login
            <Button size="sm" className="bg-blue-500 border border-blue-500">
              <Link href="/corporate" className="text-white">
                Corporate
              </Link>
            </Button>
          }

          {
            //This is the Theme Toggle button
            /* <ModeToggle /> */
          }
        </div>
      </div>
    </BgNoiseWrapper>
  );
};

export default Navbar;
