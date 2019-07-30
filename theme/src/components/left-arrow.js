import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { css } from "theme-ui";

const LeftArrow = props => {
  return (
    <button
      aria-label="Previous page"
      css={css({
        background: `unset`,
        padding: 0,
        border: 0,
        position: `fixed`,
        top: `50%`,
        left: [3, 3, 3, 3, 5],
        display: `flex`,
        alignItems: `center`
      })}
      {...props}
    >
      <FaLongArrowAltLeft
        css={css({
          fontSize: 4,
          color: `text`,
          cursor: `pointer`,
          translateY: `-50%`
        })}
      />
    </button>
  );
};

export default LeftArrow;
