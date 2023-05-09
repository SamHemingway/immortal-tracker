import React from "react";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import VisuallyHidden from "../Primitives/VisuallyHidden/MyAttempt";
import styled from "styled-components";

function HamburgerIcon({ state }) {
  const { variants } = React.useContext(AnimationContext);
  let animation = state ? "open" : "closed";

  return (
    <>
      <IconWrapper
        viewBox="2.5 2.5 95 95"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        <defs>
          <linearGradient
            id="gradient-0"
            x1="50"
            x2="50"
            y1="2.5"
            y2="97.5"
            gradientUnits="userSpaceOnUse"
            spreadMethod="pad"
          >
            <stop
              offset="0"
              stopColor="#FFF"
              stopOpacity="0.2"
            ></stop>
            <stop
              offset="1"
              stopColor="#FFF"
              stopOpacity="0.05"
            ></stop>
          </linearGradient>
        </defs>
        <motion.rect
          width="95"
          height="95"
          x="2.5"
          y="2.5"
          fill="url(#gradient-0)"
          ry="10"
          variants={variants.hamburgerIcon.wrapper}
          animate={animation}
        ></motion.rect>
        <Line
          d="M 20 30 L 80 30"
          strokeLinecap="round"
          variants={variants.hamburgerIcon.line1}
          animate={animation}
        ></Line>
        <Line
          d="M 20 50 L 80 50"
          strokeLinecap="round"
          variants={variants.hamburgerIcon.line2}
          transition={{ duration: 0.1 }}
          animate={animation}
          opacity="1"
        ></Line>
        <Line
          d="M 20 70 L 80 70"
          strokeLinecap="round"
          variants={variants.hamburgerIcon.line3}
          animate={animation}
        ></Line>
      </IconWrapper>
      <VisuallyHidden>Menu</VisuallyHidden>
    </>
  );
}

const IconWrapper = styled(motion.svg)`
  height: 2.5em;
  width: 2.5em;

  @media (min-width: 900px) {
    display: none;
  }

  @media (pointer: coarse) {
    position: relative;

    &::after {
      --tap-increment: -8px;
      content: "";
      position: absolute;
      top: var(--tap-increment);
      left: var(--tap-increment);
      right: var(--tap-increment);
      bottom: var(--tap-increment);
    }
  }
`;

const Line = styled(motion.path)`
  stroke: var(--colour-primary-900);
  stroke-width: 0.5em;
`;

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
`;

export default HamburgerIcon;
