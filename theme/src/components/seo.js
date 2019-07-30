/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        siteName
      }
    }
  }
`;

const SEO = ({
  description,
  lang,
  meta,
  keywords,
  title,
  author,
  image,
  imageWidth,
  imageHeight,
  video
}) => {
  const { site } = useStaticQuery(siteQuery);

  const { siteUrl, siteName } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${siteName}`}
      meta={[]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    >
      {/** Should we use "og:type" "article" for each individual portfolio page? */}
      <meta property="og:type" content="website" />
      {siteUrl && <meta property="og:url" content={siteUrl} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {imageWidth && <meta property="og:image:width" content={imageWidth} />}
      {imageHeight && <meta property="og:image:height" content={imageHeight} />}
      {video && <meta property="og:video" content={video} />}

      {/** Twitter cards */}
      <meta name="twitter:card" content="summary" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {imageWidth && <meta name="twitter:image:width" content={imageWidth} />}
      {imageHeight && (
        <meta name="twitter:image:height" content={imageHeight} />
      )}
      {video && <meta name="twitter:video" content={video} />}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  image: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number
};

export default SEO;
