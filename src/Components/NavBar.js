import React from 'react';
import PropTypes from 'prop-types';
import logo from '../static/assets/logo.png';
import '../static/sass/NavBar.scss';

const NavLinks = ({ title })=> {
    const address = title.toLowerCase();
    return (
    <li className="nav-list-each">
        <a href={address}>{title}</a>
    </li>
);
};

NavLinks.propTypes = {
    title: PropTypes.string
};



const NavBar = () => {
    const NavList = ["Blog","Contact","Feature","Term & Condition","Login","Sign Up"];
    return(
        <header className="navbar">
            <h2>
                <img height="32" src={logo} alt="logo" />
                Recruitify
            </h2>
            <nav>
                <ul className="nav-list">
                    {
                        NavList.map(
                            each => (
                                <NavLinks title={each} key={each} />
                            )
                        )
                    }
                    
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;