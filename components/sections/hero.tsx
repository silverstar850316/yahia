"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { heroContent } from "@/lib/data";
import { MobileRolesSidebar } from "../ui/mobile-roles";
import { SiGithub, SiLinkedin, SiDiscord, SiTelegram } from "react-icons/si";
import { PiReadCvLogoLight } from "react-icons/pi";
import { useSectionInView } from "@/hooks/useSectionInView";
import { trackEvent } from "@/utils/analytics";

export default function Hero() {
  const { ref } = useSectionInView("home", 0.5);
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Analytics Tracking
  const handleSocialClick = (platform: string) => {
    trackEvent("social_click", "social", platform);
  };

  const handleResumeClick = () => {
    trackEvent("resume_download", "resume", "hero");
  };

  const handleProjectsClick = () => {
    trackEvent("projects_click", "projects", "hero");
  };

  // Mobile/Tablet roles that appear after description
  const MobileRoles = MobileRolesSidebar;

  return (
    <section
      id="home"
      ref={ref}
      className="relative mt-3 flex w-full flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-20"
    >
      {/* Matrix-like animated background */}
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={theme === "dark" ? 1.2 : 1.6}
          particleDensity={theme === "dark" ? 120 : 140}
          particleColor={theme === "dark" ? "#71a295" : "#365e53"}
        />
      </div>

      {/* Dynamic Side Roles - Desktop only */}
      <div className="absolute right-10 top-20 hidden h-full lg:block xl:right-0 xl:top-3">
        <div className="relative h-full w-[1.5px] bg-primary-base dark:w-[2px] dark:bg-primary-base-dark/20">
          <div className="absolute -left-[150px] bottom-20 flex h-full flex-col justify-center space-y-16 xl:bottom-0">
            {heroContent.roles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="flex items-center gap-3"
              >
                <item.icon className="h-5 w-5 text-primary-base dark:text-primary-base-dark/80" />
                <span className="font-space-grotesk text-sm text-primary-base dark:text-primary-base-dark/80">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full"
      >
        {/* Code-style intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <HoverBorderGradient
            containerClassName="rounded-full backdrop-blur-sm"
            className="flex items-center space-x-2 border-0 bg-background-base dark:bg-background-base-dark"
            duration={1.5}
          >
            <span className="font-space-grotesk text-xs tracking-wider text-primary-base-dark dark:text-primary-base-dark/90">
              <span className="text-primary-base dark:text-primary-base-dark">
                {"<"}
              </span>
              {heroContent.intro}
              <span className="text-primary-base dark:text-primary-base-dark">
                {"/>"}
              </span>
            </span>
          </HoverBorderGradient>
        </motion.div>

        {/* Main Content */}
        <div className="relative">
          {/* Name Section with Terminal-style Decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-block">
              <div className="mb-2 font-mono text-sm">
                <span className="text-accent-base dark:text-accent-base-dark">
                  hello{" "}
                </span>
                <span className="text-primary-base/70 dark:text-primary-base-dark/70">
                  {">"}
                </span>
                <span className="ml-2 text-primary-base-dark">
                  Welcome! I&apos;m
                </span>
              </div>

              <h1 className="relative mb-2 bg-gradient-to-r from-primary-base-dark via-accent-base-dark/70 to-primary-base bg-clip-text font-raleway text-4xl font-bold tracking-tight text-transparent dark:from-primary-base-dark dark:via-accent-base-dark dark:to-primary-base-dark sm:text-6xl md:text-7xl">
                {heroContent.personal.name}
                <span className="absolute -right-8 top-5 font-space-grotesk text-lg text-primary-base dark:text-primary-base-dark/40">
                  _
                </span>
              </h1>

              <div className="mt-2 font-mono text-sm">
                <span className="text-accent-base dark:text-accent-base-dark">
                  nickname{" "}
                </span>
                <span className="text-primary-base/70 dark:text-primary-base-dark/70">
                  {">"}
                </span>
                <span className="ml-2 text-primary-base-dark">
                  Also known as {heroContent.personal.nickname}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Role Title with Terminal-like Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-block rounded-lg border border-primary-base/50 bg-background-base/60 p-4 backdrop-blur-sm dark:border-primary-base-dark/30 dark:bg-background-base-dark/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500/50"></div>
                </div>
                <span className="ml-2 font-space-grotesk text-sm text-primary-base/80 dark:text-primary-base-dark/70">
                  {heroContent.currentRole.filename}
                </span>
              </div>
              <h2 className="mt-3 font-space-grotesk text-xl font-medium text-primary-base-dark dark:text-primary-base-dark">
                {heroContent.currentRole.title}
              </h2>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 max-w-4xl"
          >
            <TextGenerateEffect words={heroContent.description} />
          </motion.div>

          {/* Mobile/Tablet Roles */}
          <MobileRoles />

          {/* CTA Section with Original Transition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 sm:flex-row"
          >
            <Link
              href={heroContent.cta.primary.href}
              onClick={handleProjectsClick}
            >
              <Button
                className="group relative h-12 overflow-hidden rounded-lg bg-secondary-base px-4 py-2 text-default-base transition-all hover:bg-primary-base/90 dark:bg-primary-base-dark/80 dark:text-default-base-dark dark:hover:bg-primary-base-dark/10 sm:px-8"
                size="lg"
              >
                <span className="relative z-10 flex items-center gap-2 font-space-grotesk">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-10 bg-accent-base transition-transform duration-500 group-hover:translate-x-full dark:bg-accent-base-dark/20" />
              </Button>
            </Link>

            <Link
              href={heroContent.cta.secondary.href}
              target="_blank"
              onClick={handleResumeClick}
            >
              <Button
                variant="outline"
                className="group h-12 overflow-hidden border-primary-base/50 bg-background-base/50 px-4 font-space-grotesk text-primary-base-dark backdrop-blur-sm transition-all duration-300 hover:bg-primary-base/10 hover:text-primary-base-dark dark:border-primary-base-dark/30 dark:bg-background-base-dark/50 dark:hover:bg-primary-base-dark/10 sm:px-8"
                size="lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PiReadCvLogoLight className="h-5 w-5 group-hover:-rotate-[12deg]" />
                  Resume
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-4 rounded-lg border border-primary-base/50 bg-background-base p-2 backdrop-blur-sm dark:border-primary-base-dark/30 dark:bg-background-base-dark/50">
              <Link
                href={heroContent.social.github}
                onClick={() => handleSocialClick("github")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-md p-2 transition-colors hover:bg-primary-base/10 dark:hover:bg-primary-base-dark/10"
              >
                <SiGithub className="h-5 w-5 text-primary-base-dark transition-colors group-hover:text-primary-base/80 dark:text-primary-base-dark dark:group-hover:text-primary-base-dark/80" />
              </Link>

              <div className="h-5 w-1 border-r border-primary-base dark:border-primary-base-dark/30"></div>

              <Link
                href={heroContent.social.linkedin}
                onClick={() => handleSocialClick("linkedin")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-md p-2 transition-colors hover:bg-primary-base/10 dark:hover:bg-primary-base-dark/10"
              >
                <SiLinkedin className="h-5 w-5 text-primary-base-dark transition-colors group-hover:text-primary-base/80 dark:text-primary-base-dark dark:group-hover:text-primary-base-dark/80" />
              </Link>

              <div className="h-5 w-1 border-r border-primary-base dark:border-primary-base-dark/30"></div>

              <Link
                href={heroContent.social.discord}
                onClick={() => handleSocialClick("discord")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-md p-2 transition-colors hover:bg-primary-base/10 dark:hover:bg-primary-base-dark/10"
              >
                <SiDiscord className="h-5 w-5 text-primary-base-dark transition-colors group-hover:text-primary-base/80 dark:text-primary-base-dark dark:group-hover:text-primary-base-dark/80" />
              </Link>

              <div className="h-5 w-1 border-r border-primary-base dark:border-primary-base-dark/30"></div>

              <Link
                href={heroContent.social.telegram}
                onClick={() => handleSocialClick("telegram")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-md p-2 transition-colors hover:bg-primary-base/10 dark:hover:bg-primary-base-dark/10"
              >
                <SiTelegram className="h-5 w-5 text-primary-base-dark transition-colors group-hover:text-primary-base/80 dark:text-primary-base-dark dark:group-hover:text-primary-base-dark/80" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
