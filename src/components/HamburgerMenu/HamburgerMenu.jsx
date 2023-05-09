import React from "react";
import styled from "styled-components/macro";
import { Popover } from "@headlessui/react";
import Icon from "../Primitives/Icon";

export default function HamburgerMenu({ menuIsOpen, setMenuIsOpen }) {
  function showMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <Wrapper>
      <Trigger
        onClick={showMenu}
        onSelect={showMenu}
      >
        <Icon
          id="menu"
          label="Menu"
          state={menuIsOpen}
        />
      </Trigger>
      <Content>
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img
          src="/solutions.jpg"
          alt=""
        />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled(Popover)`
  position: relative;
  top: 3px;
`;

const Trigger = styled(Popover.Button)`
  background: none;
  margin: 0;
  border: 0;
  padding: 0;
`;

const Content = styled(Popover.Panel)`
  background: white;
  position: absolute;
  top: 50px;
  right: 0;
`;
