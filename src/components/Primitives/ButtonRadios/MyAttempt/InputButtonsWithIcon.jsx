import React from "react";
import styled from "styled-components/macro";

export default function InputButtonsWithIcon({
  state,
  setState,
  name,
  options,
  ...delegated
}) {
  return (
    <Wrapper>
      {options.map((option) => {
        const id = React.useId(null);
        return (
          <React.Fragment key={option.value}>
            <HiddenRadio
              type="radio"
              name={name}
              id={id}
              value={option.value}
              checked={state[name] === option.value}
              onChange={(event) => {
                setState({ ...state, [name]: event.target.value });
              }}
            />
            <Label
              htmlFor={id}
              {...delegated}
            >
              {option.icon}
              {option.label}
            </Label>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  border: 2px solid hsla(360deg, 0%, 0%, 0.5);
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  padding: 1em;
  text-align: center;
  cursor: pointer;
  flex: 1;
  &:not(:last-of-type) {
    border-inline-end: 2px solid hsla(360deg, 0%, 0%, 0.5);
  }
`;

const HiddenRadio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  inline-size: 0;

  &:checked + label {
    background: hsla(360deg, 0%, 0%, 0.2);
  }

  &:hover + label {
    background: hsla(360deg, 0%, 0%, 0.1);
  }
`;
