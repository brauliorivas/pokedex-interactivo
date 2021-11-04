import React, { useState } from "react";
import Header from "@components/Header";
import Searchbar from "@components/Searchbar";
import List from "@containers/List";
import AppSearch from "@context/AppSearch";
import AppFavorites from "@context/AppFavorites";

const Layout = () => {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState([]);

    return (
        <AppSearch.Provider value={[search, setSearch]}>
            <div className="Layout">
                <AppFavorites.Provider value={[favorites, setFavorites]}>
                    <Header />
                    <Searchbar />
                    <List />
                </AppFavorites.Provider>
            </div>
        </AppSearch.Provider >
    );
}

export default Layout;