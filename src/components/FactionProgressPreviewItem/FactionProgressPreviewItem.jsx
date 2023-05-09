import React from "react";
import styled from "styled-components/macro";
import { SelectionContext } from "../../contexts/SelectionProvider";
import { ProgressContext } from "../../contexts/ProgressProvider";

export default function FactionProgressPreviewItem() {
  const { selectedFaction } = React.useContext(SelectionContext);
  const { allProgress } = React.useContext(ProgressContext);

  return (
    <Wrapper>
      <h4>{selectedFaction.factionName}</h4>
      {!allProgress.some((entry) => entry.lordID === selectedFaction.lordID) ? (
        <p>No progress for this faction.</p>
      ) : (
        <ProgressPreview>
          <li>This faction has progress</li>
        </ProgressPreview>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-inline: 1rem;
`;

const ProgressPreview = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;
`;

const ProgressPreviewItem = styled.li`
  list-style: none;
`;
