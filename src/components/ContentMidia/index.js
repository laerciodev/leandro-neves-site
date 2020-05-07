import React from 'react';
import {useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import './styles.css';

const ContentMidia = () => {
    const { allFile } = useStaticQuery(
        graphql`
          query {
            allFile(
              filter: {
                extension: { regex: "/(jpg)/" }
                sourceInstanceName: { eq: "content-midia" }
              }
            ) {
              edges {
                node {
                  id
                  childImageSharp {
                    fluid(maxWidth: 165, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        `
    );

    const { edges: imgsMidia } = allFile;

    const renderItemImg = item => (
        <Img className="img-midia" fluid={item.node.childImageSharp.fluid} key={item.node.id} />
    );

    return (
        <main className="midia">
            { imgsMidia.map(img => renderItemImg(img) ) }
        </main>
    )
}

export default ContentMidia;