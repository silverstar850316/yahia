"use client";

import { trackEvent } from "@/utils/analytics";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { projectsData, projectsSection } from "@/lib/data";
import { Code2, ChevronDown, ChevronUp } from "lucide-react";
import TerminalInfo from "../ui/terminal-info";
import OtherProjectCard from "../common/other-project-card";
import FeaturedProjectCard from "../common/featured-project-card";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.5);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Track when someone views the projects section
  useEffect(() => {
    trackEvent("projects_view", "section", "projects");
  }, []);

  // Track when someone clicks a project or its links
  const handleProjectClick = (
    projectName: string,
    type: "github" | "live" | "view",
  ) => {
    trackEvent("project_click", "project", `${type}_${projectName}`);
  };

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);
  const displayedOtherProjects = showAllProjects
    ? otherProjects
    : otherProjects.slice(0, 3);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-12 px-4 py-16 md:px-6"
    >
      <div className="relative">
        <SectionHeader
          title={projectsSection.title}
          subtitle={projectsSection.subtitle}
          align="left"
        />

        {/* Terminal-style description */}
        <div className="mt-6 w-fit">
          <TerminalInfo
            command={projectsSection.terminalInfo.command}
            flag={projectsSection.terminalInfo.flag}
            content={projectsSection.terminalInfo.content}
          />
        </div>

        {/* Featured Projects */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.title, "view")}
            >
              <FeaturedProjectCard
                project={{
                  ...project,
                  links: {
                    // github: project.links.github || undefined,
                    live: project.links.live || undefined,
                  },
                }}
              />
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative mt-16"
        >
          {/* Section Divider with Text */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary-base/50 dark:border-primary-base-dark/30" />
            </div>
            <div className="relative flex items-center gap-2 rounded-full border border-primary-base/50 bg-background-base/95 px-4 py-2 backdrop-blur-sm dark:border-primary-base-dark/30 dark:bg-background-base-dark/95">
              <Code2 className="h-4 w-4 text-primary-base dark:text-primary-base-dark" />
              <span className="text-sm text-primary-base dark:text-primary-base-dark">
                More Projects
              </span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedOtherProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project.title, "view")}
              >
                <OtherProjectCard
                  project={{
                    ...project,
                    links: {
                      // github: project.links.github || undefined,
                      live: project.links.live || undefined,
                    },
                  }}
                />
              </div>
            ))}
          </div>

          {/* Toggle Show More/Less Button */}
          {otherProjects.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 flex justify-center"
            >
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="group flex items-center gap-2 rounded-lg border border-primary-base/40 bg-primary-base/5 px-4 py-2 text-sm text-primary-base transition-all hover:border-primary-base/80 hover:bg-primary-base/10 dark:border-primary-base-dark/20 dark:bg-primary-base-dark/5 dark:text-primary-base-dark dark:hover:border-primary-base-dark/40 dark:hover:bg-primary-base-dark/10"
              >
                <span>{showAllProjects ? "Show Less" : "Show More"}</span>
                {showAllProjects ? (
                  <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
