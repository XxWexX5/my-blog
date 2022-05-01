import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"
import Pagination from "../components/Pagination"

const BlogList = props => {
  const postList = props.data.markdown.posts

  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <Seo title="Home" />

      {postList.map(
        ({
          post: {
            id,
            timeToRead,
            frontmatter: { category, title, description, date, background },
            fields: { slug },
          },
        }) => (
          <PostItem
            key={id}
            backgroundColor={background}
            color=""
            slug={slug}
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
          />
        )
      )}

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query GET_POSTS($skip: Int!, $limit: Int!) {
    markdown: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: $limit
      skip: $skip
    ) {
      posts: edges {
        post: node {
          ...POST
        }
      }
    }
  }

  fragment POST on MarkdownRemark {
    id
    timeToRead
    frontmatter {
      category
      title
      description
      date(locale: "pt-br", formatString: "DD [de] MMMM YYYY")
      background
    }
    fields {
      slug
    }
  }
`

export default BlogList
