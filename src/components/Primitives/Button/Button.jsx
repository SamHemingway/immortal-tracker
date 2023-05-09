import React from "react";
import styled from "styled-components";

const SIZES = {
  small: {
    "--font-size": `1rem`,
    "--border-radius": `2px`,
    "--padding": `4px 12px`,
  },
  medium: {
    "--font-size": `1.125rem`,
    "--border-radius": `2px`,
    "--padding": `12px 20px`,
  },
  large: {
    "--font-size": `1.3125rem`,
    "--border-radius": `4px`,
    "--padding": `16px 32px`,
  },
};

const Button = ({ variant, size, children, colour, ...delegated }) => {
  const sizeStyles = SIZES[size];

  if (variant === "fill")
    return (
      <FillButton
        style={sizeStyles}
        colour={colour}
        {...delegated}
      >
        {children}
      </FillButton>
    );
  if (variant === "outline")
    return (
      <OutlineButton
        style={sizeStyles}
        colour={colour}
        {...delegated}
      >
        {children}
      </OutlineButton>
    );
  if (variant === "ghost")
    return (
      <GhostButton
        style={sizeStyles}
        colour={colour}
        {...delegated}
      >
        {children}
      </GhostButton>
    );

  throw new Error(
    `unrecognised Button variant: ${variant}. Acceptable options include "fill", "outline", & "ghost".`
  );
};

const Base = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  font-size: var(--font-size);
  padding: var(--padding);
  border: 2px solid transparent;
  font-weight: var(--font-weight-bold);
  transition: filter 500ms;
`;

const FillButton = styled(Base)`
  background: ${({ colour }) => colour};
  color: var(--colour-primary-200);

  &:hover {
    filter: brightness(120%) saturate(120%);
  }

  &:focus {
    outline: 2px solid ${({ colour }) => colour ?? "currentColor"};
    outline-offset: 2px;
    filter: brightness(120%) saturate(120%);
  }
`;

const OutlineButton = styled(Base)`
  background: transparent;
  border: 2px solid var(--colour-mono-700);
  color: var(--colour-mono-700);

  &:hover {
    background: var(--colour-mono-700);
    color: var(--colour-mono-200);
  }
`;

const GhostButton = styled(Base)`
  background: transparent;
  border: none;
  color: var(--colour-mono-700);

  &:hover {
    background: var(--colour-mono-300);
    color: var(--colour-mono-900);
  }
`;

export default Button;
