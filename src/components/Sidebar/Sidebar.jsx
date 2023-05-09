import React from "react";
import styled from "styled-components/macro";
import { ProgressContext } from "../../contexts/ProgressProvider";
import { RACES } from "../../assets/constants";

export default function Sidebar() {
  const { allProgress } = React.useContext(ProgressContext);

  const numOfRaces = React.useCallback(
    RACES.reduce((total, next) => {
      total += next.lords.length;
      return total;
    }, 0),
    [RACES]
  );

  return (
    <>
      <Wrapper>
        {!allProgress[0] ? (
          <NoProgress />
        ) : (
          <>
            <Header>Progress Overview</Header>
            <ul>
              {allProgress.map((entry) => {
                return <li>{entry.lordID}</li>;
              })}
            </ul>
            <Header>Stats</Header>
            <ul>
              <li>
                Factions completed: {allProgress.length} out of {numOfRaces}.
              </li>
            </ul>
          </>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.aside`
  flex: 0 1 250px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: -1;
  display: none;

  @media (min-width: 40rem) {
    display: revert;
  }
`;

const Header = styled.h2``;

function NoProgress() {
  return <Header>Your progress will show up here!</Header>;
}
