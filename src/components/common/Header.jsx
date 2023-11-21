import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './styles/Header.css';

const Header = () => {
    const isUserSignedIn = false;

    return (
        <header>
            <div className="container">
                <div className="nav">
                    <Link to="/" id='logo'>
                        LOGO
                    </Link>
                    <Navigation />
                </div>
                {isUserSignedIn ? (
                    <div className="user-actions">
                        <span>Welcome, Jesus</span>
                        <Link to="/signout">Sign Out</Link>
                    </div>
                ) : (
                    <div className="user-actions">
                        <Link to="/sign-in">Sign In</Link>
                        <Link to="/join-us">Join Us</Link>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
