import React from "react"

import links from "./content"

import * as Styled from "./styles"

const MenuLinks = () => (
  <Styled.MenuLinksWrapper>
    <Styled.MenuLinksList>
      {links.map((link, id) => (
        <Styled.MenuLinkItem key={id}>
          <Styled.MenuLink to={link.url} activeClassName="active">
            {link.label}
          </Styled.MenuLink>
        </Styled.MenuLinkItem>
      ))}
    </Styled.MenuLinksList>
  </Styled.MenuLinksWrapper>
)

export default MenuLinks
