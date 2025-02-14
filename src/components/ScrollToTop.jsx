import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling
    };

    // Scroll when the route changes
    handleScrollToTop();

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll("a");
    navLinks.forEach((link) => link.addEventListener("click", handleScrollToTop));

    return () => {
      // Cleanup event listeners when component unmounts
      navLinks.forEach((link) => link.removeEventListener("click", handleScrollToTop));
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
