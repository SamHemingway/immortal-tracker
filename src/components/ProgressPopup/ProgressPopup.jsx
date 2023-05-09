import React from "react";
import styled from "styled-components/macro";
import ProgressInput from "../ProgressInput";
import * as Popover from "@radix-ui/react-popover";
import { X as CloseIcon } from "react-feather";

export default function ProgressPopup({ setPopupOpen, trigger }) {
  return (
    <Root>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Content collisionPadding={16}>
          <CloseButtonWrapper>
            <CloseIcon />
          </CloseButtonWrapper>
          <Arrow
            width={20}
            height={10}
          />
          <ProgressInput setInputOpen={setPopupOpen} />
        </Content>
      </Popover.Portal>
    </Root>
  );
}

const Root = styled(Popover.Root)`
  [data-radix-popper-content-wrapper] {
    min-width: min-content !important;
  }
`;

const Content = styled(Popover.Content)`
  background: white;
  box-shadow: hsl(206 22% 7% / 100%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;

  &[data-side="top"] {
    position: relative;
    top: -80px;
  }
`;

const CloseButtonWrapper = styled(Popover.Close)`
  background: none;
  border: none;
  cursor: pointer;
`;

const Arrow = styled(Popover.Arrow)`
  fill: white;
`;
