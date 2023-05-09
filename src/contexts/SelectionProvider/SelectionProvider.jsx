import React from "react";

export const SelectionContext = React.createContext();

export default function SelectionProvider({ children }) {
  const [selectedRace, setSelectedRace] = React.useState("");
  const [selectedFaction, setSelectedFaction] = React.useState("");

  return (
    <SelectionContext.Provider
      value={{
        selectedRace,
        setSelectedRace,
        selectedFaction,
        setSelectedFaction,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
}
