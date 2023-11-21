import React from 'react';
import './styles/AboutUs.css';

const AboutUs = () => {
    return (
        <main className="main">
            <h1>About Us</h1>
            <p>Welcome to the 'About Us' section of the Learn Platform, where we aim to provide you with a deeper understanding of our philosophy, values, and mission. Established in 2023, Learn Platform was born out of a passion for learning and a belief in the power of knowledge to transform lives.</p>
            <img src="/images/AboutUs.jpg" alt="" />
            <div className="team">
                <div className="part">
                    <h2>Our Team</h2>
                    <p>Me the team behind this project.</p>
                </div>
                <div className="part">
                    <img src="/images/FrontEnd.jpg" alt="" />
                    <h3>John Doe</h3>
                    <p>Front end developer</p>
                </div>
                <div className="part">
                    <img src="/images/BackEnd.jpg" alt="" />
                    <h3>John Doe</h3>
                    <p>Back end developer</p>
                </div>
                <div className="part">
                    <img src="/images/UxUi.jpg" alt="" />
                    <h3>John Doe</h3>
                    <p>UX/UI designer</p>
                </div>
            </div>
        </main>
    );
}

export default AboutUs;