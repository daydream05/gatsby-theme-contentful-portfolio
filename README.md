# Gatsby Theme Gallery Contentful

Show off your portoflio with style.

**Live Demo**: https://gatsby-theme-contentful-portfolio.netlify.com/

## What is it?
This theme generates a pinterest-like portfolio gallery for your site. It also creates a page for each of your projects.

## Features

- Pinterest-like root page
- Ability to open each page as modal.
- Supports and lazy loads videos
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

**Future features:**
- Full dark mode support
- Pagination and infinite scrolling
- "Related projects" at the bottom of each projects

**Bugs fixing**
- a lot. need help.
- React-masonry-component is not ssr friendly :(
Gonna have to start over and find a better pinterest style grid for the default landing page. Anyway, you can override the gallery page by extending
`src/components/gallery-page-content`. You'll have access to the graphql data and choose whatever design you want for it.


## Pre-requisites

###  Contentful account
*If you already have an account and a contentful space, you can skip this part*

For this to work, you will need to have a [Contentful](https://www.contentful.com/) account and the necessary api keys that we use for
[gatsby-source-contentful](https://www.gatsbyjs.org/packages/gatsby-source-contentful/).

### Content Model Structure

Once you have created your contentful space, you will need to create a content model that matches this structure. You would also need to have __1 content with all the fields populated.__

#### Content Model

This exact naming is a requirement. (Sorry, I could have named it Projects but I didn't realize it until I'm too deep into the project). 

__Name__: Portfolio

__Api Identifier__: Portfolio

#### Fields

| Name | Type | Validations | Example | Description |
|-------------|------------|------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Title | Short Text | Required | My Awesome Project | Name of the portfolio project. |
| Slug | Short Text | Required, Unique | my-awesome-project | Derived from the title. We would append this to the base path to create to the full path for each page. i.e. `/portfolio/my-awesome-project/` |
| Category | Short Text |  | Web Design |  |
| Description | Long Text |  | I built this in two weeks but I haven't touched it for another two weeks, and now I only have two days to finish it.  |  |
| Media | Media | Photo or video |  | This can be a photo or a video. The theme is smart enough to know which component to use for these specific formats. Might now work with gifs. |
| Video Link | Short Text |  | [https://www.youtube.com/watch?v=dQw4w9WgXcQ](https://www.youtube.com/watch?v=dQw4w9WgXcQ) | If you provide a Youtube, Vimeo or any other video urls, the theme will use it instead of the media you uploaded on contentful.  |

You can add more fields to your content model but the above fields are required.

Please note that you will need at least 1 content, with all the fields populated for it to work.

### Theme Options

| key | default value | Required | description |
|-----------------------|----------------|----------|------------------------------------------------------------------------------------------------------------------------------------------|
| basePath | /portfolio/ | Yes | Root url that will house the portfolio landing page and will be prepended to each portfolio project path |
| baseTitle | My recent work |  | The title for the landing page and the SEO title |
| baseSubtitle |  |  | This goes under the title on the landing page. |
| siteMetadata.siteUrl |  | Yes | Your site's url |
| siteMetadata.siteName |  | Yes | Your site's name |
| contentfulOptions |  | required | Configuration options from [gatsby-source-contentful](https://www.gatsbyjs.org/packages/gatsby-source-contentful/#configuration-options) |

## Installation
`npm install gatsby-theme-contentful-portfolio`
```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve:`gatsby-theme-contentful-portfolio`,
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
    },
  ]
}

```

@TODO: _Remove siteMetadata from options since you can query siteMetadata, site wide._

## Theming

## Extending a component

@TODO Extending components with queries example