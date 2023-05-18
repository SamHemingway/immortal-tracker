import React from "react";
import styled from "styled-components/macro";
import FactionSelect from "../FactionSelect";
import RaceInfo from "../RaceInfo";
import { SelectionContext } from "../../contexts/SelectionProvider";

export default function RaceCard({ race }) {
  const { selectedRace, setSelectedRace } = React.useContext(SelectionContext);

  function handleClick(race) {
    setSelectedRace(race);
  }

  return (
    <Wrapper key={race.id}>
      <RaceButton
        onClick={() => handleClick(race)}
        race={race}
        activated={selectedRace === race}
      >
        {selectedRace.raceID !== race.raceID && (
          <FactionTitle>{race.name}</FactionTitle>
        )}
      </RaceButton>
      {selectedRace === race && <FactionSelect />}
      <RaceInfo race={race} />
    </Wrapper>
  );
}

const Wrapper = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
`;

const RaceButton = styled.button`
  background-image: ${(props) =>
    `url(../../assets/images/races/${props.race.raceID}/banner.avif)`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  border: 1px solid black;
  cursor: pointer;
  block-size: 100%;
  inline-size: 100%;
  display: flex;
  color: white;
  font-size: 1rem;
  padding: 0;
  align-items: flex-start;
  will-change: filter;
  transition: filter 500ms;

  &:focus-visible {
    outline: 2px solid var(--colour-mono-900);
    outline-offset: -2px;
  }

  &:hover {
    filter: brightness(1.2) saturate(1.2);
    transition: filter 100ms;
  }

  &:active {
    filter: brightness(0.5) saturate(0.5);
  }
`;

const FactionTitle = styled.h3`
  margin: 0;
  padding: 4px;
  background: linear-gradient(
    90deg,
    hsla(0deg, 0%, 0%, 0.7) 0%,
    hsla(0deg, 0%, 0%, 0.7) 50%,
    hsla(0deg, 0%, 0%, 0) 100%
  );
  min-inline-size: 50%;
  text-align: left;
`;
