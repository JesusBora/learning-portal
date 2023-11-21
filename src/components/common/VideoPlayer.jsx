import React from 'react';
import './styles/VideoPlayer.css'

function VideoPlayer(props) {
  return (
      <video controls width={props.width} height={props.height}>
        <source src={process.env.PUBLIC_URL + props.videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}

export default VideoPlayer;
