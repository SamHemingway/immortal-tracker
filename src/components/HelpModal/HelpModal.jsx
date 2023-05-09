import React from "react";
import styled from "styled-components/macro";
import Modal from "../Primitives/Modal";
import Disclosure from "../Primitives/Disclosure";

export default function SettingsModal({ isOpen, setIsOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="FAQs and Credits"
    >
      <Wrapper>
        <ModalTitle>FAQs & Credits</ModalTitle>
        <FAQList>
          <Question
            disclosureTitle={"How is my progress stored?"}
            as="li"
          >
            <p>
              Using your browsers local storage.
              <strong>
                This means that if you clear your browser cache, you will lose
                all of your entered progress!
              </strong>
            </p>
            <p>
              I deliberately chose not to implement accounts/log-ins; honestly,
              I didn't feel like anyone would actually want to do so (I know I
              wouldn't)!
            </p>
          </Question>
        </FAQList>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ModalTitle = styled.h2`
  text-align: center;
  margin-block: 0;
  color: var(--colour-primary-900);
`;

const FAQList = styled.ul``;

const Question = styled(Disclosure)``;
