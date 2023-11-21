import React from "react";
import { Link } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
    return(
        <footer>
            <h3>LOGO</h3>
            <div className="links">
                <h4>Product</h4>
                <Link to="/features">Features</Link>
                <Link to="/pricing">Pricing</Link>
            </div>
            <div className="links">
                <h4>Resources</h4>
                <Link to="/blog">Blog</Link>
                <Link to="/guidelines">User guides</Link>
                <Link to="/webinars">Webinars</Link>
            </div>
            <div className="links">
                <h4>Company</h4>
                <Link to="about">About us</Link>
                <Link to="contact-us">Contact us</Link>
            </div>
            <div className="news-letter">
                <h4>Subscribe to our newsletter</h4>
                <p>For product announcements and exclusive insights</p>
                <input type="email" />
                <button>Subscribe</button>
            </div>
        </footer>
    );
}

export default Footer;