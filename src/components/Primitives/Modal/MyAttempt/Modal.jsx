import React from "react";
import styled from "styled-components/macro";
import Portal from "../Portal";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import useKeydown from "../../../hooks/useKeydown";
import VisuallyHidden from "../VisuallyHidden";

export default function Modal({
  modalOpen,
  setModalOpen,
  modalTitle,
  icon = null,
  children,
}) {
  function handleEscKey() {
    setModalOpen(false);
  }

  useKeydown("escape", handleEscKey);

  return (
    modalOpen && (
      <Portal>
        <FocusLock returnFocus>
          <Wrapper>
            <Backdrop
              onClick={() => {
                // Can't indentify why this event triggers when any descendent in the DOM is also clicked.
                // Preventing me from implementing a click outside the modal content closes the modal.
              }}
            >
              <DialogueWrapper>
                <CloseButton
                  onClick={() => {
                    setModalOpen(false);
                  }}
                >
                  <VisuallyHidden>Close Dialogue</VisuallyHidden>
                  <Close size={48} />
                </CloseButton>
                {icon}
                <Dialogue
                  role="dialog"
                  aria-modal
                  aria-label={modalTitle}
                >
                  {children}
                </Dialogue>
              </DialogueWrapper>
            </Backdrop>
          </Wrapper>
        </FocusLock>
      </Portal>
    )
  );
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  isolation: isolate;
`;

const DialogueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: hsl(0deg 0% 0% / 0.75);
  display: grid;
  place-items: center;
`;

const Dialogue = styled.div`
  background: white;
  padding: 32px;
  max-block-size: 80vh;
  max-inline-size: 800px;
  overflow-y: scroll;
  overscroll-behavior: contain;
`;

const CloseButton = styled.button`
  color: white;
  cursor: pointer;
  background: none;
  border: none;
  align-self: flex-end;
`;
