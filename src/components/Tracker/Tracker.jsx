import React from "react";
import styled from "styled-components/macro";
import { RACES } from "../../assets/constants";
import RaceCard from "../RaceCard";

export default function Tracker() {
  return (
    <Wrapper>
      {RACES.map((race) => (
        <RaceCard
          race={race}
          key={race.raceID}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  font-size: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  grid-auto-rows: 100px;
  margin: 0;
  padding: 0;
  gap: 2rem 1rem;
  flex: 1;
  margin-block: 60px;
`;
