import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './portfolio.css';

export const query = graphql`
    query ($queryPage: String) {
        allFile(filter: {
            extension: {regex: "/(jpg)/"},
            sourceInstanceName: {eq: $queryPage}
        }) {
            edges {
                node {
                    id
                    childImageSharp {
                        fluid(maxWidth: 768, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;

const TemplatePortfolio = ({ data: { allFile: { edges: imgs } } }) => {

    useEffect(() => console.log('imgs => ', imgs), []);

    const renderImg = img =>
        <div className="container-img">
            <Img loading='auto' className="img-portfolio-template" fluid={img.node.childImageSharp.fluid} key={img.node.id} />
            <h3 className="h3-img-portfolio">residencial</h3>
        </div>
    return (
        <>
            <Header />
            <main className="main-portfolio">
                <div className="container-imgs">
                    {imgs.map(img => renderImg(img))}
                </div>
            </main>
            <Footer />
        </>
    )
};

export default TemplatePortfolio;