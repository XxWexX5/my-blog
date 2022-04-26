import React from "react"

import * as Styled from "./styles"

interface PostProps {
  slug: string
  backgroundColor?: string
  color?: string
  category: string
  date: string
  timeToRead: string
  title: string
  description: string
}

const PostItem = ({
  slug,
  backgroundColor,
  color,
  category,
  date,
  timeToRead,
  title,
  description,
}: PostProps) => (
  <Styled.PostItemLink to={slug}>
    <Styled.PostItemWrapper>
      <Styled.PostItemTag backgroundColor={backgroundColor} color={color}>
        {category}
      </Styled.PostItemTag>

      <Styled.PostItemInfo>
        <Styled.PostItemDate>
          {date} • {timeToRead} min de leitura
        </Styled.PostItemDate>

        <Styled.PostItemTitle>{title}</Styled.PostItemTitle>

        <Styled.PostItemDescription>{description}</Styled.PostItemDescription>
      </Styled.PostItemInfo>
    </Styled.PostItemWrapper>
  </Styled.PostItemLink>
)

export default PostItem
