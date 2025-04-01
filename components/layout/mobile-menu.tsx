"use client";

import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/lib/data";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  isScrolled: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, isScrolled, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background-base/60 backdrop-blur-[2px] dark:bg-background-base-dark/60"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 right-0 top-0 z-50 mt-[80px]"
          >
            <motion.div
              initial={false}
              animate={{
                width: isScrolled ? "95%" : "100%",
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="mx-auto overflow-hidden rounded-lg border border-primary-base/30 bg-background-base/95 p-6 shadow-lg backdrop-blur-md dark:border-primary-base-dark/20 dark:bg-background-base-dark/95"
            >
              <nav className="max-w-lg">
                <div className="flex flex-col space-y-6">
                  {navigationItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: i * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-lg text-default-base/70 transition-colors hover:text-accent-base dark:text-default-base-dark/70 dark:hover:text-accent-base-dark"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Contact Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: navigationItems.length * 0.05,
                      ease: "easeOut",
                    }}
                    className="pt-2"
                  >
                    <Link
                      href="/#contact"
                      onClick={onClose}
                      className="inline-block rounded-lg bg-primary-base px-5 py-2.5 text-sm text-white shadow-lg transition-colors hover:bg-primary-base/90 dark:bg-primary-base-dark dark:hover:bg-primary-base-dark/90"
                    >
                      Contact Me
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
