"use client";

import {
  ChevronLeftIcon,
  MenuIcon,
  Plus,
  PlusCircle,
  Search,
  Settings,
  Trash,
} from "lucide-react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useParams, usePathname } from "next/navigation";
import { useRef, ElementRef, useState, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import { cn } from "@/lib/utils";

import { toast } from "sonner";
import UserItem from "./user-item";

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();

  const params = useParams();
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };
  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 200) newWidth = 200;
    // if (newWidth < 180) collapse();
    if (newWidth > 400) newWidth = 400;
    console.log(newWidth);

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "200px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 200px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "200px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          `group/sidebar h-full bg-secondary overflow-y-auto
           relative flex w-60 flex-col z-[99999]`,
          isResetting && `transition-all duration-300 ease-in-out`,
          isMobile && `w-0`
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            `h-6 w-6 text-muted-foreground rounded-sm
        hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-3 
        opacity-0 group-hover/sidebar:opacity-100 transition`,
            isMobile && `opacity-100`
          )}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </div>
        <div>
          <UserItem />
          <div>Courses</div>
          <div>Job Listings</div>
          <div>Events</div>
          <div>Explore</div>
          <div>Upcoming Tests</div>
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 
        transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>

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
      </div>
    </>
  );
};

export default Navigation;
