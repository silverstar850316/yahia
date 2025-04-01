"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { Clock, Activity, Terminal } from "lucide-react";
import { SiSpotify, SiGithub } from "react-icons/si";
import Image from "next/image";

// You'll need to create an API route to fetch this data
interface NowPlayingData {
  spotify: {
    isPlaying: boolean;
    title: string;
    artist: string;
    albumUrl: string;
  } | null;
  github: {
    latestRepo: string;
    latestCommit: string;
    commitDate: string;
  } | null;
  coding: {
    dailyHours: number;
    topLanguage: string;
    currentStreak: number;
  } | null;
}

export default function Now() {
  const [data, setData] = React.useState<NowPlayingData | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/now-playing");
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="now" className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Now" subtitle="presence" align="left" />

        {/* Terminal-style description */}
        <div className="mx-auto mt-6 max-w-2xl">
          <div className="mb-12 rounded-lg border border-primary-base/20 bg-background-base/50 p-3 font-mono text-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/50">
            <Terminal className="mb-2 h-4 w-4 text-accent-base dark:text-accent-base-dark" />
            <span className="text-accent-base dark:text-accent-base-dark">
              $ status
            </span>
            <span className="ml-2 text-primary-base/70 dark:text-primary-base-dark/70">
              --fetch
            </span>
            <span className="ml-2 text-primary-base-dark">
              &gt;&gt;&gt; Real-time glimpse into my developer life
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Spotify Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg border border-primary-base/10 bg-background-base/80 backdrop-blur-sm transition-all hover:border-primary-base/30 dark:border-primary-base-dark/10 dark:bg-background-base-dark/80"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-base/50 to-background-base/80 dark:via-background-base-dark/50 dark:to-background-base-dark/80" />

            {data?.spotify?.isPlaying && (
              <div className="absolute inset-0">
                <Image
                  src={data.spotify.albumUrl}
                  alt="Album Art"
                  className="h-full w-full object-cover opacity-50"
                />
              </div>
            )}

            <div className="relative p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-green-500/10 p-3">
                  <SiSpotify className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-space-grotesk text-sm font-medium text-default-base/50 dark:text-default-base-dark/50">
                    {data?.spotify?.isPlaying ? "NOW PLAYING" : "SPOTIFY"}
                  </h3>
                  <p className="text-default-base dark:text-default-base-dark">
                    {data?.spotify?.isPlaying
                      ? `${data.spotify.title} - ${data.spotify.artist}`
                      : "Not playing"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="overflow-hidden rounded-lg border border-primary-base/10 bg-background-base/80 backdrop-blur-sm transition-all hover:border-primary-base/30 dark:border-primary-base-dark/10 dark:bg-background-base-dark/80"
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-500/10 p-3">
                  <SiGithub className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-space-grotesk text-sm font-medium text-default-base/50 dark:text-default-base-dark/50">
                    LATEST COMMIT
                  </h3>
                  <p className="text-default-base dark:text-default-base-dark">
                    {data?.github?.latestRepo || "Loading..."}
                  </p>
                  <p className="mt-1 text-xs text-default-base/60 dark:text-default-base-dark/60">
                    {data?.github?.latestCommit || ""}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coding Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-lg border border-primary-base/10 bg-background-base/80 backdrop-blur-sm transition-all hover:border-primary-base/30 dark:border-primary-base-dark/10 dark:bg-background-base-dark/80"
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Activity className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-space-grotesk text-sm font-medium text-default-base/50 dark:text-default-base-dark/50">
                    CODING ACTIVITY
                  </h3>
                  <p className="text-default-base dark:text-default-base-dark">
                    {data?.coding?.dailyHours || 0} hours today
                  </p>
                  <p className="mt-1 text-xs text-default-base/60 dark:text-default-base-dark/60">
                    {data?.coding?.topLanguage || "TypeScript"} •{" "}
                    {data?.coding?.currentStreak || 0} day streak
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-primary-base/10 bg-background-base/80 p-4 text-center backdrop-blur-sm dark:border-primary-base-dark/10 dark:bg-background-base-dark/80"
          >
            <Clock className="mx-auto h-5 w-5 text-primary-base/70 dark:text-primary-base-dark/70" />
            <p className="mt-2 text-xs text-default-base/50 dark:text-default-base-dark/50">
              LOCAL TIME
            </p>
            <p className="font-mono text-sm text-default-base dark:text-default-base-dark">
              {new Date().toLocaleTimeString()}
            </p>
          </motion.div>

          {/* Add more quick stats as needed */}
        </div>
      </div>
    </section>
  );
}
