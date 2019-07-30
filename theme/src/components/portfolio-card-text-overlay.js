import React from "react";
import { css } from "theme-ui";

const PortfolioCardTextOverlay = props => {
  return (
    <div
      css={css({
        display: [`none`, `none`, `none`, `block`],
        position: `absolute`,
        top: 0,
        zIndex: 0,
        transform: `translateY(calc(-100% + 2px))`,
        width: `100%`,
        height: `100%`,
        variant: `portfolioCard.textOverlay`
      })}
      {...props}
    />
  );
};

export default PortfolioCardTextOverlay;
