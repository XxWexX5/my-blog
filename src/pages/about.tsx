import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const AboutPage = () => {
  const {
    site: {
      siteMetadata: { title, description, author, siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="About" />

      <h1>About</h1>
    </Layout>
  )
}

export default AboutPage
