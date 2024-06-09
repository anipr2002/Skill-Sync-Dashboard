import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SidebarItemProps = {
  title: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  href: string;
};

const SidebarItem = ({ title, icon, href, showIcon }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              // variant={isActive ? "sidebarActive" : "sidebar"}
              variant="sidebar"
              asChild
              className="h-[52px] text-center my-3"
            >
              <Link href={href}>
                {!showIcon && (
                  <span>
                    {icon} {title}
                  </span>
                )}
                {showIcon && <span>{icon}</span>}
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default SidebarItem;
