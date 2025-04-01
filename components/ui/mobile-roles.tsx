"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/lib/data";

// Option 1: Modern Cards with Stacked Layout
const MobileRolesStacked = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mb-8 lg:hidden"
  >
    <div className="space-y-3">
      {heroContent.roles.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="group relative overflow-hidden rounded-lg border border-primary-base/20 bg-background-base/80 backdrop-blur-sm transition-all duration-300 hover:border-accent-base/50 dark:border-primary-base-dark/20 dark:bg-background-base-dark/50 dark:hover:border-accent-base-dark/50"
        >
          <div className="flex items-center gap-3 p-3">
            <div className="rounded-md bg-primary-base/10 p-2 transition-all duration-300 group-hover:bg-accent-base/10 dark:bg-primary-base-dark/10 dark:group-hover:bg-accent-base-dark/20">
              <item.icon className="h-4 w-4 text-primary-base transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark" />
            </div>
            <span className="font-space-grotesk text-sm text-primary-base-dark transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark">
              {item.label}
            </span>
          </div>
          <div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-accent-base to-primary-base opacity-0 transition-all duration-300 group-hover:opacity-100 dark:from-accent-base-dark dark:to-primary-base-dark" />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Option 2: Floating Chips Layout
const MobileRolesChips = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mb-8 lg:hidden"
  >
    <div className="flex flex-wrap gap-3">
      {heroContent.roles.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.6 + index * 0.1,
          }}
          className="group relative"
        >
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-base via-accent-base to-primary-base opacity-0 blur transition duration-300 group-hover:opacity-50 dark:from-primary-base-dark dark:via-accent-base-dark dark:to-primary-base-dark" />
          <div className="relative flex items-center gap-2 rounded-lg border border-primary-base bg-background-base/90 px-4 py-2 backdrop-blur-sm transition-colors dark:border-primary-base-dark/30 dark:bg-background-base-dark/90">
            <item.icon className="h-4 w-4 text-primary-base transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark" />
            <span className="font-space-grotesk text-sm text-primary-base-dark transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark">
              {item.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Option 3: Modern Sidebar Alternative
const MobileRolesSidebar = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mb-8 lg:hidden"
  >
    <div className="relative rounded-lg border border-primary-base/30 bg-background-base/80 p-4 backdrop-blur-sm dark:border-primary-base-dark/20 dark:bg-background-base-dark/50">
      <div className="absolute inset-x-0 -top-px mx-4 flex space-x-4">
        <div className="h-px w-8 bg-gradient-to-r from-primary-base to-accent-base dark:from-primary-base-dark dark:to-accent-base-dark" />
        <div className="h-px flex-1 bg-primary-base/10 dark:bg-primary-base-dark/10" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {heroContent.roles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="group flex items-center gap-3 rounded-md border border-transparent bg-primary-base/5 p-2 transition-all duration-300 hover:border-accent-base/50 hover:bg-accent-base/5 dark:bg-primary-base-dark/5 dark:hover:border-accent-base-dark/50 dark:hover:bg-accent-base-dark/5"
          >
            <item.icon className="h-4 w-4 text-primary-base transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark" />
            <span className="font-space-grotesk text-sm text-primary-base-dark transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

// Option 4: Minimal Grid with Focus States
const MobileRolesGrid = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mb-8 lg:hidden"
  >
    <div className="overflow-hidden rounded-lg border border-primary-base/20 bg-background-base/80 backdrop-blur-sm dark:border-primary-base-dark/20 dark:bg-background-base-dark/50">
      <div className="grid divide-x divide-y divide-primary-base/10 dark:divide-primary-base-dark/10 sm:grid-cols-3">
        {heroContent.roles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="group relative p-4 transition-colors duration-300 hover:bg-accent-base/5 dark:hover:bg-accent-base-dark/5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-primary-base/10 p-2 transition-all duration-300 group-hover:bg-accent-base/10 dark:bg-primary-base-dark/10 dark:group-hover:bg-accent-base-dark/10">
                  <item.icon className="h-4 w-4 text-primary-base transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark" />
                </div>
                <span className="font-space-grotesk text-sm text-primary-base-dark transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark">
                  {item.label}
                </span>
              </div>
            </div>
            <div className="absolute inset-x-0 top-0 h-[2px] scale-x-0 bg-gradient-to-r from-accent-base to-primary-base opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100 dark:from-accent-base-dark dark:to-primary-base-dark" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

// Option 5: Code Block Style
const MobileRolesCode = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mb-8 lg:hidden"
  >
    <div className="overflow-hidden rounded-lg border border-primary-base bg-background-base/60 backdrop-blur-sm dark:border-primary-base-dark/30 dark:bg-background-base-dark/50">
      <div className="border-b border-primary-base/20 bg-primary-base/5 px-4 py-2 dark:border-primary-base-dark/20 dark:bg-primary-base-dark/5">
        <div className="flex items-center justify-between">
          <span className="font-space-grotesk text-xs text-primary-base-dark/70 dark:text-primary-base-dark/70">
            skills
          </span>
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500/50" />
            <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
            <div className="h-2 w-2 rounded-full bg-green-500/50" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="grid gap-2 sm:grid-cols-2">
          {heroContent.roles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group flex items-center gap-2 rounded-md border border-primary-base/10 bg-primary-base/5 p-2 transition-all duration-300 hover:border-accent-base/30 hover:bg-accent-base/5 dark:border-primary-base-dark/10 dark:bg-primary-base-dark/5 dark:hover:border-accent-base-dark/30 dark:hover:bg-accent-base-dark/5"
            >
              <span className="font-mono text-xs text-primary-base-dark/50 dark:text-primary-base-dark/50">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <item.icon className="h-4 w-4 text-primary-base transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark" />
              <span className="font-space-grotesk text-sm text-primary-base-dark transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// Option 1: Modern Floating Cards with 3D effect
const MobileRolesFloating = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mb-8 lg:hidden"
  >
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {heroContent.roles.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="group relative"
        >
          {/* Gradient Glow */}
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary-base to-accent-base opacity-0 blur transition duration-300 group-hover:opacity-30 dark:from-primary-base-dark dark:to-accent-base-dark" />

          {/* Card Content */}
          <div className="relative flex items-center gap-3 rounded-lg border border-primary-base/20 bg-background-base/80 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-base/50 dark:border-primary-base-dark/20 dark:bg-background-base-dark/50 dark:hover:border-accent-base-dark/50">
            <div className="rounded-md bg-primary-base/10 p-2 ring-1 ring-primary-base/20 transition-all duration-300 group-hover:bg-accent-base/10 group-hover:ring-accent-base/30 dark:bg-primary-base-dark/10 dark:ring-primary-base-dark/20 dark:group-hover:bg-accent-base-dark/20 dark:group-hover:ring-accent-base-dark/30">
              <item.icon className="h-4 w-4 text-primary-base transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark" />
            </div>
            <span className="font-space-grotesk text-sm text-primary-base-dark transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark">
              {item.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Option 2: Glassmorphism Cards with Dynamic Borders
const MobileRolesGlass = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mb-8 lg:hidden"
  >
    <div className="relative rounded-lg border border-primary-base/20 bg-background-base/60 p-4 backdrop-blur-md dark:border-primary-base-dark/20 dark:bg-background-base-dark/40">
      {/* Decorative Header */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between border-b border-primary-base/10 px-4 py-2 dark:border-primary-base-dark/10">
        <div className="h-px w-16 bg-gradient-to-r from-primary-base to-accent-base dark:from-primary-base-dark dark:to-accent-base-dark" />
        <div className="flex space-x-1">
          <div className="h-1 w-1 rounded-full bg-primary-base/40 dark:bg-primary-base-dark/40" />
          <div className="h-1 w-1 rounded-full bg-accent-base/40 dark:bg-accent-base-dark/40" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {heroContent.roles.map((item, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.6 + index * 0.1,
            }}
            className="group relative rounded-lg bg-gradient-to-r from-background-base to-background-base p-[1px] transition-all duration-300 hover:from-primary-base hover:to-accent-base dark:from-background-base-dark dark:to-background-base-dark dark:hover:from-primary-base-dark dark:hover:to-accent-base-dark"
          >
            <div className="relative flex items-center gap-2 rounded-lg bg-background-base/80 p-3 backdrop-blur-sm dark:bg-background-base-dark/80">
              <item.icon className="h-4 w-4 text-primary-base transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark" />
              <span className="font-space-grotesk text-sm text-primary-base-dark transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark">
                {item.label}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  </motion.div>
);

// Option 3: Minimalist Tabs with Indicators
const MobileRolesMinimal = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="mb-8 lg:hidden"
  >
    <div className="overflow-hidden rounded-lg border border-primary-base/20 bg-background-base/60 backdrop-blur-sm dark:border-primary-base-dark/20 dark:bg-background-base-dark/40">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-primary-base/10 px-4 py-2 dark:border-primary-base-dark/10">
        <span className="font-space-grotesk text-xs text-primary-base-dark/70 dark:text-primary-base-dark/70">
          current.stack
        </span>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary-base/30 dark:bg-primary-base-dark/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-accent-base/30 dark:bg-accent-base-dark/30" />
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-px bg-primary-base/5 p-px dark:bg-primary-base-dark/5 sm:grid-cols-3">
        {heroContent.roles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="group relative bg-background-base p-3 transition-all duration-300 hover:bg-accent-base/5 dark:bg-background-base-dark dark:hover:bg-accent-base-dark/5"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-primary-base/10 p-2 transition-all duration-300 group-hover:bg-accent-base/10 dark:bg-primary-base-dark/10 dark:group-hover:bg-accent-base-dark/10">
                <item.icon className="h-4 w-4 text-primary-base transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark" />
              </div>
              <span className="font-space-grotesk text-sm text-primary-base-dark transition-colors group-hover:text-accent-base dark:text-primary-base-dark dark:group-hover:text-accent-base-dark">
                {item.label}
              </span>
            </div>
            {/* Active Indicator */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-gradient-to-r from-primary-base to-accent-base transition-transform duration-300 group-hover:scale-x-100 dark:from-primary-base-dark dark:to-accent-base-dark" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export {
  MobileRolesStacked,
  MobileRolesChips,
  MobileRolesSidebar,
  MobileRolesGrid,
  MobileRolesCode,
  MobileRolesFloating,
  MobileRolesGlass,
  MobileRolesMinimal,
};
