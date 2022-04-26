import React from "react"

import Profile from "../Profile"
import SocialLink from "../SocialLinks"

import * as Styled from "./styles"

const Sidebar = () => (
  <Styled.SidebarWrapper>
    <Profile />
    <SocialLink />
  </Styled.SidebarWrapper>
)

export default Sidebar
