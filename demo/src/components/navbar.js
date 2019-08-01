import React from "react"
import { Link } from "gatsby"
import { css } from "theme-ui"

import theme from '../gatsby-plugin-theme-ui'

const Navbar = props => {
  return (
    <nav
      css={css({
        backgroundColor: `unset`,
        width: `100%`,
        maxWidth: `${theme.breakpoints.lg}`,
        margin: `auto`,
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
      </ul>
    </nav>
  )
}

const itemStyle = {
  fontFamily: theme.fonts.body,
  fontWeight: `bold`,
  ":first-of-type": {
    flex: 1,
  },
}

const linkStyle = {
  textDecoration: `none`,
  color: theme.colors.text,
  fontFamily: theme.fonts.body,
}

export default Navbar
