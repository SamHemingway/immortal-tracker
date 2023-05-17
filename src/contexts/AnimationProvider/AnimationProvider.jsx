import React from "react";
export const AnimationContext = React.createContext();

function AnimationProvider({ children }) {
  function userPrefersReducedMotion() {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    return mediaQuery.matches;
  }
  const shouldReduceMotion = userPrefersReducedMotion();

  const animationTimings = {
    phaseOne: 0,
    phaseTwo: 2,
    phaseThree: 2.5,
  };

  const variants = {
    springUp: {
      start: {
        opacity: 0,
        height: 0,
        y: shouldReduceMotion || 50,
      },
      end: {
        opacity: 1,
        height: "auto",
        y: 0,
        transition: {
          y: {
            type: "spring",
            stiffness: 100,
          },
        },
      },
      exit: {
        x: 500,
        opacity: 0,
        transition: {
          x: {
            duration: 0.5,
          },
        },
      },
    },
    springDown: {
      start: {
        opacity: 0,
        y: shouldReduceMotion || "-50px",
      },
      finish: {
        opacity: 1,
        y: 0,

        transition: {
          duration: 1,
          delay: animationTimings.phaseTwo,
          type: "spring",
          stiffness: 100,
        },
      },
    },
    springRight: {
      start: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : 50,
      },
      end: {
        opacity: 1,
        y: 0,
      },
    },
    childrenShortStagger: {
      end: {
        transition: {
          delayChildren: 0.1,
          staggerChildren: 0.1,
        },
      },
    },
  };

  return (
    <AnimationContext.Provider
      value={{
        shouldReduceMotion,
        variants,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationProvider;
