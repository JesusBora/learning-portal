import React from 'react';
import './styles/ImageComponent.css'

function Image(props) {
    const { src, alt } = props;

    return <img src={process.env.PUBLIC_URL + src} alt={alt} />;
}

export default Image;
