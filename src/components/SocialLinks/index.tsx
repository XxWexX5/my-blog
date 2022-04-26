import React from "react"

import Icons from "./Icons"
import links from "./content"

import * as Styled from "./styles"

const SocialLinks = () => (
  <Styled.SocialLinksWrapper>
    <Styled.SocialLinksList>
      {links.map((link, id) => {
        const Icon = Icons[link.label]

        return (
          <Styled.SocialLinkItem key={id}>
            <Styled.SocialLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Styled.IconWrapper>
                <Icon />
              </Styled.IconWrapper>
            </Styled.SocialLink>
          </Styled.SocialLinkItem>
        )
      })}
    </Styled.SocialLinksList>
  </Styled.SocialLinksWrapper>
)

export default SocialLinks
