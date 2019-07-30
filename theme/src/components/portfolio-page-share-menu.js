import React, { useState } from "react";
import { FaPinterest, FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import { css } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui";

// stolen from gatsbyjs :)

// Should we use StaticQuery instead?
// Kinda worried about long build times
// I keep hearing due to complex queries
// But i (Might be wrong on this)

const objectToParams = object =>
  `?` +
  Object.keys(object)
    .filter(key => !!object[key])
    .map(key => `${key}=${encodeURIComponent(object[key])}`)
    .join(`&`);

const PortfolioPageShareMenu = props => {
  const { url, media, title } = props;

  const [open, setOpen] = useState(false);

  return (
    <div
      css={css({
        gridColumn: 2,
        gridRow: 1,
        justifySelf: `end`,
        display: `flex`,
        flexDirection: [`row`, `row`, `row`, `row-reverse`],
        position: `relative`,
        overflow: `hidden`
      })}
    >
      <button
        onClick={() => setOpen(!open)}
        css={css({
          background: `unset`,
          backgroundColor: `background`,
          padding: 0,
          cursor: `pointer`,
          zIndex: 1,
          ...linkStyle,
          variant: `buttons.shareMenu`
        })}
      >
        <MdShare />
      </button>
      <div
        css={css({
          display: `flex`,
          flexDirection: [`row`, `row`, `row`, `row-reverse`],
          transition: `0.3s transform`,
          transform: open ? `translateX(-100%)` : `translateX(0%)`,
          [theme.mediaQueries.md]: {
            transform: open ? `translateX(0)` : `translateX(100%)`
          }
        })}
      >
        <a
          tabIndex={open ? 0 : -1}
          {...linkAttrs}
          href={`https://pinterest.com/pin/create/button/${objectToParams({
            url: url,
            media: media,
            description: title
          })}`}
          title="Share on Pinterest"
          css={css({
            ...linkStyle,
            borderLeft: `none`,
            [theme.mediaQueries.md]: {
              borderLeft: border,
              borderRight: `none`
            }
          })}
        >
          <FaPinterest />
        </a>
        <a
          tabIndex={open ? 0 : -1}
          {...linkAttrs}
          href={`https://www.facebook.com/sharer.php${objectToParams({
            u: url,
            t: title
          })}`}
          title="Share on Facebook"
          css={css({
            ...linkStyle,
            borderLeft: `none`,
            [theme.mediaQueries.md]: {
              borderLeft: border,
              borderRight: `none`
            }
          })}
        >
          <FaFacebookF />
        </a>
        <a
          tabIndex={open ? 0 : -1}
          {...linkAttrs}
          href={`https://twitter.com/share${objectToParams({
            url: url,
            text: title
          })}`}
          title="Share on Twitter"
          css={css({
            ...linkStyle,
            borderLeft: `none`,
            [theme.mediaQueries.md]: {
              borderLeft: border,
              borderRight: `none`
            }
          })}
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default PortfolioPageShareMenu;

const border = `2px solid`;

const linkStyle = {
  color: `text`,
  opacity: 1,
  fontSize: 3,
  width: `48px`,
  height: `48px`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  boxSizing: `border-box`,
  border
};

const linkAttrs = {
  target: `_blank`,
  rel: `noopener noreferrer`
};
