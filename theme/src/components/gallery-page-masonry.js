import React from "react";
import PropTypes from "prop-types";
import ReactMasonry from "react-masonry-component";
import { css } from "theme-ui";

import PortfolioCard from "./portfolio-card";

import space from "../gatsby-plugin-theme-ui/space";

// TODO: This breaks when space is not in the power of 2

const gridItemWidth = [
  `calc(99.99% * 1/1 - ${space[3]}px)`,
  `calc(99.99% * 1/1 - ${space[3]}px)`,
  `calc(99.99% * 1/1 - ${space[3]}px)`,
  `calc(99.99% * 1/3 - ${space[3]}px)`,
  `calc(99.99% * 1/3 - ${space[3]}px)`,
  `calc(99.99% * 1/4 - ${space[3]}px)`,
  `calc(99.99% * 1/4 - ${space[3]}px)`,
  `calc(99.99% * 1/6 - ${space[3]}px)`
];

const GalleryPageMasonry = ({ itemList, isBehindAModal, gutter, ...rest }) => {
  const masonryOptions = {
    itemSelector: ".grid-item",
    columnWidth: `.grid-sizer`,
    gutter: space[3]
  };

  return (
    <div
      css={css({
        mx: [2, 2, 3, 3, 3],
        variant: `masonry.gridContainer`
      })}
    >
      <ReactMasonry
        options={{
          ...masonryOptions,
          gutter
        }}
        css={css({
          my: 0,
          width: `100%`,
          ".grid-sizer": {
            width: gridItemWidth,
            variant: `masonry.gridSizer`
          },
          ".grid-item": {
            marginBottom: [5, 5, 5, 3],
            mx: [2, 2, 2],
            width: gridItemWidth,
            variant: `masonry.gridItem`
          }
        })}
        {...rest}
      >
        <div className="grid-sizer" />
        {itemList &&
          itemList.map((item, index) => {
            return (
              <PortfolioCard
                isBehindAModal={isBehindAModal}
                key={`${item.id}-${index}`}
                className={`grid-item`}
                title={item.title}
                media={item.media}
                category={item.category}
                linkTo={item.fields.path}
                description={
                  item.description && item.description.internal.content
                }
              />
            );
          })}
      </ReactMasonry>
    </div>
  );
};

GalleryPageMasonry.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      media: PropTypes.object,
      category: PropTypes.string,
      linkTo: PropTypes.shape({
        fields: PropTypes.shape({
          path: PropTypes.string
        })
      }),
      linkState: PropTypes.object,
      description: PropTypes.object
    })
  ).isRequired,
  isBehindAModal: PropTypes.bool,
  gutter: PropTypes.number
};

GalleryPageMasonry.defaultProps = {
  gutter: space[3]
};

export default GalleryPageMasonry;
