import React from "react";
import Header from "@components/Header";
import Searchbar from "@components/Searchbar";

const Layout = ({children}) => {
    return (
        <div className="Layout">
            <Header />
            <Searchbar />
            {children}
        </div>
    );
}

export default Layout;