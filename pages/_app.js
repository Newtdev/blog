import "../styles/globals.css";
import Layout from "../layout/Layout";
import PageHead from "../components/PageHead";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <PageHead /> */}
    </Layout>
  );
}

export default MyApp;
