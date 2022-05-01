import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => {
  const {
    markdown: { posts },
  } = useStaticQuery(graphql`
    query GET_POSTS {
      markdown: allMarkdownRemark {
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
  `)

  return (
    <Layout>
      <Seo title="Home" />

      {posts.map(
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

export default IndexPage
