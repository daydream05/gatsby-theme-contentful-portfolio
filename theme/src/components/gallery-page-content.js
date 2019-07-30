import React from "react";
import PropTypes from "prop-types";
import { css } from "theme-ui";

import GalleryPageHeader from "./gallery-page-header";
import GalleryPageMasonry from "./gallery-page-masonry";

const GalleryPageContent = ({ data, isBehindAModal }) => {
  const portfolioList = data.allContentfulPortfolio.edges.map(e => e.node);

  return (
    <div
      css={css({
        py: [5],
        variant: `galleryPage.content`
      })}
    >
      <GalleryPageHeader
        title={data.site.siteMetadata.baseTitle}
        subTitle={data.site.siteMetadata.baseSubtitle}
      />
      <GalleryPageMasonry
        itemList={portfolioList}
        isBehindAModal={isBehindAModal}
      />
    </div>
  );
};

GalleryPageContent.propTypes = {
  data: PropTypes.object.isRequired,
  isBehindAModal: PropTypes.bool
};

export default GalleryPageContent;
