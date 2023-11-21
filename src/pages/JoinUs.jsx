import React from 'react';
import { useNavigate } from 'react-router';
import './styles/JoinUs.css'
import Button from '../components/common/Button';
import ImageComponent from '../components/common/ImageComponent'

const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/registration')
    };

    return (
        <main>
            <h1>Join Us</h1>
            <div className="card">
                <div className="info">
                    <h2>Register as a trainer</h2>
                    <p>Unlock your potential as an educator and join our vibrant community as a trainer. Share your expertise, inspire others, and contribute to the journey of continuous learning. Register now and be a part of our mission to empower learners of all levels.</p>
                    <Button label="Join us" onClick={handleButtonClick} className="custom-button" />
                </div>
                <ImageComponent src="/images/trainer.png"/>
            </div>
            <div className="card">
                <div className="info">
                    <h2>Register as a student</h2>
                    <p>Embark on your educational journey with us and become a valued member of our learning community. Access a world of knowledge, engage with passionate educators, and take the first step towards a brighter future. Join us as a student, and let your learning adventure begin!</p>
                    <Button label="Join us" onClick={handleButtonClick} className="custom-button" />
                </div>
                <ImageComponent src="/images/student.jpeg"/>
            </div>
        </main>
    );
}

export default Home;
