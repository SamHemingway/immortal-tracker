import React from "react";
import useLocalStorageState from "use-local-storage-state";

export const ProgressContext = React.createContext();

export default function ProgressProvider({ children }) {
  const [allProgress, setAllProgress] = useLocalStorageState("progress", {
    defaultValue: [],
  });

  const [userPrefs, setUserPrefs] = React.useState({
    difficulty: "legendary",
    alwaysExpand: false,
  });

  return (
    <ProgressContext.Provider
      value={{
        allProgress,
        setAllProgress,
        userPrefs,
        setUserPrefs,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
