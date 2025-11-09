import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

// ✅ Counter animation component
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let currentCount = 0;
          const increment = end / (duration / 10);

          const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount < end) {
              setCount(Math.ceil(currentCount));
            } else {
              setCount(end);
              clearInterval(timer);
              observer.disconnect();
            }
          }, 10);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

// ✅ Themed Counter Section
const CounterSection = () => {
  const { theme } = useTheme();

  const borderStyle =
    theme === "dark"
      ? "border-[#667eea]/30 shadow-gray-950"
      : "border-violet-400/80 shadow-violet-200/50";

  const dividerStyle =
    theme === "dark" ? "divide-[#667eea]/30" : "divide-violet-300/80";

  const textStyle =
    theme === "dark" ? "text-gray-300" : "text-gray-700";

  return (
    <section
      id="about"
      className="counter-section transition-colors duration-500"
    >
      <div
        className={`container mx-auto max-w-7xl rounded-3xl border-1 shadow-md ${borderStyle}`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x py-2 md:py-4 ${dividerStyle}`}
        >
          {/* Counter Item 1 */}
          <div className="p-2 flex flex-col justify-center">
            <h3 className="text-5xl font-extrabold text-violet-700 mb-2">
              <Counter end={2} />+
            </h3>
            <p className={`text-sm md:text-base ${textStyle}`}>
              Years Experience
            </p>
          </div>

          {/* Counter Item 2 */}
          <div className="p-2 flex flex-col justify-center">
            <h3 className="text-5xl font-extrabold text-violet-700 mb-2">
              <Counter end={6} />+
            </h3>
            <p className={`text-sm md:text-base ${textStyle}`}>
              Projects Contribution
            </p>
          </div>

          {/* Counter Item 3 */}
          <div className="p-2 flex flex-col justify-center">
            <h3 className="text-5xl font-extrabold text-violet-700 mb-2">
              <Counter end={12} />
            </h3>
            <p className={`text-sm md:text-base ${textStyle}`}>
              Public Repos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
