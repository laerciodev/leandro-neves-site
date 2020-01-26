import React from 'react';
import ImageSlide from '../ImageSlide';
import './styles.css';

const Slider = () => (
    <div className="container-slider">
        <ImageSlide />
        {/* <div className="slides">
            <div id="slide-2" className="slide">2</div>
            <div id="slide-3" className="slide">3</div>
            <div id="slide-4" className="slide">4</div>
            <div id="slide-5" className="slide">5</div>
        </div> */}
        <div className="container-controls">
            <a className="control-slide" href="#slide-1"></a>
            <a className="control-slide" href="#slide-2"></a>
            <a className="control-slide" href="#slide-3"></a>
            <a className="control-slide" href="#slide-4"></a>
            <a className="control-slide" href="#slide-5"></a>
        </div>
    </div>
);

export default Slider;