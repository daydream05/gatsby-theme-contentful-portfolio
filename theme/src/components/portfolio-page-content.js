import React from "react";
import PropTypes from "prop-types";

import { css } from "theme-ui";

import PortfolioPageContainer from "./portfolio-page-container";

import PortfolioPageHeader from "./portfolio-page-header";
import PortfolioPagedMedia from "./portfolio-page-media";

const PortfolioPageContent = props => {
  const {
    title,
    media,
    category,
    description
  } = props.data.contentfulPortfolio;

  return (
    <article
      css={css({
        backgroundColor: `background`
      })}
    >
      <PortfolioPageContainer>
        <PortfolioPageHeader
          title={title}
          category={category}
          description={description && description.internal.content}
          media={media}
          pageUrl={props.pageUrl}
        />
        <PortfolioPagedMedia media={media} />
      </PortfolioPageContainer>
    </article>
  );
};

PortfolioPageContent.propTypes = {
  // specify later
  data: PropTypes.object,
  pageUrl: PropTypes.string
};

export default PortfolioPageContent;
