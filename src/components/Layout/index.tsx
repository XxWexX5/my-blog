import * as React from "react"
import PropTypes from "prop-types"

import { LayoutWrapper, LayoutMain } from "./styles"

import Profile from "../Profile"

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <aside>
        <Profile />
      </aside>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
