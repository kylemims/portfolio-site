import { usePageTransition } from "../hooks/usePageTransition";
import "./PageTransition.css";

export const PageTransition = ({ children }) => {
  const isTransitioning = usePageTransition();

  return (
    <div className={`page-transition ${isTransitioning ? "page-enter" : "page-enter-active"}`}>
      {children}
    </div>
  );
};
