import { Fragment } from "react";
import Footer from "../components/footer/Footer";
import Subscription from "../components/subscription";
// import PageHead from "../components/pageHeader/PageHead";
import PageHead from "../components/pageHeader";

function Layout({ children }) {
  return (
    <Fragment>
      <PageHead />
      {children}
      <Subscription />
      <Footer />
    </Fragment>
  );
}

export default Layout;
