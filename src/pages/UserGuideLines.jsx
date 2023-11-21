import React from 'react';
import './styles/UserGuidelines.css';

const UserGuidelines = () => {
    return (
        <main className='main-guidelines'>
            <h1>User Guidelines</h1>
            <div className='guidelines-content'>
                <p>Welcome to Learn Platform! Follow these guidelines for the best learning experience:</p>
                <ul>
                    <li>Respect fellow learners and instructors.</li>
                    <li>Engage in constructive discussions.</li>
                    <li>Complete assignments on time.</li>
                    <li>Ask questions and seek help when needed.</li>
                    <li>Keep your account information secure.</li>
                </ul>
            </div>
        </main>
    );
}

export default UserGuidelines;
