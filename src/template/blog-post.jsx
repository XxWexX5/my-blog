import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import * as Styled from "../components/Post/styles"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />

      <Styled.PostHeader>
        <Styled.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </Styled.PostDate>

        <Styled.PostTitle>{post.frontmatter.title}</Styled.PostTitle>

        <Styled.PostDescription>
          {post.frontmatter.description}
        </Styled.PostDescription>
      </Styled.PostHeader>

      <Styled.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Styled.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
    }
  }
`

export default BlogPost
