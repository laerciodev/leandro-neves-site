import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImageSlide = () => {
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

    const length = allFile.edges.length - 1;
    
    const handleNext = () =>  {
        index === length ? setIndex(0) : setIndex(index + 1) 
    };
    const handlePrev = () => { 
        index === 0 ? setIndex(length) : setIndex(index - 1)
    };
    
    const { node } = allFile.edges[index]; 

    const initEffect = () => {
        setTimeout(handleNext, 2000);
    }

    // useEffect(initEffect, [index]);
    // useEffect(() => {console.log('willunmount')}, []);

    return (
        <div>
            <div>
                <Img 
                    fluid={node.childImageSharp.fluid}
                    key={node.id}
                />
            </div>
        </div>
    );
}

export default ImageSlide;