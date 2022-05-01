import React from "react"

import * as Styled from "./styles"

interface PaginationProps {
  isFirst: Boolean
  isLast: Boolean
  currentPage: number
  numPages: number
  prevPage: string
  nextPage: string
}

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}: PaginationProps) => (
  <Styled.PaginationWrapper>
    {!isFirst && (
      <Styled.PaginationLink to={prevPage}>
        ← Página Anterior
      </Styled.PaginationLink>
    )}

    <p>
      Página {currentPage} de {numPages} páginas
    </p>

    {!isLast && (
      <Styled.PaginationLink to={nextPage}>
        Próxima Página →
      </Styled.PaginationLink>
    )}
  </Styled.PaginationWrapper>
)

export default Pagination
