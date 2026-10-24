import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse) and desktop viewport
    const checkIsDesktopPointer = () => {
      const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
      return mediaQuery.matches && window.innerWidth >= 1024;
    };

    if (!checkIsDesktopPointer()) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleResize = () => {
      if (!checkIsDesktopPointer()) {
        setIsTouchDevice(true);
      } else {
        setIsTouchDevice(false);
      }
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('select') ||
        target?.closest('[role="button"]') ||
        target?.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      // Lerp for smooth trailing outer ring
      const factor = 0.25;
      currentX += (targetX - currentX) * factor;
      currentY += (targetY - currentY) * factor;

      setPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] rounded-full transition-all duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? '42px' : '26px',
          height: isHovered ? '42px' : '26px',
          backgroundColor: isHovered ? 'rgba(37, 99, 235, 0.12)' : 'transparent',
          borderColor: isHovered ? '#2563EB' : 'rgba(23, 23, 23, 0.35)',
          borderWidth: '1.5px',
          borderStyle: 'solid',
        }}
      />
      {/* Center Precise Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] w-1.5 h-1.5 rounded-full bg-blue-600 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
    </>
  );
};
