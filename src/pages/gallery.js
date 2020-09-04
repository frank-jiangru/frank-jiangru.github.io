import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Gallery from '../../gatsby-image-gallery/src';

const GalleryPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => node.childImageSharp)
  // Override some of Lightbox options to localise labels in French
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }
  return (
    <Layout>
      <SEO title="Gallery" />
      <Gallery images={images} lightboxOptions={lightboxOptions} />
    </Layout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 1024, maxHeight: 1024) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default GalleryPage;
