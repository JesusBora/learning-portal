import React from 'react';
import './styles/Features.css';

const Features = () => {
    return (
        <main className="main">
            <h1>Features</h1>
            <div className="cards">
                <div className="feature-card">
                    <h3>Interactive Learning</h3>
                    <p>Engage in hands-on activities and quizzes to enhance your learning experience.</p>
                </div>
                <div className="feature-card">
                    <h3>Personalized Curriculum</h3>
                    <p>Customize your learning path based on your interests and goals with our adaptive curriculum.</p>
                </div>
                <div className="feature-card">
                    <h3>Expert Instructors</h3>
                    <p>Learn from industry experts and experienced instructors dedicated to your success.</p>
                </div>
                <div className="feature-card">
                    <h3>Collaborative Community</h3>
                    <p>Connect with fellow learners, join discussions, and collaborate on projects.</p>
                </div>
                <div className="feature-card">
                    <h3>Resource Library</h3>
                    <p>Access a vast library of resources, including articles, videos, and study materials.</p>
                </div>
                <div className="feature-card">
                    <h3>Progress Tracking</h3>
                    <p>Monitor your progress and receive insights to optimize your learning journey.</p>
                </div>
            </div>
        </main>
    );
}

export default Features;
