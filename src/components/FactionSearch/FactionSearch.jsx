import React from "react";
import styled from "styled-components/macro";
import { Combobox } from "@headlessui/react";
import { RACES } from "../../assets/constants";
import { SelectionContext } from "../../contexts/SelectionProvider";
import Modal from "../Primitives/Modal";
import ProgressInput from "../ProgressInput/ProgressInput";
import { ProgressContext } from "../../contexts/ProgressProvider";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import useIsMobileViewport from "../../hooks/useIsMobileViewport";
import Icon from "../Primitives/Icon/Icon";

export default function FactionSearch({ isOpen, setIsOpen }) {
  const [query, setQuery] = React.useState("");
  const [progressModalOpen, setProgressModalOpen] = React.useState(false);
  const { selectedRace, setSelectedRace, selectedFaction, setSelectedFaction } =
    React.useContext(SelectionContext);
  const { allProgress, setAllProgress } = React.useContext(ProgressContext);

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

  const lords = React.useMemo(
    () => RACES.flatMap((faction) => faction.lords),
    []
  );

  const filteredLords =
    query === ""
      ? lords
      : lords.filter(
          (lord) =>
            lord.name.toLowerCase().includes(query.toLowerCase()) ||
            lord.factionName.toLowerCase().includes(query.toLowerCase())
        );

  const mobileViewport = useIsMobileViewport(768);

  if (!mobileViewport)
    return (
      <Wrapper>
        <Combobox
          value={selectedFaction}
          onChange={(event) => {
            setSelectedFaction(event);

            const filteredRace = RACES.find((race) =>
              race.lords.some((lord) => lord.name === event.name)
            );

            setSelectedRace(filteredRace);
            setProgressModalOpen(true);
          }}
        >
          <SearchBarWrapper>
            <Label htmlFor="search">
              <Icon
                id="search"
                label="Search"
                size={24}
                strokeWidth={2}
              />
            </Label>
            <SearchBar
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(lord) => lord.name}
              placeholder="search for a faction or lord"
              id="search"
            />
          </SearchBarWrapper>
          <SearchResults>
            {query.length < 3 && <p>Type 3 or more characters</p>}
            {query.length > 2 && filteredLords < 1 ? (
              <p>No lords/factions found!</p>
            ) : (
              filteredLords.map((lord) => (
                <SearchOption
                  key={lord.lordID}
                  value={lord}
                >
                  <SearchResultItem data={lord} />
                </SearchOption>
              ))
            )}
          </SearchResults>
          {progressModalOpen && (
            <Modal
              isOpen={progressModalOpen}
              setIsOpen={setProgressModalOpen}
              title={`Enter your progress for ${selectedFaction.factionName}`}
              style={{
                marginTop: "100px",
                paddingTop: "65px",
                boxShadow: `0px 0px 10px ${selectedRace.colour}`,
              }}
            >
              <ProgressInput
                setInputOpen={setProgressModalOpen}
                onSubmit={factionProgressSubmit}
              />
            </Modal>
          )}
        </Combobox>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  position: relative;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  background: var(--colour-primary-400);
  color: var(--colour-primary-700);
  border: transparent 1px solid;
  block-size: 100%;
  gap: var(--size-xs);

  &:focus-within {
    outline: none;
    border: var(--colour-primary-700) 1px solid;
  }

  &:hover {
    color: var(--colour-primary-900);
  }
`;

const SearchBar = styled(Combobox.Input)`
  background: none;
  inline-size: 300px;
  border: none;
  color: var(--colour-primary-900);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--colour-primary-700);
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  min-inline-size: 50px;
`;

const SearchResults = styled(Combobox.Options)`
  position: absolute;
  top: 32px;
  left: 0;
  background: var(--colour-primary-400);
  list-style: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  gap: var(--size-m);
  flex-direction: column;
  inline-size: 100%;
  padding: var(--size-xs);
  box-shadow: var(--shadow-strong);
  color: var(--colour-primary-700);
  border: var(--colour-primary-700) 1px solid;
  border-block-start: none;
`;

const SearchOption = styled(Combobox.Option)`
  &[data-headlessui-state="active"] {
    color: var(--colour-primary-900);
    background: var(--colour-primary-100);
    font-weight: var(--font-weight-bold);
  }
`;
