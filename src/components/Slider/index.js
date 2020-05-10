import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ContainerSlides from './ContainerSlides';
import SlideControl from './SlideControl';
import './styles.css';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const { allFile } = useStaticQuery(
        graphql`
            query {
                allFile(filter: {
    	            extension: { regex: "/(jpg)/" }
    	            sourceInstanceName: { eq: "slides" }
  	            }) 
                {
                    edges {
                        node {
                            id
                            childImageSharp {
                            fluid(maxWidth: 768) {
                                ...GatsbyImageSharpFluid
                            }
                        } 
                    }
                }
            }
        }
        `
    );

    const { edges: slides } = allFile;

    const handleNext = () =>  {
        index === (slides.length - 1) ? setIndex(0) : setIndex(index + 1);
    };
    
    const initEffect = () => {
        const timeout = setTimeout(handleNext, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }

    useEffect(initEffect, [index]);
    
    const verImagens = () => {
        console.log(slides);
    }

    const renderImg = (img, indexImg) => (
        <picture key={indexImg}  className="item-slider picture">
            <img className="img-slider" src={ slides[indexImg].node.childImageSharp.fluid.src } alt={`imagem ${index}`} />
        </picture>
    );

    const renderControls = () => {
        const controls = [];

        for(let i = 0; i < slides.length; i++) {
            controls.push(
                <SlideControl
                    key={i} 
                    active={index === i ? 'true' : 'false'}
                    to={`/#slide-${i}`}>
                </SlideControl>
            );
        }

        return controls;
    }

    return (
        <>
            <ContainerSlides index={index}>
                { slides.map((slide, index) => renderImg(slide, index))}
            </ContainerSlides>
            <div className="container-controls">
               { renderControls() }
            </div>
        </>
    );

}

export default Slider;