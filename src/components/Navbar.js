import React from "react";

import Wrapped from "../styles/styled/navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Wrapped className="navbar">
            <Link to="/" className="home">
                HOME
            </Link>
        </Wrapped>
    );
};

export default Navbar;
