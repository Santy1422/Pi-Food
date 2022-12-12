import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
export const Nav = (props) => {
    return (
        <nav>
            <SearchBar/>
            <Link to="/create">
        <button>Create</button>
      </Link>
        </nav>
    )
}