import React, { useEffect, useRef, useState } from 'react';
import '../style/Scroll.css';

const Scroll = () => {
  const [counts, setCounts] = useState([0, 0, 0]); // State to hold the counts
  const counterRef = useRef(null);
  const countedRef = useRef(false); // To track if the counting has occurred already

  const startCounting = () => {
    const newCounts = [...counts];
    document.querySelectorAll('.count').forEach((el, index) => {
      const countTo = parseInt(el.getAttribute('data-count'), 10);

      const duration = 2000;
      const startTime = performance.now();

      const animateCount = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * countTo);

        newCounts[index] = currentValue;
        setCounts([...newCounts]);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !countedRef.current) {
          startCounting();
          countedRef.current = true;
        }
      },
      { threshold: 0.7 } // Start counting when 70% of the element is in view
    );

    const counterElement = counterRef.current;
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => {
      if (counterElement) {
        observer.unobserve(counterElement);
      }
    };
  }, []);

  return (
    <div className="scroll">
      <ul id="counter" ref={counterRef}>
        <li>
          <span className="count percent" data-count="100">
            {counts[0]}
          </span>
        </li>
        <li>
          <span className="count percent" data-count="50">
            {counts[1]}
          </span>
        </li>
        <li>
          <span className="count percent" data-count="80">
            {counts[2]}
          </span>
        </li>
        <li>
          <span className="count percent" data-count="120">
            {counts[3]}
          </span>
        </li>
        <li>
          <span className="count percent" data-count="300">
            {counts[4]}
          </span>
        </li>
        
      </ul>
    </div>
  );
};

export default Scroll;
