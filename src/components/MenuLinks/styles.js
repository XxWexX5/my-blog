import styled from "styled-components"

import { Link } from "gatsby"

export const MenuLinksWrapper = styled.nav``

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinkItem = styled.li`
  padding: 0.5rem 0;
`

export const MenuLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &.active {
    color: #1fa1f2;
  }

  &:hover {
    color: #1fa1f2;
  }
`
