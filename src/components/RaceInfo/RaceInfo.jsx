import React from "react";
import styled from "styled-components/macro";
import { ProgressContext } from "../../contexts/ProgressProvider";

export default function RaceInfo({ race }) {
  const { allProgress } = React.useContext(ProgressContext);

  function determineProgress({ lords }) {
    let progressArray = new Array(lords.length);
    lords.forEach((lord, index) => {
      const lordHasProgress = allProgress.some(
        (entry) => entry.lordID === lord.lordID
      );

      const lordBeingChecked = allProgress.find(
        (entry) => entry.lordID === lord.lordID
      );

      progressArray[index] = lordHasProgress
        ? lordBeingChecked.completionStatus
        : "incomplete";
    });
    return progressArray;
  }

  const raceProgress = determineProgress(race);

  return (
    <Wrapper>
      <FactionProgressBar progress={raceProgress}>
        {raceProgress.map((completed, index) => {
          if (completed === "complete") return <CompleteLord key={index} />;
          if (completed === "stopped") return <StoppedLord key={index} />;
          return <IncompleteLord key={index} />;
        })}
      </FactionProgressBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0px;
  text-transform: uppercase;
`;

const FactionProgressBar = styled.div`
  height: 0.4rem;
  gap: 4px;
  display: flex;
  padding: 0;
`;

const ProgressItem = styled.div`
  flex: 1;
`;

const CompleteLord = styled(ProgressItem)`
  background: var(--colour-state-success);
`;

const StoppedLord = styled(ProgressItem)`
  background: var(--colour-state-caution);
`;

const IncompleteLord = styled(ProgressItem)`
  background: var(--colour-state-danger);
`;
