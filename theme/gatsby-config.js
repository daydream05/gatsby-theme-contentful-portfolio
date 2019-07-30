module.exports = (themeOptions) => {
  return {
    siteMetadata: {
      basePath: themeOptions.basePath,
      baseTitle: themeOptions.baseTitle || `Portfolio`,
      baseSubtitle: themeOptions.baseSubtitle || ``,
      siteUrl: themeOptions.siteMetadata.siteUrl,
      siteName: themeOptions.siteMetadata.siteName,
    },
    plugins: [
      `gatsby-plugin-emotion`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-contentful`,
        options: themeOptions.contentfulOptions,
      },
    ]
  };
}