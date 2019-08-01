import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import portfolioTheme from "gatsby-theme-contentful-portfolio/src/gatsby-plugin-theme-ui"

import merge from "lodash.merge"

const combinedTheme = merge({}, blogTheme, portfolioTheme, {
  buttons: {
    secondary: {
      color: `text`,
      border: `2px solid`,
      ":hover, :focus": {
        backgroundColor: `text`,
        transition: `0.3s`,
        color: `black`,
      },
      [portfolioTheme.mediaQueries.md]: {
        color: `background`,
        border: `2px solid`,
        backgroundColor: `unset`,
        ":hover, :focus": {
          color: `text`,
          backgroundColor: `background`,
        },
      },
    },
  },
})

export default combinedTheme
