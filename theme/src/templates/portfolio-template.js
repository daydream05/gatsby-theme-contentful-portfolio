import { graphql } from "gatsby";
import PortfolioPage from "../components/portfolio-page";

export default PortfolioPage;

export const portfolioTemplateQuery = graphql`
  query($slug: String!) {
    contentfulPortfolio(fields: { slug: { eq: $slug } }) {
      title
      category
      description {
        internal {
          content
        }
      }
      media {
        file {
          contentType
          url
        }
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        fixed(height: 600) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      shareImage: media {
        resize(width: 1200, height: 1200) {
          src
          width
          height
        }
      }
      fields {
        slug
      }
    }
  }
`;
