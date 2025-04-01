"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      {/* Background with consistent dark styling */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background-base-dark/[0.02] dark:bg-background-base-dark" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-base-dark/10 blur-3xl" />
      </div>

      <div className="w-full max-w-lg px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-hidden rounded-lg border border-primary-base-dark/10 bg-background-base-dark/5 p-8 backdrop-blur-sm dark:bg-background-base-dark/50"
        >
          {/* Simple Terminal Header */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary-base-dark/20" />
            <div className="h-2 w-2 rounded-full bg-primary-base-dark/20" />
            <div className="h-2 w-2 rounded-full bg-primary-base-dark/20" />
          </div>

          {/* 404 Content */}
          <div className="mt-8 text-center">
            <h1 className="font-mono text-6xl font-bold text-primary-base-dark">
              404
            </h1>
            <p className="mt-4 font-space-grotesk text-lg text-primary-base-dark/80">
              Oops! Page not found
            </p>
            <p className="mt-2 text-sm text-primary-base-dark/60">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Home Button */}
            <Link
              href="/"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg border border-primary-base-dark/20 bg-primary-base-dark/5 px-4 py-2 text-sm text-primary-base-dark transition-all hover:border-primary-base-dark/30 hover:bg-primary-base-dark/10"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
