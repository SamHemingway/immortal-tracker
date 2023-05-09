import React from "react";
import styled from "styled-components/macro";
import { usePopper } from "react-popper";

export default function Popover({ trigger, children }) {
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
  });

  function handlePopover() {
    popperElement.hasAttribute("data-show")
      ? popperElement.removeAttribute("data-show")
      : popperElement.setAttribute("data-show", true);
  }

  return (
    <Wrapper>
      {React.cloneElement(trigger, {
        onClick: handlePopover,
        ref: setReferenceElement,
      })}
      <PopoverContent
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        {children}
        <div
          ref={setArrowElement}
          style={styles.arrow}
        ></div>
      </PopoverContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 0;
`;

const PopoverContent = styled.div`
  background: white;
  color: black;
  min-width: 250px;
  display: none;

  &[data-show="true"] {
    display: block;
  }
`;
