import React from 'react';
import ImageSlide from '../ImageSlide';
import './styles.css';

const Slider = () => {
    return (
        <div className="container-slider">
            <ImageSlide />
            <div className="container-controls">
                <a className="control-slide" href="#slide-1"></a>
                <a className="control-slide" href="#slide-2"></a>
                <a className="control-slide" href="#slide-3"></a>
                <a className="control-slide" href="#slide-4"></a>
                <a className="control-slide" href="#slide-5"></a>
            </div>
         </div>
    );
}

export default Slider;