const slugify = require('slugify')

exports.onCreateNode = (
  { node, actions },
  { basePath = `/gallery/`}
) => {
  const { createNodeField } = actions
  
  // We create a url path for each image
  // using the title, gallery root path and id
  // e.g. /gallery/this-image-title-938128129/
  if(node.internal.type === `ContentfulPortfolio`) {
    const slug = `${node.slug}`
    const url = `${basePath}${slug}/`;

    createNodeField({
      node,
      name: `path`,
      value: url,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }, { basePath = `/gallery/` }) => {
  const { createPage } = actions;

  // create a page for each media item

  const loadGallery = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPortfolio {
          edges {
            node {
              fields {
                path
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const portfolioList = result.data.allContentfulPortfolio.edges;
      portfolioList.map(({ node }) => {
        createPage({
          path: node.fields.path,
          component: require.resolve(
            `./src/templates/portfolio-template.js`
          ),
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });

  // create a root page for gallery
  createPage({
    path: `${basePath}`,
    component: require.resolve(`./src/templates/gallery-template.js`)
  });

  return Promise.all([loadGallery]);
};