import React from "react";
import styled from "styled-components/macro";
import * as Accordion from "@radix-ui/react-accordion";
import Icon from "../Icon/Icon";

export function AccordionWrapper({ children, ...delegated }) {
  return (
    <Wrapper
      type="single"
      collapsible
      {...delegated}
    >
      {children}
    </Wrapper>
  );
}

export function AccordionItem({ title, value, children }) {
  return (
    <Item value={value}>
      <Title>
        <TitleContent>
          {title}
          <Chevron
            id="chevronDown"
            strokeWidth={2}
          />
        </TitleContent>
      </Title>
      <Content>{children}</Content>
    </Item>
  );
}

const Wrapper = styled(Accordion.Root)``;

const Item = styled(Accordion.Item)`
  margin-block-start: 1px;
`;

const Title = styled(Accordion.Header)`
  all: unset;
  display: flex;
`;

const Chevron = styled(Icon)`
  transition: transform 300ms;
`;

const TitleContent = styled(Accordion.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  flex-basis: 100%;
  justify-content: space-between;
  border: none;
  background: var(--colour-primary-100);
  color: var(--colour-primary-700);
  padding-inline: var(--size-m);
  padding-block: var(--size-m);
  transition: color 500ms, font-weight 500ms;
  border: solid 1px var(--colour-primary-100);

  &:hover,
  :focus {
    transition: color 100ms;
    color: var(--colour-primary-900);
    cursor: pointer;
  }

  &:focus-visible {
    outline: 1px solid var(--colour-primary-600);
  }

  &[data-state="open"] {
    font-weight: var(--font-weight-bold);
    color: var(--colour-primary-900);
  }

  &[data-state="open"] > ${Chevron} {
    transform: rotate(180deg);
  }
`;

const Content = styled(Accordion.Content)`
  background: var(--colour-primary-400);
  padding: var(--size-m);
  border-right: solid 1px var(--colour-primary-100);
  border-left: solid 1px var(--colour-primary-100);
`;
