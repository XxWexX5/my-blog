import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as Styled from "./styles"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "image-profile.jpeg" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <Styled.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar
