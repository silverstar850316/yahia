"use client";

import * as React from "react";
import { BsSun, BsMoonStarsFill, BsDisplayFill } from "react-icons/bs";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full border bg-background-base ring-offset-background-base transition-all duration-300 hover:border-accent-base/50 hover:bg-primary-base/10 focus-visible:ring-1 focus-visible:ring-accent-base focus-visible:ring-offset-2 dark:border-accent-base-dark/20 dark:bg-background-base-dark dark:ring-offset-background-base-dark dark:hover:border-accent-base-dark/50 dark:hover:bg-primary-base-dark/10 dark:focus-visible:ring-accent-base-dark"
        >
          <BsSun className="h-5 w-5 rotate-0 scale-100 text-primary-base-dark transition-all duration-300 dark:rotate-90 dark:scale-0" />
          <BsMoonStarsFill className="absolute h-5 w-5 rotate-90 scale-0 text-primary-base-dark transition-all duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="mt-2 rounded-xl border border-accent-base/20 bg-background-base font-space-grotesk shadow-lg shadow-accent-base/10 dark:border-accent-base-dark/20 dark:bg-background-base-dark dark:shadow-accent-base-dark/10"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="group m-1 flex cursor-pointer items-center rounded-lg px-3 py-2.5 text-sm text-default-base transition-colors duration-300 hover:bg-primary-base/10 hover:text-primary-base focus:bg-accent-base/20 dark:text-default-base-dark dark:hover:bg-primary-base-dark/10 dark:hover:text-primary-base-dark dark:focus:bg-accent-base-dark/20"
        >
          <BsSun className="mr-2.5 h-4 w-4 group-hover:animate-spin-slow" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="group m-1 flex cursor-pointer items-center rounded-lg px-3 py-2.5 text-sm text-default-base transition-colors duration-300 hover:bg-primary-base/10 hover:text-primary-base focus:bg-accent-base/20 dark:text-default-base-dark dark:hover:bg-primary-base-dark/10 dark:hover:text-primary-base-dark dark:focus:bg-accent-base-dark/20"
        >
          <BsMoonStarsFill className="mr-2.5 h-4 w-4 group-hover:animate-pulse" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="group m-1 flex cursor-pointer items-center rounded-lg px-3 py-2.5 text-sm text-default-base transition-colors duration-300 hover:bg-primary-base/10 hover:text-primary-base focus:bg-accent-base/20 dark:text-default-base-dark dark:hover:bg-primary-base-dark/10 dark:hover:text-primary-base-dark dark:focus:bg-accent-base-dark/20"
        >
          <BsDisplayFill className="mr-2.5 h-4 w-4 group-hover:animate-pulse" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
