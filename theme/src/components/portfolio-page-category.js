import React from "react";
import { css } from "theme-ui";

const PortfolioPageCategory = props => {
  return (
    <span
      css={css({
        display: `block`,
        textTransform: `uppercase`,
        letterSpacing: 2,
        fontFamily: `body`,
        fontWeight: `bold`,
        color: `text`,
        opacity: 0.8,
        fontSize: [0, 0, 1],
        mb: [4]
      })}
      {...props}
    >
      {props.children}
    </span>
  );
};

export default PortfolioPageCategory;
