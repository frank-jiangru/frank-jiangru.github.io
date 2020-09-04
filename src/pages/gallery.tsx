import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Gallery from 'src/gatsby-image-gallery';

const GalleryPage: React.FC = () => {
    return (
      <Layout>
        <SEO title="Gallery" />
        <Gallery images={images} lightboxOptions={lightboxOptions} />
      </Layout>
    );
}

export default GalleryPage;