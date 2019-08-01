import React from "react";
import { DialogContent as Content } from "@reach/dialog";
import { css } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui";

const DialogContent = props => {
  return (
    <Content
      css={css({
        p: 0,
        background: `unset`,
        width: `100%`,
        maxWidth: theme.breakpoints.lg,
        mx: `auto`,
        variant: `dialog.content`
      })}
      {...props}
    >
      {props.children}
    </Content>
  );
};

export default DialogContent;
