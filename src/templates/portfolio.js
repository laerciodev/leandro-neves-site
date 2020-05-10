import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const query = graphql`
    query ($category: String) {
        allFile(filter: {
            extension: {regex: "/(jpg)/"},
            sourceInstanceName: {eq: $category}
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

const TemplatePortfolio = ({ pageContext: { category, queryPage } }) => {

    const { allFile } = useStaticQuery(queryPage);

    return (
        <>
            <Header />
            <main>{ category }</main>
            <Footer />
        </>
    )
};

export default TemplatePortfolio;