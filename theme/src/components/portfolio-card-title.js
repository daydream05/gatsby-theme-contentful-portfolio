import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";

const PortfolioCardTitle = props => {
  return (
    <Styled.h5
      css={css({
        textTransform: `uppercase`,
        variant: `portfolioCard.title`
      })}
      {...props}
    >
      {props.children}
    </Styled.h5>
  );
};

PortfolioCardTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default PortfolioCardTitle;
