import React from "react"

import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
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

    <StaticQuery
      query={graphql`
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
      `}
      render={({
        site: {
          siteMetadata: { title, description, author, siteUrl },
        },
      }) => (
        <div className="wrapper-info-page">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{author}</p>
          <Link to={siteUrl} target="_blank">
            {siteUrl}
          </Link>
        </div>
      )}
    />
  </Layout>
)

export default AboutPage
