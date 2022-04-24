import * as React from "react"
import PropTypes from "prop-types"

import GlobalStyled from "../../styles/global-styles"
import { LayoutWrapper, LayoutMain } from "./styles"

import Profile from "../Profile"

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <aside>
          <Profile />
        </aside>
        <LayoutMain>{children}</LayoutMain>
      </LayoutWrapper>

      <GlobalStyled />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
