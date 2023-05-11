import React from "react";
import styled from "styled-components/macro";
import Button from "../Primitives/Button";
import Icon from "../Primitives/Icon";
import FactionSearch from "../FactionSearch";
import HelpModal from "../HelpModal";

export default function Header() {
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <Wrapper>
      <AppHeader>Immortal Tracker</AppHeader>
      <Icons>
        <SettingsButton
          variant="ghost"
          size="small"
          style={{ "--padding": "4px 4px" }}
          onClick={() => setHelpOpen(!helpOpen)}
        >
          <Icon
            id="help"
            label="Help and Credits"
            size={24}
            strokeWidth={2}
          />
        </SettingsButton>
        {helpOpen && (
          <HelpModal
            isOpen={helpOpen}
            setIsOpen={setHelpOpen}
          />
        )}
        <SearchButton
          variant="ghost"
          size="small"
          style={{ "--padding": "4px 4px" }}
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <Icon
            id="search"
            label="Search"
            size={24}
            strokeWidth={2}
          />
        </SearchButton>
        {searchOpen && (
          <FactionSearch
            isOpen={searchOpen}
            setIsOpen={setSearchOpen}
          />
        )}
      </Icons>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  block-size: var(--size-xl);
  position: fixed;
  top: 0;
  left: 0;
  background: hsla(191deg, 34%, 7%, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--size-m);
  border-block-end: 1px solid var(--colour-primary-400);
  z-index: 2;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding-inline: var(--size-m);
  inline-size: 100%;
  box-shadow: var(--shadow-strong);
  color: var(--colour-primary-900);
`;

const AppHeader = styled.h1`
  flex-shrink: 0;
  font-size: clamp(1.5rem, 5vw, 2rem);
`;

const SettingsButton = styled(Button)``;

const SearchButton = styled(Button)``;

const Icons = styled.div`
  margin-inline-start: auto;
  display: flex;
  gap: var(--size-xs);
`;
