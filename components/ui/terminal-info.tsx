"use client";

import React from "react";
import { Terminal } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface TerminalInfoProps {
  command?: string;
  flag?: string;
  content?: string;
}

const TerminalInfo: React.FC<TerminalInfoProps> = ({
  command,
  flag,
  content,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.3,
        bounce: 0,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="mb-8 rounded-lg border border-primary-base/50 bg-background-base/50 p-4 backdrop-blur-sm dark:border-primary-base-dark/20 dark:bg-background-base-dark/50"
    >
      {/* Compact layout for mobile */}
      <div className="flex flex-col gap-2 md:hidden">
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal className="h-4 w-4 shrink-0 text-accent-base/80 dark:text-accent-base-dark/80" />
          </motion.div>
          <div className="flex items-center gap-2 overflow-x-auto">
            <motion.span
              variants={itemVariants}
              className="whitespace-nowrap font-mono text-sm text-primary-base/90 dark:text-primary-base-dark/90"
            >
              {command}
            </motion.span>
            {flag && (
              <>
                <span className="text-default-base/30 dark:text-default-base-dark/30">
                  /
                </span>
                <motion.span
                  variants={itemVariants}
                  className="whitespace-nowrap font-mono text-sm text-accent-base/90 dark:text-accent-base-dark/90"
                >
                  {flag}
                </motion.span>
              </>
            )}
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="ml-6 border-l-2 border-primary-base/10 pl-3 dark:border-primary-base-dark/10"
        >
          <span className="text-sm text-default-base/70 dark:text-default-base-dark/70">
            {content}
          </span>
        </motion.div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex md:items-center md:gap-3">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Terminal className="h-4 w-4 shrink-0 text-accent-base/80 dark:text-accent-base-dark/80" />
        </motion.div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <motion.span
            variants={itemVariants}
            className="font-mono text-sm text-primary-base/90 dark:text-primary-base-dark/90"
          >
            {command}
          </motion.span>
          {flag && (
            <>
              <span className="text-default-base/30 dark:text-default-base-dark/30">
                /
              </span>
              <motion.span
                variants={itemVariants}
                className="font-mono text-sm text-accent-base/90 dark:text-accent-base-dark/90"
              >
                {flag}
              </motion.span>
            </>
          )}
          <motion.span
            variants={itemVariants}
            className="text-default-base/30 dark:text-default-base-dark/30"
          >
            →
          </motion.span>
          <motion.span
            variants={itemVariants}
            className="text-sm text-default-base/70 dark:text-default-base-dark/70"
          >
            {content}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalInfo;
