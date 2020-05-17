import React, { useState } from 'react';
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

    const [labelImgs, setLabelImgs] = useState([
        'residência gb',
        'residência jl',
        'studio ac',
        'residência js',
        'residência lj',
        'residência wm',
        'residência vw',
        'apart cp',
        'suite js',
        'suite ms'
    ]);

    const renderImg = (img, index) =>
        <div className="container-img">
            <Img loading='auto' className="img-portfolio-template" fluid={img.node.childImageSharp.fluid} key={img.node.id} />
            <h3 className="h3-img-portfolio">{labelImgs[index]}</h3>
        </div>
    return (
        <>
            <Header />
            <main className="main-portfolio">
                <div className="container-imgs">
                    {imgs.map((img, index) => renderImg(img, index))}
                </div>
            </main>
            <Footer />
        </>
    )
};

export default TemplatePortfolio;