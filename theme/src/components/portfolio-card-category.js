import React from "react";
import PropTypes from "prop-types";
import { css } from "theme-ui";

const PortfolioCardCategory = props => {
  return (
    <span
      css={css({
        display: `block`,
        textTransform: `uppercase`,
        variant: `portfolioCard.category`,
        mb: 3
      })}
      {...props}
    >
      {props.children}
    </span>
  );
};

PortfolioCardCategory.propTypes = {
  children: PropTypes.node.isRequired
};

export default PortfolioCardCategory;
