import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
                        fluid(maxWidth: 172) {
                            srcWebp
                        }
                    }
                }
            }
        }
    }
`;

const TemplatePortfolio = ({ data: { allFile: { edges: imgs } } }) => {

    useEffect(() => console.log('imgs => ', imgs), []);

    return (
        <>
            <Header />
            <main>main</main>
            <Footer />
        </>
    )
};

export default TemplatePortfolio;