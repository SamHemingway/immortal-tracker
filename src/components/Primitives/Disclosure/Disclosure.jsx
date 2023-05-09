import React from "react";
import styled from "styled-components/macro";
import { Disclosure as DisclosurePrimitive } from "@headlessui/react";
import Icon from "../Icon/Icon";

export default function Disclosure({ disclosureTitle, children }) {
  return (
    <Wrapper>
      <Label>
        <span>{disclosureTitle}</span>
        <Chevron id="chevronDown" />
      </Label>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled(DisclosurePrimitive)``;

const Label = styled(DisclosurePrimitive.Button)``;

const Content = styled(DisclosurePrimitive.Panel)``;

const Chevron = styled(Icon)`
  &[data-headless-state="open"] {
    transform: rotate(180deg);
  }
`;
