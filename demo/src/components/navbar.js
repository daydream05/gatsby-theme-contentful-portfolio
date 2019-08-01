import React from "react"
import { Link } from "gatsby"
import { css } from "theme-ui"

const Navbar = props => {
  return (
    <nav
      css={css({
        borderBottom: `1px solid`,
        backgroundColor: `background`,
        width: `100%`,
      })}
    >
      <ul
        css={css({
          listStyle: `none`,
          display: `flex`,
          alignItems: `center`,
          px: 4,
          py: 2,
        })}
      >
        <li
          css={css({
            ...itemStyle,
          })}
        >
          <Link
            to="/"
            css={css({
              ...linkStyle,
            })}
          >
            Home
          </Link>
        </li>
        <li
          css={css({
            ...itemStyle,
          })}
        >
          <Link
            to="/portfolio/"
            css={css({
              ...linkStyle,
            })}
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const itemStyle = {
  fontSize: 2,
  fontWeight: `bold`,
  ":first-of-type": {
    flex: 1,
  },
}

const linkStyle = {
  textDecoration: `none`,
  color: `text`,
  fontFamily: `body`,
}

export default Navbar
