import * as React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home</h1>

    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "#B22B27" }}>
          Home
        </Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
