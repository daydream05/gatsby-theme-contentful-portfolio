import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ReactPlayer from "react-player";
import { css } from "theme-ui";

const PortfolioPageMedia = props => {
  const { media } = props;

  if (media && media.file.contentType === "video/mp4") {
    return (
      <ReactPlayer url={media.file.url} controls width="100%" height="auto" />
    );
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

PortfolioPageMedia.propTypes = {
  media: PropTypes.object.isRequired
};
export default PortfolioPageMedia;
