import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  // State to track the scroll position
  const [isVisible, setIsVisible] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // Show button after scrolling 200px
      } else {
        setIsVisible(false); // Hide button when scroll position is less than 200px
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Conditionally render the button based on isVisible state
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-14 right-5 z-50 bg-yellow-500 text-white w-8 h-8 rounded-full shadow-lg cursor-pointer"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
