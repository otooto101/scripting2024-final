import React from 'react';
import '../assets/css/HeadingSection.css';
import HeaderImage from '../assets/media/headerimg.png';

function HeadingSection() {
    return (
        <div className="heading-section">
            <div className="heading-text">
                <h1>Welcome to ShMarketer</h1>
                <p>Achieve business growth and success with our expert marketing solutions tailored for you.</p>
            </div>
            <div className="heading-image">
                <img src={HeaderImage} alt="Marketer" />
            </div>
        </div>
    );
}

export default HeadingSection;
