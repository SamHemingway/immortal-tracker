import React from "react";
import styled from "styled-components/macro";
import { X as Close } from "react-feather";
import VisuallyHidden from "../VisuallyHidden/MyAttempt";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  isOpen,
  setIsOpen,
  title,
  children,
  ...delegated
}) {
  return (
    isOpen && (
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Backdrop
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <ContentWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
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
    )
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.75);
`;

const ContentWrapper = styled(motion.div)`
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
  inline-size: clamp(300px, 60vw, 500px);
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
