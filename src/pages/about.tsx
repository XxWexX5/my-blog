import React from "react"

import { Link } from "gatsby"

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
  </Layout>
)

export default AboutPage
