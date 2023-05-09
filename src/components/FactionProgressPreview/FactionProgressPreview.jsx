import React from "react";
import styled from "styled-components/macro";
import { SelectionContext } from "../../contexts/SelectionProvider";
import useProgressExists from "../../hooks/useProgressExists";

export default function FactionProgressPreview() {
  const { selectedFaction } = React.useContext(SelectionContext);

  const progress = useProgressExists(selectedFaction);

  return (
    <Wrapper>
      <Header>{selectedFaction.name}</Header>
      {!progress ? (
        <p>No progress entered for this lord</p>
      ) : (
        <ProgressPreview>
          <ProgressPreviewItem>
            Status: {progress.completionStatus}
          </ProgressPreviewItem>
          <ProgressPreviewItem>
            Difficulty: {progress.campaignDifficulty}
          </ProgressPreviewItem>
          <ProgressPreviewItem>
            Date completed:{" "}
            {new Intl.DateTimeFormat("en-gb", { dateStyle: "short" }).format(
              new Date(progress.date)
            )}
          </ProgressPreviewItem>
        </ProgressPreview>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: var(--size-s);
  max-inline-size: 75vw;
`;

const Header = styled.h4`
  margin: 0;
  font-size: var(--size-l);
`;

const ProgressPreview = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--size-xs);
  padding: 0;
`;

const ProgressPreviewItem = styled.li`
  list-style: none;
`;
