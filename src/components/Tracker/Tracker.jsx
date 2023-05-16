import React from "react";
import styled from "styled-components/macro";
import { RACES } from "../../assets/constants";
import RaceCard from "../RaceCard";
import ToastShelf from "../Primitives/ToastShelf/";

export default function Tracker() {
  return (
    <Wrapper>
      {RACES.map((race) => (
        <RaceCard
          race={race}
          key={race.raceID}
        />
      ))}
      <ToastShelf />
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  grid-auto-rows: 100px;
  padding: var(--size-m);
  gap: 1rem;
  flex: 1;
  margin-block: 50px;
`;
