import React from "react";
import PropTypes from "prop-types";
import { css, Styled } from "theme-ui";

const PortfolioCardDescription = props => {
  return (
    <Styled.p
      css={css({
        variant: `portfolioCard.description`
      })}
      {...props}
    >
      {props.children}
    </Styled.p>
  );
};

PortfolioCardDescription.propTypes = {
  children: PropTypes.node.isRequired
};

export default PortfolioCardDescription;
