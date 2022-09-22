import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}

export default Layout;
