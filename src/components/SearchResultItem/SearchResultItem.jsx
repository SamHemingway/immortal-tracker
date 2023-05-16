import React from "react";
import styled from "styled-components/macro";
import { RACES } from "../../assets/constants";

export default function SearchResultItem({ data }) {
  const race = RACES.find((race) =>
    race.lords.some((lord) => lord.name === data.name)
  ).raceID;

  return (
    <Wrapper>
      <LordPortrait
        src={`../../assets/images/races/${race}/${data.lordID}/portrait.avif`}
      />
      {data.name}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--size-s);
`;

const LordPortrait = styled.img`
  max-inline-size: 40px;
`;
