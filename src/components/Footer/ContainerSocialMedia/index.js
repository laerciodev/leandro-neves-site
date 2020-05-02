import React from "react"
import IconFacebook from "../../../static/assets/img/svg/facebook.inline.svg"
import IconInstagram from "../../../static/assets/img/svg/instagram.inline.svg"
import IconPinterest from "../../../static/assets/img/svg/pinterest.inline.svg"
import "./styles.css"

const urlFacebook =
  "https://pt-br.facebook.com/pages/category/Architectural-Designer/Studio-Leandro-Neves-463078470453364/"

const urlInstagram = "https://www.instagram.com/studioleandroneves/?hl=pt-br"
const urlPinterest = "https://br.pinterest.com/StudioLN/"

const ContainerSocialMedia = () => {
  return (
    <div className="container-social-media">
      <a
        className="container-link"
        target="_blank"
        rel="noopener noreferrer"
        href={urlFacebook}
      >
        <IconFacebook className="icon-social-media" />
      </a>
      <a
        className="container-link"
        target="_blank"
        rel="noopener noreferrer"
        href={urlInstagram}
      >
        <IconInstagram className="icon-social-media" />
      </a>
      <a
        className="container-link"
        target="_blank"
        rel="noopener noreferrer"
        href={urlPinterest}
      >
        <IconPinterest className="icon-social-media" />
      </a>
    </div>
  )
}

export default ContainerSocialMedia
