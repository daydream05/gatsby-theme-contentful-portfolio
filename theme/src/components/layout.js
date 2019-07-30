import React from "react";
import { PageRenderer, useStaticQuery, graphql } from "gatsby";

// We dynamically import Modal
let Modal;
import(`../components/modal`).then(modal => {
  Modal = modal.default;
});

let windowWidth;

const Layout = props => {
  const { location, isModal, children } = props;

  const data = useStaticQuery(siteQuery);

  let shouldModal = false;

  if (!windowWidth && typeof window !== `undefined`) {
    windowWidth = window.innerWidth;
  }

  // only set modal if not on mobile and if the page
  if (isModal && windowWidth > 750) {
    shouldModal = true;
  }

  // render modal here
  // PageRenderer is what allows us to render a page behind the modal
  // We also a state `isBehindAModal` so we can use it to pause
  // the videos playing on the background
  if (shouldModal && Modal) {
    return (
      <React.Fragment>
        <PageRenderer
          location={{
            pathname: data.site.siteMetadata.basePath,
            state: { isBehindAModal: true }
          }}
        />
        <Modal isOpen location={location}>
          {children}
        </Modal>
      </React.Fragment>
    );
  }

  // regular layout
  return <React.Fragment>{children}</React.Fragment>;
};

export const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        basePath
      }
    }
  }
`;

export default Layout;
