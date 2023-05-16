import React from "react";
import styled from "styled-components/macro";
import Icon from "../Icon/Icon";
import InputLabel from "../InputLabel/InputLabel";

export default function Select({
  label,
  value,
  onChange,
  children,
  ...delegated
}) {
  if (!label) {
    throw new Error(
      `No label prop provided for Select component. This is a required prop for accessibility reasons.`
    );
  }
  function getDisplayedValue(value, children) {
    const childArray = React.Children.toArray(children);
    const selectedChild = childArray.find(
      (child) => child.props.value === value
    );

    return selectedChild.props.children;
  }

  const inputID = React.useId(null);

  const selectedItem = getDisplayedValue(value, children);

  return (
    <>
      <InputLabel
        htmlFor={inputID}
        label={label}
      ></InputLabel>
      <Wrapper>
        <NativeSelect
          value={value}
          onChange={onChange}
          id={inputID}
        >
          {children}
        </NativeSelect>
        <Presentation {...delegated}>
          <Text>{selectedItem}</Text>
          <Chevron
            id="chevronDown"
            strokeWidth={2}
          />
        </Presentation>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  position: relative;
  inline-size: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  inline-size: 100%;
  block-size: 100%;
  opacity: 0;
  cursor: pointer;
  appearance: none;
`;

const Presentation = styled.div`
  background: var(--colour-primary-100);
  color: var(--colour-primary-700);
  padding: 12px 16px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  gap: 8px;
  pointer-events: none;
  transition: color 500ms;

  ${NativeSelect}:focus-visible + & {
    outline: 2px solid;
    outline-color: ${({ colour }) => colour ?? "currentColor"};
    color: var(--colour-primary-900);
    transition: outline 100ms, color 100ms;
  }

  ${NativeSelect}:hover + & {
    color: var(--colour-primary-900);
    transition: color 100ms;
  }
`;

const Text = styled.p`
  margin-block-start: 2px;
  margin-block-end: 0;
`;

const Chevron = styled(Icon)`
  margin-inline-end: -6px;
`;
