import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { css } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui";

import PortfolioCardMedia from "./portfolio-card-media";
import PortfolioCardTitle from "./portfolio-card-title";
import PortfolioCardDescription from "./portfolio-card-description";
import PortfolioCardCategory from "./portfolio-card-category";
import PortfolioCardTextOverlay from "./portfolio-card-text-overlay";
import PortfolioCardButton from "./portfolio-card-button";

const PortfolioCard = props => {
  const {
    title,
    media,
    category,
    description,
    buttonText,
    linkTo,
    linkState,
    isBehindAModal,
    ...rest
  } = props;

  return (
    <Link
      to={linkTo}
      state={linkState}
      title={`Read more about the "${title}" project`}
      css={css({
        textDecoration: `none`,
        ":hover, :focus, :active": {
          ".card": {
            transition: `0.3s opacity`,
            visibility: `visible`,
            opacity: 1
          }
        }
      })}
      {...rest}
    >
      <section
        css={css({
          [theme.mediaQueries.md]: {
            position: `relative`,
            overflow: `hidden`
          }
        })}
      >
        {media && (
          <PortfolioCardMedia media={media} isBehindAModal={isBehindAModal} />
        )}
        <div
          className="card"
          css={css({
            variant: `portfolioCard.container`,
            [theme.mediaQueries.md]: {
              boxSizing: `border-box`,
              display: `flex`,
              flexDirection: `column`,
              transition: `0.3s`,
              visibility: `hidden`,
              opacity: 0,
              height: `100%`,
              position: `absolute`,
              top: 0,
              width: `100%`,
              variant: `portfolioCard.container`
            }
          })}
        >
          <div
            css={css({
              [theme.mediaQueries.md]: {
                flex: 1,
                overflow: `hidden`
              }
            })}
          >
            {category && (
              <PortfolioCardCategory>{category}</PortfolioCardCategory>
            )}
            <PortfolioCardTitle>{title}</PortfolioCardTitle>
            {description && (
              <PortfolioCardDescription>{description}</PortfolioCardDescription>
            )}
          </div>
          <div
            css={css`
              position: relative;
            `}
          >
            <PortfolioCardButton tabIndex="-1">
              {buttonText}
            </PortfolioCardButton>
            <PortfolioCardTextOverlay />
          </div>
        </div>
      </section>
    </Link>
  );
};

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    fluid: PropTypes.object
  }),
  category: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  linkTo: PropTypes.string.isRequired,
  linkState: PropTypes.object
};

PortfolioCard.defaultProps = {
  buttonText: `Learn more`,
  linkState: {
    openModal: true
  }
};

export default PortfolioCard;
