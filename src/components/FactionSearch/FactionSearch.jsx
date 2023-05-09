import React from "react";
import styled from "styled-components/macro";
import VisuallyHidden from "../Primitives/VisuallyHidden/MyAttempt/VisuallyHidden";
import Icon from "../Primitives/Icon";

export default function FactionSearch() {
  const [query, setQuery] = React.useState("");

  return (
    <Wrapper>
      <Label>
        <Icon
          id="search"
          label="Search"
          strokeWidth={2}
        />
        <VisuallyHidden>Search...</VisuallyHidden>
      </Label>
      <Input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.label``;

const Input = styled.input`
  color: black;
`;
