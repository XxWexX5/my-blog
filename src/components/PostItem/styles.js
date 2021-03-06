import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  display: block;
  color: #8899a6;
  text-decoration: none;

  &:hover {
    color: #1fa1f2;
  }
`

export const PostItemWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #38444d;
  padding: 2rem 3rem;
`

export const PostItemTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor || "#1fa1f2"};
  border-radius: 50%;
  color: ${({ color }) => color || "#FFFFFF"};
  font-size: 1.3rem;
  font-weight: bold;
  min-width: 90px;
  min-height: 90px;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
