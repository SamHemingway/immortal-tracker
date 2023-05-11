import React from "react";
import styled from "styled-components/macro";
import Modal from "../Primitives/Modal";
import { AccordionWrapper, AccordionItem } from "../Primitives/Accordion";

export default function SettingsModal({ isOpen, setIsOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="FAQs and Credits"
    >
      <Wrapper>
        <ModalTitle>FAQs & Credits</ModalTitle>
        <AccordionWrapper defaultValue="who">
          <AccordionItem
            title="Who built this?"
            value="who"
          >
            <p>
              <a href="https://www.samhemingway.dev">This dude</a> as a project
              for his portfolio. He's looking for his first junior web dev job.
              Hire him!
            </p>
          </AccordionItem>
          <AccordionItem
            title="Can I export my progress?"
            value="progress"
          >
            <p>
              Unfortunately, no. Your progress is stored using your browsers
              local storage.
              <strong>
                This means that if you clear your browser cache, you will lose
                all of your entered progress!
              </strong>
            </p>
          </AccordionItem>
          <AccordionItem
            title="I found a bug!"
            value="bug"
          >
            <p>
              If you find a bug, please{" "}
              <a href="https://github.com/SamHemingway/immortal-tracker/issues">
                let me know here!
              </a>
            </p>
          </AccordionItem>
          <AccordionItem
            title="Can I see the source code?"
            value="source"
          >
            <p>
              Go nuts, you have my full permission.{" "}
              <a href="https://github.com/SamHemingway/immortal-tracker">
                Here's the source code
              </a>
              , feel free to fork.
            </p>
          </AccordionItem>
          <AccordionItem
            title="Disclaimer/legal stuff"
            value="disclaimer"
          >
            <p>
              Disclaimer: All images featured on this website are the property
              of Creative Assembly, the creators of Total War: Warhammer III.
              The use of these images is for informational and non-commercial
              purposes only, and they are not intended to infringe upon the
              rights of Creative Assembly or Total War: Warhammer III. All
              trademarks, logos, and copyrights are the property of their
              respective owners. If you are the owner of any content on this
              site and would like it removed, please{" "}
              <a href="mailto:hello@samhemingway.dev">contact me</a> and I will
              promptly comply.
            </p>
          </AccordionItem>
        </AccordionWrapper>
        {/* 
          
          <Question
            disclosureTitle="Disclaimer"
            as="li"
          >
            <p>
              Disclaimer: All images featured on this website are the property
              of Creative Assembly, the creators of Total War: Warhammer III.
              The use of these images is for informational and non-commercial
              purposes only, and they are not intended to infringe upon the
              rights of Creative Assembly or Total War: Warhammer III. All
              trademarks, logos, and copyrights are the property of their
              respective owners. If you are the owner of any content on this
              site and would like it removed, please{" "}
              <a href="mailto:hello@samhemingway.dev">contact me</a> and I will
              promptly comply.
            </p>
          </Question>
        </FAQList> */}
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
