import React from "react";
import "./Layout.scss";
import Navbar from "../nav/Navbar";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import LeftBar from "../leftBar/LeftBar";
import RightBar from "../rightBar/RightBar";

const Layout = ({ noNav, noSideBar, children }) => {
  if (noNav) {
    return (
      <div className="layout">
        {{ children } ? (
          <div className="layout__bodyNoNav">{children}</div>
        ) : (
          <Main />
        )}
        <Footer />
      </div>
    );
  } else if (noSideBar) {
    return (
      <div className="layout">
        <Navbar />
        {{ children } ? (
          <div className="layout__bodyNoSideBar">{children}</div>
        ) : (
          <Main />
        )}
        <Footer />
      </div>
    );
  } else if (noSideBar && noNav) {
    return (
      <div className="layout">
        {{ children } ? (
          <div className="layout__bodyNothing">{children}</div>
        ) : (
          <Main />
        )}
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="layout">
        <Navbar />
        <LeftBar />
        {{ children } ? (
          <div className="layout__body">{children}</div>
        ) : (
          <Main />
        )}
        <RightBar />
        <Footer />
      </div>
    );
  }
};

export default Layout;
