"use client";

import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useRef, ElementRef, useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

import { MdWorkOutline } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { PiProjectorScreenChartBold } from "react-icons/pi";

import { Separator } from "@/components/ui/separator";

import { toast } from "sonner";
import UserItem from "./user-item";
import SidebarItem from "./sidebar-item";
import Link from "next/link";

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();

  const params = useParams();
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  // useEffect(() => {
  //   if (isMobile) {
  //     collapse();
  //   } else {
  //     resetWidth();
  //   }
  // }, [isMobile]);

  // useEffect(() => {
  //   if (isMobile) {
  //     collapse();
  //   }
  // }, [pathname, isMobile]);

  // const handleMouseDown = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   isResizingRef.current = true;
  //   document.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseup", handleMouseUp);
  // };
  // const collapse = () => {
  //   if (sidebarRef.current && navbarRef.current) {
  //     setIsCollapsed(true);
  //     setIsResetting(true);

  //     sidebarRef.current.style.width = "0";
  //     navbarRef.current.style.setProperty("width", "100%");
  //     navbarRef.current.style.setProperty("left", "0");
  //     setTimeout(() => setIsResetting(false), 300);
  //   }
  // };
  // const handleMouseMove = (event: MouseEvent) => {
  //   if (!isResizingRef.current) return;
  //   let newWidth = event.clientX;

  //   if (newWidth < 200) newWidth = 200;
  //   // if (newWidth < 180) collapse();
  //   if (newWidth > 400) newWidth = 400;
  //   console.log(newWidth);

  //   if (sidebarRef.current && navbarRef.current) {
  //     sidebarRef.current.style.width = `${newWidth}px`;
  //     navbarRef.current.style.setProperty("left", `${newWidth}px`);
  //     navbarRef.current.style.setProperty(
  //       "width",
  //       `calc(100% - ${newWidth}px)`
  //     );
  //   }
  // };

  // const handleMouseUp = () => {
  //   isResizingRef.current = false;
  //   document.removeEventListener("mousemove", handleMouseMove);
  //   document.removeEventListener("mouseup", handleMouseUp);
  // };

  // const resetWidth = () => {
  //   if (sidebarRef.current && navbarRef.current) {
  //     setIsCollapsed(false);
  //     setIsResetting(true);

  //     sidebarRef.current.style.width = isMobile ? "100%" : "100px";
  //     navbarRef.current.style.setProperty(
  //       "width",
  //       isMobile ? "0" : "calc(100% - 200px)"
  //     );
  //     navbarRef.current.style.setProperty("left", isMobile ? "100%" : "200px");
  //     setTimeout(() => setIsResetting(false), 300);
  //   }
  // };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          `group/sidebar h-full bg-blue-100 overflow-y-auto
           relative flex w-20 flex-col z-[99999]`
        )}
      >
        {/* <div
          // onClick={collapse}
          role="button"
          className={cn(
            `h-6 w-6 text-muted-foreground rounded-sm
        hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-3 
        opacity-0 group-hover/sidebar:opacity-100 transition`,
            isMobile && `opacity-100`
          )}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </div> */}
        <div className="w-full flex flex-col ">
          <div className="w-full flex items-center justify-center mt-4">
            <Link href="/dashboard">
              <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="w-12 h-12 flex justify-center bg-blue-600 rounded-lg"
              />
            </Link>
          </div>
          <UserItem showAvatar />
          {/* <Separator /> */}
          <div className="h-[1px] w-full mx-4 my-10"></div>
          <SidebarItem
            showIcon
            icon={<MdWorkOutline size={25} />}
            title="Job Listings"
            href="/listings"
          />
          <SidebarItem
            showIcon
            icon={<PiProjectorScreenChartBold size={25} />}
            title="Upcoming Tests"
            href="/tests"
          />
          <SidebarItem
            showIcon
            icon={<FaBook size={25} />}
            title="Courses"
            href="/courses"
          />
        </div>
      </aside>
      {/* 
      <div
        ref={navbarRef}
        className={cn(
          `absolute top-0 z-[99999  ] left-60 w-[calc(100%-200px)]`,
          isResetting && `transition-all ease-in-out duration-300`,
          isMobile && `left-0 w-full`
        )}
      >
        {isCollapsed && (
          <nav className="bg-transparent px-3 py-2 w-full">
            {isCollapsed && (
              <MenuIcon
                onClick={resetWidth}
                role="button"
                className="h-6 w-6 text-muted-foreground"
              />
            )}
          </nav>
        )}
      </div> */}
    </>
  );
};

export default Navigation;
