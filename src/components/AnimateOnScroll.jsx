
import React, { useEffect, useRef, useState } from 'react';

// Reusable AnimateOnScroll wrapper component
const AnimateOnScroll = ({ animationClass, children }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? `animate__animated ${animationClass}` : 'opacity-0'}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
