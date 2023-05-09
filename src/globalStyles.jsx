import { createGlobalStyle } from "styled-components";
import { CSS_VARS } from "./assets/constants";

const createCssVar = (items, prefix = "-") =>
  Object.entries(items).flatMap(([key, value]) => {
    const varName = `${prefix}-${key}`;
    if (typeof value === "object") return createCssVar(value, varName);
    return `${varName}:${value}`;
  });

export const createCssVars = (themeColors) =>
  createCssVar(themeColors).join(";");

const GlobalStyle = createGlobalStyle`

  :root {
    ${createCssVars(CSS_VARS)};
  }

  body {
    touch-action: pan-y;
    font-family: sans-serif;
    font-family: var(--font-family-body);
    background: var(--colour-primary-200);
  }

  input, select {
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-heading);
  }
`;

export default GlobalStyle;
