import React from "react";

import Layout from "./layout";
import GalleryPageContent from "./gallery-page-content";

import SEO from "./seo";

const GalleryPage = ({ data, location }) => {
  const isBehindAModal = location.state && location.state.isBehindAModal;

  return (
    <Layout location={location}>
      <SEO title={data.site.siteMetadata.baseTitle} />
      <GalleryPageContent data={data} isBehindAModal={isBehindAModal} />
    </Layout>
  );
};

export default GalleryPage;
