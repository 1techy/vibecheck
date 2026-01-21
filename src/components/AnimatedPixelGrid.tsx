import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function AnimatedPixelGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let scrollY = 0;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const gridSize = 40; // Size of each grid cell
    const pixelSize = 2; // Size of each pixel dot

    // Animated pixel grid
    const drawPixelGrid = (time: number) => {
      // Clear canvas (transparent to show page background)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollEffect = scrollY * 0.3;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      // Draw grid dots
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const posX = x * gridSize;
          const posY = y * gridSize;

          // Create wave effect with time and scroll
          const distance = Math.sqrt(
            Math.pow((posX - canvas.width / 2), 2) + 
            Math.pow((posY - canvas.height / 2 + scrollEffect), 2)
          );
          
          const wave = Math.sin(distance * 0.01 - time * 0.002) * 0.5 + 0.5;
          const scrollWave = Math.sin((y * gridSize + scrollEffect) * 0.01 - time * 0.001);
          
          // Combine waves for dynamic opacity
          const opacity = (wave * 0.4 + scrollWave * 0.3 + 0.2) * 0.6;
          
          // Draw pixel dot
          ctx.fillStyle = `rgba(34, 197, 94, ${opacity})`;
          ctx.fillRect(posX - pixelSize / 2, posY - pixelSize / 2, pixelSize, pixelSize);
          
          // Add glow effect to some pixels
          if (wave > 0.7 && scrollWave > 0.3) {
            const glowGradient = ctx.createRadialGradient(posX, posY, 0, posX, posY, 15);
            glowGradient.addColorStop(0, `rgba(34, 197, 94, ${opacity * 0.5})`);
            glowGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(posX, posY, 15, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw animated connection lines between nearby bright pixels
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.15)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < 50; i++) {
        const phase = (time * 0.001 + i) % 1;
        const x1 = (Math.sin(i * 0.5 + time * 0.0005) * 0.5 + 0.5) * canvas.width;
        const y1 = ((i / 50) * canvas.height + scrollEffect * 0.5) % canvas.height;
        const x2 = x1 + Math.cos(time * 0.001 + i) * 100;
        const y2 = y1 + Math.sin(time * 0.001 + i) * 100;
        
        ctx.globalAlpha = phase * (1 - phase) * 4; // Fade in and out
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(drawPixelGrid);
    };

    animationFrameId = requestAnimationFrame(drawPixelGrid);

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh',
        zIndex: 0
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  );
}
