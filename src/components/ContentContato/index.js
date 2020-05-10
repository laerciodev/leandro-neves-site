import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./styles.css"

const ContentContato = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            extension: { regex: "/(jpg)/" }
            sourceInstanceName: { eq: "content-contato" }
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

  const { node: imgContato } = allFile.edges[0]

  return (
    <>
      <Img fluid={imgContato.childImageSharp.fluid} key={imgContato.id} />
      <h2 className="title-contact">contato</h2>
      <p className="text-contact">
        agora estamos prontos para te escutar nos conte e daremos início ao seu
        projeto.
      </p>
      <form className="form-contato">
        <label className="label">nome</label>
        <input className="input" placeholder="digite seu nome" type="text" />
        <label className="label">e-mail</label>
        <input
          className="input"
          placeholder="seuemail@exemplo.com"
          type="email"
        />
        <label className="label">mensagem</label>
        <textarea
          placeholder="deixa a sua mensagem"
          className="input textarea"
        ></textarea>
        <button className="send-button">enviar</button>
      </form>
    </>
  )
}

export default ContentContato
