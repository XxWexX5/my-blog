import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const BlogList = props => {
  const postList = props.data.markdown.posts

  console.log(props)

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
