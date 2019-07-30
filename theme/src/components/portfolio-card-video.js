import React, { useState } from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { css } from "theme-ui";
import { Waypoint } from "react-waypoint";

import theme from "../gatsby-plugin-theme-ui";

// TODO: Add autoplay options. Right now the default is
// it will autoplay if on screen and stop playing on background.
const PortfolioCardVideo = props => {
  const { media, isBehindAModal } = props;

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Waypoint
      onEnter={() => setPlayVideo(true)}
      onLeave={() => setPlayVideo(false)}
    >
      <div
        css={css({
          display: `block`,
          video: {
            display: `block`
          }
        })}
      >
        <div
          css={css({
            display: "none",
            overflow: `hidden`,
            [theme.mediaQueries.lg]: {
              display: `block`
            }
          })}
        >
          <ReactPlayer
            url={media.file.url}
            muted
            loop
            playing={isBehindAModal ? false : playVideo}
            width="100%"
            height="auto"
            style={{
              video: {
                display: `block`
              }
            }}
          />
        </div>
        <div
          css={css({
            display: `block`,
            [theme.mediaQueries.lg]: {
              display: `none`
            }
          })}
        >
          <ReactPlayer url={media.file.url} width="100%" height="auto" />
        </div>
      </div>
    </Waypoint>
  );
};

PortfolioCardVideo.propTypes = {
  media: PropTypes.object.isRequired,
  autoPlay: PropTypes.bool,
  isBehindAModal: PropTypes.bool
};

export default PortfolioCardVideo;
