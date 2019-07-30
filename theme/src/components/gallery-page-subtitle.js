import React from "react";
import { Styled, css } from "theme-ui";

const GalleryPageSubtitle = props => {
  const { children } = props;

  return (
    <Styled.h5
      css={css({
        mt: 0,
        fontWeight: `body`,
        fontFamily: `body`,
        fontSize: [3, 3, 3],
        lineHeight: `heading`,
        width: [`100%`, `100%`, `100%`, `50%`],
        letterSpacing: `widest`,
        variant: `galleryPage.subtitle`
      })}
    >
      {children}
    </Styled.h5>
  );
};

export default GalleryPageSubtitle;
