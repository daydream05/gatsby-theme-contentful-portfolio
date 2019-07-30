import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { css } from "theme-ui";

const RightArrow = props => {
  return (
    <button
      aria-label="Next page"
      css={css({
        background: `unset`,
        padding: 0,
        border: 0,
        position: `fixed`,
        top: `50%`,
        right: [3, 3, 3, 3, 5],
        display: `flex`,
        alignItems: `center`
      })}
      {...props}
    >
      <FaLongArrowAltRight
        css={css({
          fontSize: 4,
          color: `text`,
          cursor: `pointer`,
          translteY: `-50%`
        })}
      />
    </button>
  );
};

export default RightArrow;
