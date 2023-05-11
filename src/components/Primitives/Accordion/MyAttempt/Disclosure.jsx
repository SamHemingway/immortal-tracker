import React from "react";
import styled from "styled-components/macro";
import { ChevronDown, ChevronUp } from "react-feather";

export default function Disclosure({
  children,
  sectionOpen,
  setSectionOpen,
  label,
}) {
  return (
    <Wrapper>
      <Label
        onClick={(event) => {
          event.preventDefault();
          const nextSectionOpen = !sectionOpen;
          setSectionOpen(nextSectionOpen);
        }}
      >
        {sectionOpen ? <ChevronUp /> : <ChevronDown />}
        {label}
      </Label>
      {sectionOpen && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Label = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  display: flex;
  align-items: end;
  gap: 0.25em;
  cursor: pointer;
  inline-size: 100%;
  font-weight: bold;
  margin-block-end: 16px;
`;

const ChildrenWrapper = styled.div`
  margin-block-end: 16px;
`;
