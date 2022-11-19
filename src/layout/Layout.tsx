import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface ILayout {
    children: any;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
