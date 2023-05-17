import React from "react";
import ToastItem from "../ToastItem";
import { ToastContext } from "../../../contexts/ToastProvider";
import styled from "styled-components/macro";
import { motion, AnimatePresence } from "framer-motion";
import { AnimationContext } from "../../../contexts/AnimationProvider";

function ToastShelf() {
  const { toastMessages } = React.useContext(ToastContext);
  const { variants } = React.useContext(AnimationContext);

  return (
    <Wrapper
      role="region"
      aria-live="polite"
      aria-label="notifications"
    >
      <AnimatePresence>
        {toastMessages.length > 0 &&
          toastMessages.map(({ variant, message, id }) => {
            return (
              <ToastItemWrapper
                key={id}
                variants={variants.springUp}
                initial="start"
                animate="end"
                exit="exit"
              >
                <ToastItem
                  variant={variant}
                  id={id}
                >
                  {message}
                </ToastItem>
              </ToastItemWrapper>
            );
          })}
      </AnimatePresence>
    </Wrapper>
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

const ToastItemWrapper = styled(motion.li)``;
