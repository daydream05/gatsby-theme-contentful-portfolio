import React from "react";
import { css } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui";

const PortfolioPageContainer = props => {
  return (
    <div
      css={css({
        boxSizing: `border-box`,
        width: `100%`,
        margin: `auto`,
        maxWidth: theme.breakpoints.xl,
        py: [4, 4, 4, 5],
        px: [3, 3, 4, 5]
      })}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default PortfolioPageContainer;
