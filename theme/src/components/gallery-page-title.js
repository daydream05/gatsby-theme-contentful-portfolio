import React from "react";
import { css, Styled } from "theme-ui";

const GalleryPageTitle = props => {
  const { children } = props;
  return (
    <Styled.h1
      css={css({
        mt: 0,
        mb: [3],
        color: `text`,
        fontSize: [6, 6, 6, 7],
        lineHeight: `1`,
        variant: `galleryPage.title`
      })}
      {...props}
    >
      {children}
    </Styled.h1>
  );
};

export default GalleryPageTitle;
