import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './styles.css';

const Project = () => {

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
                          fluid(maxWidth: 340) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                }
            }
        `
    );

    const imgResidencial = allFile.edges;

    const photos= () => console.log(imgResidencial);

    return (
        <div className="project">
            <button onClick={photos}>Fotos</button>
            <div className="img-project"></div>
            <div className="title-project"></div>
        </div>
    )

}
    
export default Project;