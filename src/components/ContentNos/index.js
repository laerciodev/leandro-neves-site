import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./styles.css"

const ContentNos = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            extension: { regex: "/(jpg)/" }
            sourceInstanceName: { eq: "content-nos" }
          }
        ) {
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
    `
  )

  const { node: imgNos } = allFile.edges[0]

  return (
    <main className="main-nos">
      <Img fluid={imgNos.childImageSharp.fluid} key={imgNos.id} />
      <p className="text-nos">
        agora estamos prontos para te escutar... nos conte e daremos início ao
        seu projeto.
      </p>
    </main>
  )
}

export default ContentNos
