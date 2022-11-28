import { getAllPlacesIds, getPlaceData } from '../lib/places';
import Layout from '../components/layout';
import Placelayout from '../components/placelayout';

export default function Place({ placeData }) {
  return <Layout>
    <Placelayout placeData={placeData} />
  </Layout>;
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const placeData = getPlaceData(params.id)
  return {
    props: {
      placeData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPlacesIds();
  return {
    paths,
    fallback: false,
  };
}
