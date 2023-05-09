import React from "react";
import styled from "styled-components/macro";
import { RadioGroup } from "@headlessui/react";
import InputLabel from "../InputLabel";

export default function ButtonRadio({
  state,
  setState,
  name,
  entries,
  ...delegated
}) {
  const cleanName = name
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index === 0) return word.match(/\b[\w']+\b/g);
      return `${word[0].toUpperCase()}${word.slice(1)}`.match(/\b[\w']+\b/g);
    })
    .join("");

  const inputID = React.useId(null);

  return (
    <>
      <InputLabel
        label={name}
        htmlFor={inputID}
      />
      <Wrapper
        defaultValue={state[cleanName]}
        onChange={(value) => {
          setState({ ...state, [cleanName]: value });
        }}
        id={inputID}
        aria-label={name}
      >
        <OptionsWrapper {...delegated}>
          {entries.map((entry, index) => {
            return (
              <React.Fragment key={index}>
                <Option
                  value={entry.value}
                  checked
                  {...delegated}
                >
                  {entry.icon}
                  <span aria-hidden>{entry.label ?? null}</span>
                </Option>
              </React.Fragment>
            );
          })}
        </OptionsWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled(RadioGroup)``;

const OptionsWrapper = styled.div`
  display: flex;
  isolation: isolate;
`;

const Option = styled(RadioGroup.Option)`
  display: flex;
  flex-direction: column;
  gap: var(--size-xs);
  align-items: center;
  padding: var(--size-xs);
  text-align: center;
  cursor: pointer;
  flex: 1;
  background: var(--colour-primary-100);
  color: var(--colour-primary-700);
  text-transform: uppercase;
  font-size: var(--size-s);
  transition: color 500ms, font-weight 500ms;

  &[data-headlessui-state~="checked"] {
    background: var(--colour-primary-400);
    color: var(--colour-primary-900);
    font-weight: var(--font-weight-bold);
    z-index: 1;
    transition: font-weight 100ms;
  }

  &:hover {
    color: var(--colour-primary-900);
    transition: color 100ms;
  }

  &:focus-visible {
    outline: 2px solid;
    outline-color: ${({ colour }) => colour};
    color: var(--colour-primary-900);
    transition: background 100ms, color 100ms;
  }
`;
