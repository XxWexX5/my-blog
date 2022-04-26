import React from "react"

import * as Styled from "./styles"

const PostItem = () => (
  <Styled.PostItemLink to="/slug">
    <Styled.PostItemWrapper>
      <Styled.PostItemTag backgroundColor="#47650b" color="#FFFFFF">
        Misc
      </Styled.PostItemTag>

      <Styled.PostItemInfo>
        <Styled.PostItemDate>
          30 de Julho de 2019 • 4 min de leitura
        </Styled.PostItemDate>

        <Styled.PostItemTitle>
          Diga nao ao Medium: Tenha a sua propria plataforma
        </Styled.PostItemTitle>

        <Styled.PostItemDescription>
          Algumas razoes para voce ter a sua propria plataforma ao inves de
          solucoes como o Medium.
        </Styled.PostItemDescription>
      </Styled.PostItemInfo>
    </Styled.PostItemWrapper>
  </Styled.PostItemLink>
)

export default PostItem
