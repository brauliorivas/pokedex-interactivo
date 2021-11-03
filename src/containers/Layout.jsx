import React, { useState } from "react";
import Header from "@components/Header";
import Searchbar from "@components/Searchbar";
import List from "@containers/List";
import AppSearch from "@context/AppSearch";

const Layout = () => {
    const [search, setSearch] = useState("");

    return (
        <AppSearch.Provider value={[search, setSearch]}>
            <div className="Layout">
                <Header />
                <Searchbar />
                <List />
            </div>
        </AppSearch.Provider>
    );
}

export default Layout;