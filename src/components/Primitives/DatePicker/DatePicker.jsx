import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputLabel from "../InputLabel";
import styled from "styled-components";

export default function DatePicker({ ...delegated }) {
  return (
    <>
      <InputLabel label="Date" />
      <Picker {...delegated} />
    </>
  );
}

const Picker = styled(ReactDatePicker)`
  background: var(--colour-primary-100);
  color: var(--colour-primary-700);
  padding: 12px 16px;
  font-size: 1rem;
  border: none;
  display: block;
  padding-right: 0;
  transition: color 500ms;

  &:hover {
    color: var(--colour-primary-900);
    transition: color 100ms;
  }

  &:focus {
    outline: 2px solid;
    outline-color: ${({ colour }) => colour};
    color: var(--colour-primary-900);
    transition: outline 100ms, color 100ms;
  }
`;
