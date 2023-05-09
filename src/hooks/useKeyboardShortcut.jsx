import React from "react";

/**
 * This callback type is called `keyboardShortcutCallback`.
 * @callback keyboardShortcutCallback
 */

/**
 * Invokes the provided callback when a shortcut (comprised of a modifier and key) is pressed.
 * @param {"Shift" | "Control" | "Meta" | "Alt" | "OS"} modifier - The modifier key that the user should hold down first to activate the keyboard shortcut.
 * @param {string} key - The activator key that the user should press whilst the modifier key is pressed
 * @param {keyboardShortcutCallback} callback - the callback function that is invoked when the user uses the keyboard shortcut.
 */

export default function useKeyboardShortcut(modifier, key, callback) {
  const acceptableModifiers = ["Shift", "Control", "Meta", "Alt", "OS"];
  const [keyPressed, setKeyPressed] = React.useState(false);
  const [modifierPressed, setModifierPressed] = React.useState(false);

  function cleanInput(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const cleanModifier = cleanInput(modifier);
  const cleanKey = cleanInput(key);

  if (!acceptableModifiers.includes(cleanModifier)) {
    throw new Error(
      "The first parameter to `useKeyboardShortcut` must be an acceptable modifier (Shift, Control, Meta, Alt or OS)."
    );
  }

  if (acceptableModifiers.includes(cleanKey)) {
    throw new Error(
      "The second parameter to `useKeyboardShortcut` cannot be a modifier key (Shift, Control, Meta, Alt or OS). Please provide a primary key instead."
    );
  }

  if (!callback || typeof callback !== "function") {
    throw new Error(
      "The third parameter to `useKeyboardShortcut` must be a callback function to be called once the shortcut is executed."
    );
  }

  const handleKeydown = React.useCallback((event) => {
    const { key } = event;
    if (!event.getModifierState(cleanModifier) || key !== cleanKey) return;

    if (event.getModifierState(cleanModifier)) setModifierPressed(true);
    if (event.key === cleanKey) setKeyPressed(true);
  }, []);

  const handleKeyup = React.useCallback((event) => {
    const { key } = event;
    if (!event.getModifierState(cleanModifier) || key !== cleanKey) return;
    if (event.getModifierState(cleanModifier)) setModifierPressed(false);
    if (event.key === cleanKey) setKeyPressed(false);
  }, []);

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeydown, true);

    return () => {
      window.removeEventListener("keydown", handleKeydown, true);
    };
  }, [handleKeydown]);

  React.useEffect(() => {
    window.addEventListener("keyup", handleKeyup, true);

    return () => {
      window.removeEventListener("keyup", handleKeyup, true);
    };
  }, [handleKeyup]);

  if (modifierPressed && keyPressed) callback();
}
