import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './styles.css'

const GalleryImageHome = () => {
    
    const { allFile, fullImage } = useStaticQuery(
        graphql`
        query {
                allFile(filter: {
    	            extension: { regex: "/(jpg)/" }
    	            sourceInstanceName: { eq: "gallery-home" }
  	            }) 
                {
                    edges {
                        node {
                            id
                            childImageSharp {
                            fixed(height: 110) {
                                ...GatsbyImageSharpFixed
                            }
                        } 
                    }
                }
            }

            fullImage: allFile(filter: { relativePath: { eq: "full-image-gallery.jpg" }}) {
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
    
    // pega todas as imagens, menos a última
    const imgs = allFile.edges.slice(0, -1);
    
    // get full image
    const imgFull = fullImage.edges[0];

    return (
        <>
            <section className="container-gallery-home">
                { imgs.map( img => (
                    <Img fixed={ img.node.childImageSharp.fixed } key={ img.node.id } />
                )) }
            </section>
            <Img fluid={ imgFull.node.childImageSharp.fluid } id={ imgFull.node.id } /> 
        </>
    )
};

export default GalleryImageHome;
