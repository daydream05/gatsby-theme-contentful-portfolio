import React from "react";
import { DialogOverlay } from "@reach/dialog";
import { css } from "theme-ui";

const CustomDialogOverlay = props => {
  return (
    <DialogOverlay
      css={css({
        zIndex: `modal`,
        bg: `white`,
        py: 4,
        px: [3, 3, 3, 4, 6, 0],
        variant: `dialog.overlay`
      })}
      {...props}
    >
      {props.children}
    </DialogOverlay>
  );
};

export default CustomDialogOverlay;
