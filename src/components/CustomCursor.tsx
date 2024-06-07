import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const previousPosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  const ease = 0.1; // Adjust this value to control the smoothness

  const animate = () => {
    const { x, y } = previousPosition.current;
    const { x: targetX, y: targetY } = targetPosition.current;

    const dx = targetX - x;
    const dy = targetY - y;

    previousPosition.current.x += dx * ease;
    previousPosition.current.y += dy * ease;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${previousPosition.current.x}px, ${previousPosition.current.y}px)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (event: MouseEvent) => {
    targetPosition.current = {
      x: event.clientX + 10, // Adjust this value to control the distance from the cursor
      y: event.clientY + 10, // Adjust this value to control the distance from the cursor
    };
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} style={cursorStyle}></div>
  );
};

const cursorStyle: React.CSSProperties = {};
export default CustomCursor;
