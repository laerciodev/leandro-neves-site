import React from 'react';
import { Link } from 'gatsby';
import ImageSlide from '../ImageSlide';
import './styles.css';

const Slider = () => {
    return (
        <div className="container-slider">
            <ImageSlide />
            <div className="container-controls">
                <Link to="/#slide-1" className="control-slide"></Link>
                <Link to="/#slide-2" className="control-slide"></Link>
                <Link to="/#slide-3" className="control-slide"></Link>
                <Link to="/#slide-4" className="control-slide"></Link>
                <Link to="/#slide-5" className="control-slide"></Link>
            </div>
         </div>
    );
}

export default Slider;