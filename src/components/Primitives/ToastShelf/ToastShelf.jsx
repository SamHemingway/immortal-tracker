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
    <AnimatePresence>
      {toastMessages.length > 0 && (
        <Wrapper
          role="region"
          aria-live="assertive"
          aria-label="Notification"
          variants={variants.springUp}
          exit="exit"
        >
          <AnimatePresence>
            {toastMessages.map(({ variant, message, id }) => (
              <ToastItemWrapper
                key={id}
                variants={variants.springUp}
                initial="start"
                animate="end"
                exit="exit"
              >
                <FixExitAnimations>
                  <ToastItem
                    variant={variant}
                    id={id}
                  >
                    {message}
                  </ToastItem>
                </FixExitAnimations>
              </ToastItemWrapper>
            ))}
          </AnimatePresence>
        </Wrapper>
      )}
    </AnimatePresence>
  );
}

export default React.memo(ToastShelf);

const Wrapper = styled(motion.ol)`
  position: fixed;
  right: 0;
  bottom: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const ToastItemWrapper = styled(motion.li)``;

const FixExitAnimations = styled.div`
  padding-inline-end: var(--size-m);
  padding-block-end: var(--size-m);
`;
