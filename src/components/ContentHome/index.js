import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import GalleryImageHome from './GalleryImageHome';

import "./styles.css";

const ContentHome = () => {
    
    const { allFile } = useStaticQuery(
        graphql`
            query {
                allFile(filter: {
    	            extension: { regex: "/(jpg)/" }
    	            sourceInstanceName: { eq: "content-home" }
  	            }) 
                {
                    edges {
                        node {
                            id
                            childImageSharp {
                            fixed(width: 165) {
                                ...GatsbyImageSharpFixed
                            }
                        } 
                    }
                }
            }
        }
        `
    );

    const sideImg = allFile.edges[0];

    return (
        <main className="container-content-home">
            <p className="content-home">
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet.
            </p>
            <div className="container-caption-image">
                <div className="caption">
                    <p className="p-caption">
                        A arquitetura têm o sensível papel de se apropriar 
                        da arte como expressão e reflexão de uma comunicação.
                    </p>
                </div>
                <Img
                    className="img-content-nome"
                    fixed={sideImg.node.childImageSharp.fixed}
                    id={sideImg.node.id}
                />
            </div>
            <GalleryImageHome />
        </main>
    )
};

export default ContentHome;