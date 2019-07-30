import React from "react";
import PropTypes from "prop-types";
import { css } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui";

import GalleryPageTitle from "./gallery-page-title";
import GalleryPageSubtitle from "./gallery-page-subtitle";

const GalleryPageHeader = props => {
  const { title, subTitle, ...rest } = props;
  return (
    <header
      css={css({
        mx: [3, 3, 3, 4, 4, `auto`],
        maxWidth: [
          `unset`,
          `unset`,
          `unset`,
          `unset`,
          `unset`,
          theme.breakpoints.xl
        ],
        mb: [2, 2, 2, 4, 5],
        variant: `galleryPage.header`
      })}
      {...rest}
    >
      <GalleryPageTitle>{title}</GalleryPageTitle>
      <GalleryPageSubtitle>{subTitle}</GalleryPageSubtitle>
    </header>
  );
};

GalleryPageHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default GalleryPageHeader;
