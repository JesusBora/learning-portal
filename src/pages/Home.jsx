import React from 'react';
import './styles/Home.css'
import VideoPlayer from '../components/common/VideoPlayer';
import Button from '../components/common/Button';
import { useNavigate  } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/join-us');
  };

  return (
    <main className='main-home'>
      <h1>Let's start learning</h1>
      <p className='desc'>Welcome to Learn Platform - where every day is a day to learn. Dive into the vast ocean of knowledge and empower yourself with the tools for a successful tomorrow. Happy learning!</p>
      <VideoPlayer videoPath="/videos/video1.mp4"/>
      <div className="joinus">
        <h2>Join us</h2>
        <p>Join our vibrant learning community at Learn Platform and embark on a journey of continuous knowledge and growth. Let's make every day a step closer to a brighter, more informed future. Start your learning adventure with us today!</p>
        <Button label="Click Me" onClick={handleButtonClick} className="custom-button" />
      </div>
    </main>
  );
}

export default Home;
