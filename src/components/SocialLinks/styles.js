import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-styled: none;
`

export const SocialLinkItem = styled.li`
  & + li {
    margin-left: 0.45rem;
  }
`

export const SocialLink = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &[title="Github"] {
    &:hover {
      color: #ffffff;
    }
  }

  &[title="Twitter"] {
    &:hover {
      color: #1fa1f2;
    }
  }

  &[title="Youtube"] {
    &:hover {
      color: #ee1c0d;
    }
  }

  &[title="Instagram"] {
    &:hover {
      color: #ab338e;
    }
  }

  &[title="Unsplash"] {
    &:hover {
      color: #ffffff;
    }
  }
`
export const IconWrapper = styled.div`
  fill: #bbbbbb;
  width: 30px;
  height: 30px;
`
