import React from "react";
import styled from "styled-components/macro";
import DatePicker from "../Primitives/DatePicker";
import { SelectionContext } from "../../contexts/SelectionProvider";
import useProgressExists from "../../hooks/useProgressExists";
import ButtonRadio from "../Primitives/ButtonRadios";
import Select from "../Primitives/Select";
import Icon from "../Primitives/Icon";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";
import Button from "../Primitives/Button";

export default function ProgressInput({ setInputOpen, onSubmit }) {
  const { selectedFaction, selectedRace } = React.useContext(SelectionContext);
  const existingProgress = useProgressExists(selectedFaction);

  const initialState = existingProgress || {
    raceName: selectedRace.raceID,
    type: selectedRace.type,
    lordID: selectedFaction?.lordID,
    lordName: selectedFaction?.name,
    enjoyedTheCampaign: "yes",
    completionStatus: "complete",
    date: new Date(),
    campaignDifficulty: "legendary",
    victoryType: undefined,
  };

  const [status, setStatus] = React.useState(initialState);

  const formID = React.useId(null);

  useKeyboardShortcut("Control", "Enter", () => {
    document
      .getElementById(formID)
      .dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  });

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(status);
    console.log(typeof status.date);

    setInputOpen(false);
  }

  console.log(`Race colour: ${selectedRace.colour}`);

  return (
    <Wrapper>
      <FactionImage
        src={`../../assets/images/races/${selectedRace.raceID}/${selectedFaction.lordID}/portrait.avif`}
        colour={selectedRace.colour}
      />
      <FactionName>{selectedFaction.name}</FactionName>
      <StatusForm
        onSubmit={handleSubmit}
        id={formID}
      >
        <QuestionWrapper>
          <ButtonRadio
            entries={[
              {
                icon: (
                  <Icon
                    strokeWidth={2}
                    id="check"
                    label="Complete"
                  />
                ),
                label: "Complete",
                value: "complete",
              },
              {
                icon: (
                  <Icon
                    strokeWidth={2}
                    id="cross"
                    label="Stopped"
                  />
                ),
                label: "Stopped",
                value: "stopped",
              },
            ]}
            name="Completion Status"
            state={status}
            setState={setStatus}
            colour={selectedRace.colour}
          />
        </QuestionWrapper>

        <QuestionWrapper>
          <ButtonRadio
            entries={[
              {
                icon: (
                  <Icon
                    strokeWidth={2}
                    id="smile"
                    label="Yes"
                  />
                ),
                label: "Yes",
                value: "yes",
              },
              {
                icon: (
                  <Icon
                    strokeWidth={2}
                    id="unsure"
                    label="No"
                  />
                ),
                label: "No",
                value: "no",
              },
            ]}
            name="Enjoyed the campaign?"
            state={status}
            setState={setStatus}
            colour={selectedRace.colour}
          />
        </QuestionWrapper>

        <QuestionWrapper>
          <Select
            label="Difficulty"
            value={status.campaignDifficulty}
            onChange={(event) => {
              setStatus({
                ...status,
                campaignDifficulty: event.target.value,
              });
            }}
            colour={selectedRace.colour}
          >
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
            <option value="veryHard">Very Hard</option>
            <option value="legendary">Legendary</option>
          </Select>
        </QuestionWrapper>

        <QuestionWrapper>
          <DatePicker
            selected={Date.parse(status.date)}
            onChange={(nextDate) => setStatus({ ...status, date: nextDate })}
            colour={selectedRace.colour}
          />
        </QuestionWrapper>
      </StatusForm>
      <Button
        size="medium"
        variant="fill"
        type="submit"
        form={formID}
        colour={selectedRace.colour}
      >
        Save
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FactionImage = styled.img`
  max-inline-size: 5rem;
  position: absolute;
  top: -65px;
  align-self: center;
  box-shadow: ${({ colour }) => `0px 0px 10px ${colour}`};
`;

const FactionName = styled.h2`
  text-align: center;
  margin-block: 0;
  color: var(--colour-primary-900);
`;

const StatusForm = styled.form`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  & > * {
    flex: 1;
    min-width: 175px;
  }
`;

const QuestionWrapper = styled.fieldset`
  border: none;
  padding: 0;
`;

{
  /* Dropped this question.
  
  <QuestionWrapper>
          <Select
            label="Victory Type"
            value={status.victoryType}
            onChange={(event) => {
              setStatus({
                ...status,
                victoryType: event.target.value,
              });
            }}
          >
            <option value="short">Short</option>
            <option value="long">Long</option>
            <option value="domination">Domination</option>
          </Select>
        </QuestionWrapper> */
}
