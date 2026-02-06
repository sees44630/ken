
import React, { useEffect, useRef } from 'react';

const GridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const gridSize = 60;

    let mouse = { x: 0, y: 0 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let offset = 0;

    const animate = () => {
      offset += 0.3; // Slower, more elegant movement
      if (offset >= gridSize) offset = 0;
      
      ctx.clearRect(0, 0, width, height);

      // Pulse alpha based on time
      const time = Date.now() * 0.001;
      const pulse = Math.sin(time) * 0.02 + 0.06;

      // Base Grid Lines
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        const dist = Math.abs(x - mouse.x);
        const mouseEffect = Math.max(0, 1 - dist / 300);
        ctx.strokeStyle = `rgba(250, 204, 21, ${pulse + mouseEffect * 0.15})`;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = offset; y <= height; y += gridSize) {
        const dist = Math.abs(y - mouse.y);
        const mouseEffect = Math.max(0, 1 - dist / 300);
        ctx.strokeStyle = `rgba(250, 204, 21, ${pulse + mouseEffect * 0.15})`;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Intersection points
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = offset; y <= height; y += gridSize) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          const mouseEffect = Math.max(0, 1 - dist / 200);
          
          ctx.fillStyle = `rgba(250, 204, 21, ${0.1 + mouseEffect * 0.6})`;
          const size = 1 + mouseEffect * 2;
          ctx.fillRect(x - size/2, y - size/2, size, size);
        }
      }

      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default GridBackground;
