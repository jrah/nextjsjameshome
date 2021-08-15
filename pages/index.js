import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";
import Layout from "./../components/Layout";

import resolver from "../sm-resolver.js";

const Page = (props) => {
  return (
    <Layout menu={props.menu}>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  )
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'page',
  queryType: 'repeat',
  apiParams: {
    uid: 'home'
  }
});

export default Page;
