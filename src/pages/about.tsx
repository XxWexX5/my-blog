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

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about" activeStyle={{ color: "#B22B27" }}>
            About
          </Link>
        </li>
      </ul>

      <div className="wrapper-info-page">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{author}</p>
        <Link to={siteUrl} target="_blank">
          {siteUrl}
        </Link>
      </div>
    </Layout>
  )
}

export default AboutPage
