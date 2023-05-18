import React from "react";
import styled from "styled-components/macro";
import { ToastContext } from "../../../contexts/ToastProvider";
import VisuallyHidden from "../VisuallyHidden/MyAttempt";
import Icon from "../Icon";

export default function ToastItem({ variant, id, children }) {
  const { handleDismiss } = React.useContext(ToastContext);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleDismiss(id);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Wrapper
      toastVariant={variant}
      key={id}
    >
      <IconWrapper>
        <Icon
          size={24}
          id={variant}
          strokeWidth={2}
        />
      </IconWrapper>
      <Content>
        <VisuallyHidden>`${variant} - `</VisuallyHidden>
        {children}
      </Content>
      <CloseButton
        onClick={() => {
          handleDismiss(id);
        }}
        aria-label="Dismiss Message"
        aria-live="off"
      >
        <Icon
          size={24}
          id="close"
          strokeWidth={2}
        />
      </CloseButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--size-m);
  color: var(--colour-primary-900);
  background: ${({ toastVariant }) => {
    switch (toastVariant) {
      case "error":
        return "var(--colour-state-danger)";
      case "check":
        return "var(--colour-state-success)";
      case "warning":
        return "var(--colour-state-caution)";
      default:
        return "var(--colour-primary-300)";
    }
  }};
  max-width: 100%;
  width: 300px;
  box-shadow: var(--shadow-strong);
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  padding: 16px;
  padding-right: 0px;

  & svg {
    display: block;
  }
`;

const Content = styled.p`
  flex: 1;
  padding: 12px 0px;
  font-size: 1rem;
  color: var(--colour-primary-900);
`;

const CloseButton = styled.button`
  flex-shrink: 0;
  border: none;
  background: transparent;
  padding: 16px;
  cursor: pointer;
  color: white;
`;
