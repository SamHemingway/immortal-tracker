import React from "react";
import styled from "styled-components/macro";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export default function Tooltip({
  children,
  trigger,
  open,
  defaultOpen,
  onOpenChange,
  ...delegated
}) {
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{trigger}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipContent
          side="bottom"
          align="center"
          {...delegated}
        >
          {children}
          <Arrow
            width={11}
            height={5}
            {...delegated}
          />
        </TooltipContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}

const TooltipContent = styled(TooltipPrimitive.Content)`
  box-shadow: var(--shadow-strong);
  background: ${({ background }) => background ?? "var(--colour-mono-900)"};
  color: ${({ foreground }) => foreground ?? "var(--colour-mono-100)"};
`;

const Arrow = styled(TooltipPrimitive.Arrow)`
  fill: ${({ background }) => background ?? "var(--colour-mono-900)"};
`;
