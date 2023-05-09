import React from "react";
import styled from "styled-components/macro";

export default function InputLabel({ label, ...delegated }) {
  return <Label {...delegated}>{label}</Label>;
}

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 0.8125rem;
  font-weight: bold;
  margin-block-end: 0.5em;
  pointer-events: none;
`;
