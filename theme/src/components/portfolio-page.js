import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import SEO from "./seo";
import PortfolioPageContent from "./portfolio-page-content";

const PortfolioPage = ({ data, location }) => {
  let isModal = false;
  // we can pass in a removeModal state to a Link
  // as an escape hatch.
  const openModal = location.state && location.state.openModal;

  if (
    typeof window !== `undefined` &&
    // from gatsby browser
    window.___GATSBYGRAM_INITIAL_RENDER_COMPLETE &&
    // from location state
    openModal
  ) {
    isModal = true;
  }

  const { title, description, shareImage, media } = data.contentfulPortfolio;

  const isVideo = media && media.file.contentType === `video/mp4`;

  return (
    <Layout location={location} isModal={isModal}>
      <SEO
        title={title}
        description={description ? description.internal.content : null}
        image={!isVideo && shareImage ? shareImage.resize.src : null}
        imageWidth={!isVideo && shareImage ? shareImage.resize.width : null}
        imageHeight={!isVideo && shareImage ? shareImage.resize.height : null}
        video={isVideo && media ? media.file.url : null}
      />
      <PortfolioPageContent data={data} pageUrl={location.href} />
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired
};

export default PortfolioPage;
