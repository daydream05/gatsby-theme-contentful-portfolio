import React from "react";
import { css } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui";

const PortfolioCardButton = props => {
  return (
    <button
      css={css({
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        alignSelf: `flex-start`,
        backgroundColor: `unset`,
        color: `text`,
        fontSize: [1],
        textTransform: `uppercase`,
        py: 3,
        px: 3,
        letterSpacing: 2,
        border: `2px solid`,
        cursor: `pointer`,
        transition: `0.3s`,
        mt: [0, 0, 1],
        ":hover, :focus": {
          backgroundColor: `text`,
          transition: `0.3s`,
          color: `white`
        },
        [theme.mediaQueries.md]: {
          color: `white`,
          border: `2px solid white`,
          backgroundColor: `unset`,
          ":hover, :focus": {
            color: `black`,
            backgroundColor: `background`
          }
        },
        variant: "buttons.secondary"
      })}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default PortfolioCardButton;
