import React from "react"

import * as Styled from "./styles"

import { Home as IconHome } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as IconSearch } from "@styled-icons/boxicons-regular/SearchAlt2"
import { Bulb as IconLight } from "@styled-icons/boxicons-regular/Bulb"
import { Grid as IconGrid } from "@styled-icons/boxicons-solid/Grid"
import { UpArrowAlt as IconArrow } from "@styled-icons/boxicons-regular/UpArrowAlt"

const MenuBar = () => (
  <Styled.MenuBarWrapper>
    <Styled.MenuBarGroup>
      <Styled.MenuBarLink to="/" title="Voltar para Home">
        <Styled.MenuBarItem>
          <IconHome />
        </Styled.MenuBarItem>
      </Styled.MenuBarLink>

      <Styled.MenuBarLink to="/search" title="Pesquisar">
        <Styled.MenuBarItem>
          <IconSearch />
        </Styled.MenuBarItem>
      </Styled.MenuBarLink>
    </Styled.MenuBarGroup>

    <Styled.MenuBarGroup>
      <Styled.MenuBarItem title="Mudar o tema">
        <IconLight />
      </Styled.MenuBarItem>

      <Styled.MenuBarItem title="Mudar visualização">
        <IconGrid />
      </Styled.MenuBarItem>

      <Styled.MenuBarItem title="Ir para o topo">
        <IconArrow />
      </Styled.MenuBarItem>
    </Styled.MenuBarGroup>
  </Styled.MenuBarWrapper>
)

export default MenuBar
