'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [showLoader, setShowLoader] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isLoading) {
      // Show loader after 500ms
      timeout = setTimeout(() => {
        setShowLoader(true);
        
        // Simulate loading progress
        progressInterval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 90) return prev;
            return prev + Math.random() * 10;
          });
        }, 100);
      }, 500);
    } else {
      // Complete progress immediately when loading is done
      setProgress(100);
      
      // Hide loader after animation completes
      setTimeout(() => {
        setShowLoader(false);
        setProgress(0);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(progressInterval);
    };
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-50 bg-night flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent scan-line"></div>
      
      {/* Loading Content */}
      <div className="text-center z-10">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-5xl font-mono font-bold text-cyan text-glow mb-2 neon-glow">
            MASON.EXE
          </h1>
          <div className="text-gray-500 text-sm font-mono">
            INITIALIZING NEURAL INTERFACE...
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="flex justify-between text-xs text-gray-500 font-mono mb-2">
            <span>LOADING</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-gray-700 relative overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan to-pink transition-all duration-200 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div className="text-xs text-gray-400 font-mono">
          <div className="animate-pulse">
            {progress < 30 && "CONNECTING TO NIGHT CITY..."}
            {progress >= 30 && progress < 60 && "LOADING NEURAL PATHWAYS..."}
            {progress >= 60 && progress < 90 && "INITIALIZING CYBERDECK..."}
            {progress >= 90 && "CONNECTION ESTABLISHED"}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-purple animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}