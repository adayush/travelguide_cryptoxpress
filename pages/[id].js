import { getAllPlacesIds, getPlaceData, getImagesPaths } from '../lib/places';
import Layout from '../components/layout';
import Placelayout from '../components/placelayout';

import TestContext from '../lib/testContext';
import { useContext } from 'react';

export default function Place({ placeData, images }) {
  const context = useContext(TestContext)
  context.setNameContext(placeData)

  return <Layout>
    <Placelayout placeData={placeData} images={images} />
  </Layout>;
}

export async function getStaticPaths() {
  const paths = getAllPlacesIds();
  
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const placeData = getPlaceData(params.id)
  const images = getImagesPaths(params.id)

  return {
    props: {
      placeData,
      images
    }
  }
}
