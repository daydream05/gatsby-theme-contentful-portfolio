import React from "react";
import { DialogOverlay as Overlay } from "@reach/dialog";
import { css } from "theme-ui";

const DialogOverlay = props => {
  return (
    <Overlay
      css={css({
        zIndex: `modal`,
        bg: `muted`,
        py: 4,
        px: [3, 3, 3, 4, 6, 0],
        variant: `dialog.overlay`
      })}
      {...props}
    >
      {props.children}
    </Overlay>
  );
};

export default DialogOverlay;
