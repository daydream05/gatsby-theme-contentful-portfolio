import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { css } from "theme-ui";

import PortfolioCardVideo from "./portfolio-card-video";

const PortfolioCardMedia = props => {
  const { media, isBehindAModal } = props;

  if (media.file.contentType === "video/mp4") {
    return <PortfolioCardVideo isBehindAModal={isBehindAModal} media={media} />;
  }
  return (
    <div>
      {media && (
        <Img
          fluid={media.fluid}
          alt={media.title}
          css={css({
            width: `100%`
          })}
        />
      )}
    </div>
  );
};

PortfolioCardMedia.propTypes = {
  media: PropTypes.object.isRequired
};
export default PortfolioCardMedia;
