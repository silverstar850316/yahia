import { ImageOff } from "lucide-react";

const ProjectImagePlaceholder = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-base/5 via-background-base to-accent-base/5 p-8 dark:from-primary-base-dark/5 dark:via-background-base-dark dark:to-accent-base-dark/5">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,#000_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center space-y-3">
        {/* Icon */}
        <div className="rounded-lg border border-primary-base/20 bg-background-base/50 p-3 backdrop-blur-sm dark:border-primary-base-dark/20 dark:bg-background-base-dark/50">
          <ImageOff className="h-6 w-6 text-primary-base/60 dark:text-primary-base-dark/60" />
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="font-space-grotesk text-sm font-medium text-default-base/70 dark:text-default-base-dark/70">
            Preview Unavailable
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectImagePlaceholder;
