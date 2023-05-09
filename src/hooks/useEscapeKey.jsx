import React from "react";

export default function useEscapeKey(handleKeydown) {
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });
}
