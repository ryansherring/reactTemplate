import React from 'react';
import Navbar from '../nav/Navbar';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import './Layout.scss';

const Layout = ({noNav, noSideBar, children}) => {
    if(noNav) {
        return (
            <div className="container">
            {{children} ? (<div className="body">{children}</div>) : (<Main />)}
            <Footer />
            </div>
            );
    }
    else if(noSideBar) {
        return (
            <div className="container">
            {{children} ? (<div className="body">{children}</div>) : (<Main />)}
            <Footer />
            </div>
            );
    }
    else if(noSideBar && noNav) {
        return (
            <div className="container">
            {{children} ? (<div className="body">{children}</div>) : (<Main />)}
            <Footer />
            </div>
            );
    }
    else {
        return (
            <div className="container">
            <Navbar />
            {{children} ? (<div className="body">{children}</div>) : (<Main />)}
            <Footer />
          </div>
            );
        
    };
}

export default Layout;
