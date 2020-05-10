import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import './styles.css';

const ContentPortfolio = () => {

    const { allFile } = useStaticQuery(
        graphql`
          query {
            allFile(filter: {
                extension: {regex: "/(jpg)/"},
                sourceInstanceName: {eq: "content-portfolio"}
              }) {
                edges {
                  node {
                    id
                    childImageSharp {
                      fluid(maxWidth: 172, quality:100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
            }
          }
        `
    );
    
   
    const { edges: imgsPortfolio } = allFile;
    const labels = ['residencial', 'comercial', 'consultoria'];

    const renderItemPortfolio = (item, index) => (
        <Link className="container-portfolio" key={index} to={`/portfolio/${labels[index]}`}>
          <picture>
              <img className="img-portfolio" src={item.node.childImageSharp.fluid.src} />
          </picture>
          <h2 className="title-item-portfolio">{ labels[index] }</h2>
        </Link> 
    );
    
    return (
        <main className="portfolio">
            { imgsPortfolio.map(
                (item, index) => renderItemPortfolio(item, index)
            ) }
        </main>
    )
};

export default ContentPortfolio;