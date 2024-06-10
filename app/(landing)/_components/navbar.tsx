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
const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-transparent dark:bg-[#1f1f1f] fixed flex items-center w-full p-6",
        scrolled &&
          "border-b border-zinc-900/20 transition ease-in duration-300 shadow-sm"
      )}
    >
      {/* <Logo /> */}
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
              <Button size="sm">Get Skill Sync free</Button>
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
          <Button size="sm">
            <Link href="/corporate">Corporate</Link>
          </Button>
        }

        {
          //This is the Theme Toggle button
          /* <ModeToggle /> */
        }
      </div>
    </div>
  );
};

export default Navbar;
