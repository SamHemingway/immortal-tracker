import React from "react";
export const AnimationContext = React.createContext();

function AnimationProvider({ children }) {
  function userPrefersReducedMotion() {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    return mediaQuery.matches;
  }
  const shouldReduceMotion = userPrefersReducedMotion();

  const variants = {
    springUp: {
      start: {
        opacity: 0,
        height: 0,
      },
      end: {
        opacity: 1,
        height: "auto",
        transition: {
          height: {
            type: "spring",
            stiffness: 100,
          },
        },
      },
      exit: {
        opacity: 0,
        height: 0,
      },
    },
    springDown: {
      start: {
        opacity: 0,
        y: 10,
      },
      end: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: 10,
      },
    },
    portraitFade: {
      start: {
        opacity: 0,
      },
      end: {
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: 0.2,
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 0,
        },
      },
    },
    bannerFade: {
      start: {
        backgroundColor: "hsla(360deg, 0%, 0%, 0)",
        backdropFilter: "blur(0px)",
      },
      end: {
        backgroundColor: "hsla(360deg, 0%, 0%, 0.7)",
        backdropFilter: "blur(5px)",
        transition: {
          duration: 0.1,
        },
      },
      exit: {
        backgroundColor: "hsla(360deg, 0%, 0%, 0)",
        backdropFilter: "blur(0px)",
        delay: 0.2,
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
