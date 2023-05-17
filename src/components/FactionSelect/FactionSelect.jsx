import React from "react";
import styled from "styled-components/macro";
import { SelectionContext } from "../../contexts/SelectionProvider";
import { ProgressContext } from "../../contexts/ProgressProvider";
import Modal from "../Primitives/Modal";
import ProgressInput from "../ProgressInput";
import Tooltip from "../Primitives/Tooltip";
import FactionProgressPreview from "../FactionProgressPreview";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

export default function FactionSelect() {
  const { selectedRace, selectedFaction, setSelectedFaction } =
    React.useContext(SelectionContext);
  const { variants } = React.useContext(AnimationContext);

  const { allProgress, setAllProgress } = React.useContext(ProgressContext);

  const [inputOpen, setInputOpen] = React.useState(null);

  function factionProgressSubmit(status) {
    if (allProgress.some((entry) => entry.lordID === status.lordID)) {
      const nextAllProgress = [...allProgress].filter(
        (entry) => entry.lordID !== status.lordID
      );
      setAllProgress([...nextAllProgress, status]);
    } else {
      setAllProgress([...allProgress, status]);
    }
  }

  return (
    <Wrapper>
      {selectedRace.lords.map((entry, index) => {
        return (
          <FactionChoice
            key={index}
            variants={variants}
            initial="start"
            animate="end"
          >
            <Tooltip
              trigger={
                <FactionButton
                  onClick={() => {
                    setInputOpen(!inputOpen);
                  }}
                  onMouseEnter={() => {
                    setSelectedFaction(entry);
                  }}
                  onFocus={() => {
                    setSelectedFaction(entry);
                  }}
                >
                  <Banner
                    src={`../../assets/images/races/${selectedRace.raceID}/${entry.lordID}/portrait.avif`}
                    alt={entry.factionName}
                    colour={selectedRace.colour}
                  />
                </FactionButton>
              }
              background="var(--colour-primary-400)"
              foreground="var(--colour-mono-900);"
            >
              <FactionProgressPreview />
            </Tooltip>
          </FactionChoice>
        );
      })}
      {inputOpen && (
        <Modal
          isOpen={inputOpen}
          setIsOpen={setInputOpen}
          title={`Enter your progress for ${selectedFaction.factionName}`}
          style={{
            marginTop: "100px",
            paddingTop: "65px",
            boxShadow: `0px 0px 10px ${selectedRace.colour}`,
          }}
        >
          <ProgressInput
            setInputOpen={setInputOpen}
            onSubmit={factionProgressSubmit}
          />
        </Modal>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  color: red;
  margin-block-start: auto;
  display: flex;
  justify-content: space-around;
  align-items: end;
  background: hsla(360deg, 0%, 0%, 0.7);
  position: absolute;
  inset: 0;
  padding-inline: 0;
`;

const FactionChoice = styled(motion.li)`
  list-style-type: none;
`;

const FactionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }
`;

const Banner = styled.img`
  inline-size: 100%;
  max-inline-size: 60px;
  flex: 1;
  border: 1px solid hsla(360deg, 100%, 100%, 0.3);

  ${FactionButton}:focus-visible & {
    outline: 5px solid;
    outline-color: ${({ colour }) => colour};
  }
`;
