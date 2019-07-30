import React from "react";
import PropTypes from "prop-types";

import { css } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui";

import PortfolioPageTitle from "./portfolio-page-title";
import PortfolioPageCategory from "./portfolio-page-category";
import PortfolioPageDescription from "./portfolio-page-description";
import PortfolioPageShareMenu from "./portfolio-page-share-menu";

const PortfolioPageHeader = props => {
  const { title, category, description, pageUrl, media, ...rest } = props;

  return (
    <header
      css={css({
        display: `block`,
        mb: [4, 4, 4, 5],
        [theme.mediaQueries.md]: {
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`
        }
      })}
      {...rest}
    >
      <PortfolioPageCategory>{category}</PortfolioPageCategory>
      <PortfolioPageTitle
        css={css({
          gridColumn: 1
        })}
      >
        {title}
      </PortfolioPageTitle>
      {description && (
        <PortfolioPageDescription
          css={css({
            gridColumn: 1
          })}
        >
          {description}
        </PortfolioPageDescription>
      )}
      <PortfolioPageShareMenu url={pageUrl} media={media && media.file.url} />
    </header>
  );
};

PortfolioPageHeader.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string
};

export default PortfolioPageHeader;
