import React from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }) {
  const [host, setHost] = React.useState(null);
  const id = React.useId();

  React.useEffect(() => {
    const host = document.createElement("div");
    host.id = `portal-${id}`;
    document.body.appendChild(host);
    setHost(host);

    return () => {
      host.remove();
    };
  }, []);

  if (!host) return null;

  return createPortal(children, host);
}
