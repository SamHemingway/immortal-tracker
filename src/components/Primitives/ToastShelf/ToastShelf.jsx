import React from "react";
import ToastItem from "../ToastItem";
import { ToastContext } from "../../../contexts/ToastProvider";
import styled from "styled-components/macro";

function ToastShelf() {
  const { toastMessages } = React.useContext(ToastContext);

  return (
    toastMessages.length > 0 && (
      <Wrapper
        role="region"
        aria-live="polite"
        aria-label="notifications"
      >
        {toastMessages.map(({ variant, message, id }) => {
          return (
            <ToastItemWrapper key={id}>
              <ToastItem
                variant={variant}
                id={id}
              >
                {message}
              </ToastItem>
            </ToastItemWrapper>
          );
        })}
      </Wrapper>
    )
  );
}

export default React.memo(ToastShelf);

const Wrapper = styled.ol`
  position: fixed;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  list-style-type: none;
`;

const ToastItemWrapper = styled.li``;
