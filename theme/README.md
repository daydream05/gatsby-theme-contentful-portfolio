# Gatsby Theme Gallery Contentful

Show off your portoflio  

## What is it?
This theme generates a pinterest-like portfolio gallery for your site. It creates a page  

## Features

- Pinterest-like root page
- Ability to open each page as modal.
- Supports and lazy loads videos
- Dark mode compatible
- Social media share button
- A11Y friendly
  - Uses @reach-ui/dialog for modal focusing
  - Press left/right keys when nevigating between pages
  - Icons have proper aria-label
- SEO friendly
  - OpenGraph sharing support
  - Twitter Cards
- Uses Theme-UI
- (Almost) every component can be styled using theme-ui [variants](https://theme-ui.com/guides/variants#themeable-layout-components)
- (Almost) every component is extendeable.

## Pre-requisites

For this to work, you need to have a Contentful account.

## Setup

### Theme Options

```js
// gatsby-config.js

module.exports = {
{
    resolve: `gatsby-theme-gallery-contentful`,
    options: {
      basePath: `/portfolio/`,
      baseTitle: `My recent work`,
      baseSubtitle: `You can put whatever here. It's all yours champ`,
      siteMetadata: {
        siteUrl: `localhost:8000`,
        siteName: `The New Site`
      },
      contentfulOptions: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  }
}

```

## Extending a component


@TODO Extending components with queries