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
    <div style={{
      position: 'fixed',
      inset: '0',
      zIndex: 50,
      backgroundColor: '#0a0a0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Background Grid */}
      <div style={{
        position: 'absolute',
        inset: '0',
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: '0.2'
      }}></div>
      
      {/* Scanning Line */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #00ffff, transparent)',
        animation: 'scanLine 3s linear infinite'
      }}></div>
      
      {/* Loading Content */}
      <div style={{ textAlign: 'center', zIndex: 10 }}>
        {/* Logo/Brand */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '48px',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            color: '#00ffff',
            filter: 'drop-shadow(0 0 10px #00ffff)',
            marginBottom: '8px',
            animation: 'neonGlow 2s ease-in-out infinite alternate'
          }}>
            MASON.EXE
          </h1>
          <div style={{
            color: '#808090',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            INITIALIZING NEURAL INTERFACE...
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ width: '320px', margin: '0 auto 24px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px',
            color: '#808090',
            fontFamily: 'monospace',
            marginBottom: '8px'
          }}>
            <span>LOADING</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div style={{
            height: '4px',
            backgroundColor: '#404050',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(to right, #00ffff, #ff007f)',
              transition: 'width 0.2s ease-out',
              width: `${progress}%`,
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(to right, transparent, white)',
                opacity: '0.3',
                animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}></div>
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div style={{
          fontSize: '12px',
          color: '#a0a0b0',
          fontFamily: 'monospace'
        }}>
          <div style={{ animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
            {progress < 30 && "CONNECTING TO NIGHT CITY..."}
            {progress >= 30 && progress < 60 && "LOADING NEURAL PATHWAYS..."}
            {progress >= 60 && progress < 90 && "INITIALIZING CYBERDECK..."}
            {progress >= 90 && "CONNECTION ESTABLISHED"}
          </div>
        </div>

        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '8px',
          height: '8px',
          backgroundColor: '#ff007f',
          animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '75%',
          right: '25%',
          width: '4px',
          height: '4px',
          backgroundColor: '#ffff00',
          animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
          animationDelay: '1s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '33%',
          width: '4px',
          height: '4px',
          backgroundColor: '#9d00ff',
          animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
          animationDelay: '2s'
        }}></div>
      </div>
    </div>
  );
}