"use client";

import { useEffect, useRef } from 'react';

export default function SequenceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const totalFrames = 51;
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images
    const loadImages = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const paddedNumber = i.toString().padStart(3, '0');
        img.src = `/airplane/ezgif-frame-${paddedNumber}.png`;
        imagesRef.current.push(img);
      }
      
      // Draw first frame when the first image loads
      if (imagesRef.current[0]) {
        imagesRef.current[0].onload = () => {
          drawFrame(0);
        };
      }
    };
    
    loadImages();

    // Handle scroll logic for scrubbing the video
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // If we are in the hero section, just hold on frame 0
      if (scrollPosition < heroHeight) {
        requestAnimationFrame(() => drawFrame(0));
        return;
      }

      // Calculate how far we've scrolled past the hero section
      const scrollYPastHero = scrollPosition - heroHeight;
      const totalScrollablePastHero = document.documentElement.scrollHeight - window.innerHeight - heroHeight;
      
      let scrollFraction = scrollYPastHero / totalScrollablePastHero;
      if (scrollFraction > 1) scrollFraction = 1;
      if (scrollFraction < 0) scrollFraction = 0;
      
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(scrollFraction * totalFrames)
      );

      requestAnimationFrame(() => drawFrame(frameIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial draw in case they start half way down page
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || !imagesRef.current[index]) return;
    
    const context = canvasRef.current.getContext('2d');
    if (!context) return;
    
    const img = imagesRef.current[index];
    if (!img.complete || img.naturalHeight === 0) return;

    // Handle resizing & scaling (acting like object-fit: cover)
    const rect = canvasRef.current.getBoundingClientRect();
    // Use device pixel ratio for sharp rendering on retina screens
    const dpr = window.devicePixelRatio || 1;
    
    canvasRef.current.width = rect.width * dpr;
    canvasRef.current.height = rect.height * dpr;
    
    // Scale context
    context.scale(dpr, dpr);

    const scale = Math.max(rect.width / img.width, rect.height / img.height);
    const x = (rect.width / 2) - (img.width / 2) * scale;
    const y = (rect.height / 2) - (img.height / 2) * scale;

    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen bg-imperial-black">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
      {/* Dark overlay to ensure white text is highly readable */}
      <div className="absolute inset-0 bg-[#0a0a0c]/70 backdrop-blur-[2px]" />
    </div>
  );
}
