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

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin
*/
* {
  margin: 0;
}

/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

  :root {
    ${createCssVars(CSS_VARS)};
  }

  body {
    touch-action: pan-y;
    font-family: sans-serif;
    font-family: var(--font-family-body);
    background: var(--colour-primary-200);
  }

  body::-webkit-scrollbar {
    width: 0.5em;
  }

  body::-webkit-scrollbar-thumb {
  background-color: var(--colour-primary-600);
  
  &:hover {
    background-color: var(--colour-primary-700);
  }
}

::-webkit-scrollbar-track {
  background: var(--colour-primary-400);
}

  input, select {
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-heading);
  }

  a {
    color: var(--colour-secondary-500)
  }

  a:visited {
    color: var(--colour-secondary-700)
  }

  a:hover, a:focus {
    filter: brightness(120%) saturate(120%);
  }

  a:focus-visible {
    outline: currentColor 2px solid;
    outline-offset: 3px;
  }
`;

export default GlobalStyle;
