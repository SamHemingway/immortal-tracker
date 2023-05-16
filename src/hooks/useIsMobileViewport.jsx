import React from "react";

export default function useIsMobileViewport(width) {
  const [isMobileViewport, setIsMobileViewport] = React.useState(
    window.innerWidth < width
  );

  React.useEffect(() => {
    function handleResize() {
      setIsMobileViewport(window.innerWidth < width);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return isMobileViewport;
}
