import { useState, useEffect } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let progressInterval: ReturnType<typeof setInterval>;

    if (isLoading) {
      // Show loader after 500ms
      timeout = setTimeout(() => {
        setShowLoader(true);

        // Simulate loading progress
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) return prev;
            return prev + Math.random() * 10;
          });
        }, 100);
      }, 500);
    } else {
      // Complete progress immediately when loading is done - use setTimeout to avoid synchronous setState in effect
      const completeTimer = setTimeout(() => {
        setProgress(100);
      }, 0);

      // Hide loader after animation completes
      const hideTimer = setTimeout(() => {
        setShowLoader(false);
        setProgress(0);
      }, 500);

      return () => {
        clearTimeout(completeTimer);
        clearTimeout(hideTimer);
      };
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(progressInterval);
    };
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <div className="bg-night fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Grid */}
      <div className="grid-bg absolute inset-0 opacity-20"></div>

      {/* Scanning Line */}
      <div className="via-cyan scan-line absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent to-transparent"></div>

      {/* Loading Content */}
      <div className="z-10 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-cyan text-glow neon-glow mb-2 font-mono text-5xl font-bold">
            MASON.EXE
          </h1>
          <div className="font-mono text-sm text-gray-500">
            INITIALIZING NEURAL INTERFACE...
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mx-auto mb-6 w-80">
          <div className="mb-2 flex justify-between font-mono text-xs text-gray-500">
            <span>LOADING</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="relative h-1 overflow-hidden bg-gray-700">
            <div
              className="from-cyan to-pink relative h-full bg-gradient-to-r transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent to-white opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div className="font-mono text-xs text-gray-400">
          <div className="animate-pulse">
            {progress < 30 && "CONNECTING TO NIGHT CITY..."}
            {progress >= 30 && progress < 60 && "LOADING NEURAL PATHWAYS..."}
            {progress >= 60 && progress < 90 && "INITIALIZING CYBERDECK..."}
            {progress >= 90 && "CONNECTION ESTABLISHED"}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="bg-pink absolute top-1/4 left-1/4 h-2 w-2 animate-ping"></div>
        <div
          className="bg-yellow absolute top-3/4 right-1/4 h-1 w-1 animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="bg-purple absolute bottom-1/4 left-1/3 h-1 w-1 animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
}
