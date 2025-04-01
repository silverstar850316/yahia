"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navigationItems } from "@/lib/data";
import { RiCodeSSlashLine } from "react-icons/ri";
import ScrollToTopButton from "@/components/ui/scroll-to-top-button";

export function Footer() {
  const [date, setDate] = React.useState('');

  React.useEffect(() => {
    setDate(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative z-10 mt-8 border-t border-primary-base/40 bg-gradient-to-b from-background-base/50 to-background-base/80 py-12 backdrop-blur-sm dark:border-primary-base-dark/20 dark:from-background-base-dark/50 dark:to-background-base-dark/80">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1.2px,transparent_1px),linear-gradient(to_bottom,#80808012_1.2px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              {/* Light mode logo */}
              <div className="relative h-[35px] w-[35px] dark:hidden">
                <Image
                  src="/images/light-logo.png"
                  alt="Personal logo"
                  fill
                  sizes="(max-width: 30px) 100vw, 30px"
                  className="object-contain"
                />
              </div>
              {/* Dark mode logo */}
              <div className="relative hidden h-[35px] w-[35px] dark:block">
                <Image
                  src="/images/dark-logo.png"
                  alt="Personal logo"
                  fill
                  sizes="(max-width: 30px) 100vw, 30px"
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:justify-end">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-default-base transition-colors hover:text-accent-base dark:text-default-base-dark dark:hover:text-accent-base-dark"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-primary-base/5 pt-8 text-sm dark:border-primary-base-dark/5 md:flex-row">
          {/* Developer signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <RiCodeSSlashLine className="h-4 w-4 text-primary-base dark:text-primary-base-dark" />
            <span className="text-default-base dark:text-default-base-dark">
              Design & Development by{" "}
              <Link
                href="https://github.com/yahia-star820"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-base-dark transition-colors hover:text-accent-base dark:hover:text-accent-base-dark"
              >
                Yahia Elazhar
              </Link>
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm"
          >
            <span className="text-primary-base-dark">
              &copy; {date}
            </span>{" "}
            <span className="text-default-base dark:text-default-base-dark/90">
              All rights reserved
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
