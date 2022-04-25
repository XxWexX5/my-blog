import React from "react"

import Avatar from "../Avatar"

import * as Styled from "./styles"

const Profile = () => (
  <Styled.ProfileWrapper className="wrapper-profile">
    <Styled.ProfileLink to="/">
      <Avatar />

      <Styled.ProfileAuthor className="title">
        Wevison
        <Styled.ProfilePosition className="subtitle">
          Front-end Developer
        </Styled.ProfilePosition>
      </Styled.ProfileAuthor>
    </Styled.ProfileLink>

    <Styled.ProfileDescription className="descript">
      A great developer.
    </Styled.ProfileDescription>
  </Styled.ProfileWrapper>
)

export default Profile
