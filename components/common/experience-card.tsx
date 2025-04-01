"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiBuildingLine, RiMapPinLine } from "react-icons/ri";
import type { Experience } from "@/lib/types";
import Link from "next/link";

export const ExperienceCard: React.FC<{
  experience: Experience;
  isRight: boolean;
}> = ({ experience, isRight }) => (
  <div className={`relative ${isRight ? "ml-auto" : ""}`}>
    {/* Date display */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-2 font-mono text-sm"
    >
      <span className="text-accent-base/80 dark:text-accent-base-dark/80">
        {experience.dates.start}
      </span>
      <span className="mx-1 text-primary-base/50 dark:text-primary-base-dark/50">
        →
      </span>
      <span className="text-primary-base/80 dark:text-primary-base-dark/80">
        {experience.dates.end}
      </span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="my-1 rounded-lg border border-primary-base/40 bg-background-base/50 p-6 backdrop-blur-sm transition-colors dark:border-primary-base-dark/20 dark:bg-background-base-dark/50"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-4 pb-4 lg:flex-row lg:items-start lg:justify-between">
        {/* Role & Type */}
        <div className="flex items-center justify-between lg:flex-col lg:items-start">
          <h3 className="bg-gradient-to-r from-primary-base to-accent-base bg-clip-text font-space-grotesk text-lg font-medium text-transparent dark:from-primary-base-dark dark:to-accent-base-dark">
            {experience.role}
          </h3>
          <div className="lg:mt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-base/10 bg-primary-base/5 px-2.5 py-0.5 text-xs text-primary-base dark:border-primary-base-dark/10 dark:bg-primary-base-dark/5 dark:text-primary-base-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-base/60 dark:bg-accent-base-dark/60" />
              {experience.type}
            </span>
          </div>
        </div>

        {/* Company Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-default-base/70 dark:text-default-base-dark/70">
            <RiBuildingLine className="h-4 w-4 text-primary-base dark:text-primary-base-dark" />
            {experience.companyUrl ? (
              <Link
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-base dark:hover:text-accent-base-dark"
              >
                {experience.company}
                <span className="ml-1 text-xs text-primary-base dark:text-primary-base-dark">
                  ↗
                </span>
              </Link>
            ) : (
              <span>{experience.company}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-default-base/70 dark:text-default-base-dark/70">
            <RiMapPinLine className="h-4 w-4 text-primary-base dark:text-primary-base-dark" />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-base/80 to-transparent dark:via-primary-base-dark/20" />

      {/* Description & Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mt-4 space-y-4"
      >
        <p className="text-sm text-default-base/80 dark:text-default-base-dark/80">
          {experience.description}
        </p>

        {/* Achievements with terminal style */}
        <div className="rounded-lg border border-primary-base/10 bg-primary-base/5 p-4 dark:border-primary-base-dark/10 dark:bg-primary-base-dark/5">
          <div className="mb-2 font-mono text-xs text-primary-base/60 dark:text-primary-base-dark/60">
            $ achievements --list
          </div>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-sm"
              >
                <span className="text-accent-base dark:text-accent-base-dark">
                  {">"}
                </span>
                <span className="text-default-base/70 dark:text-default-base-dark/70">
                  {achievement}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  </div>
);
