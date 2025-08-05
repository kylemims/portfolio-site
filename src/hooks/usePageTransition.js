import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);

    // Short delay to allow exit animation
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match your CSS transition duration

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return isTransitioning;
};
