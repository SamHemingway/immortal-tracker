import React from "react";

/**
 * A hook to focus an element when a condition is met.
 * @param {React.RefObject} ref - the ref of the element to focus: *must be a React ref using React.useRef()*
 * @param {string} condition - the condition that must be met for the element to be focused. True by default.
 */

export default function useFocusElement(ref, condition = true) {
  React.useEffect(() => {
    if (condition) ref.current?.focus();
  }, []);
}
