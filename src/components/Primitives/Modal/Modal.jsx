import React from "react";
import styled from "styled-components/macro";
import { X as Close } from "react-feather";
import VisuallyHidden from "../VisuallyHidden/MyAttempt";
import { Dialog } from "@headlessui/react";

export default function Modal({
  isOpen,
  setIsOpen,
  title,
  children,
  ...delegated
}) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Backdrop />
      <ContentWrapper>
        <Content {...delegated}>
          <CloseButton onClick={() => setIsOpen(false)}>
            <Close size={48} />
            <VisuallyHidden>Close Dialog</VisuallyHidden>
          </CloseButton>
          <ModalTitle>
            <VisuallyHidden>{title}</VisuallyHidden>
          </ModalTitle>
          {children}
        </Content>
      </ContentWrapper>
    </Dialog>
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.75);
`;

const ContentWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
`;

const Content = styled(Dialog.Panel)`
  position: relative;
  background: var(--colour-primary-200);
  padding: 32px;
  color: var(--colour-mono-700);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: -5px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
`;

const ModalTitle = styled(Dialog.Title)`
  display: none;
`;