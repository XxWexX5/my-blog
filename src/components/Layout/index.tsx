import * as React from "react"
import PropTypes from "prop-types"

import GlobalStyled from "../../styles/global-styles"
import * as Styled from "./styles"

import Profile from "../Profile"

const Layout = ({ children }) => {
  return (
    <>
      <Styled.LayoutWrapper>
        <aside>
          <Profile />
        </aside>
        <Styled.LayoutMain>{children}</Styled.LayoutMain>
      </Styled.LayoutWrapper>

      <GlobalStyled />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
