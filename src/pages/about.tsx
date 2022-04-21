import React from "react"

import { Link } from "gatsby"

const AboutPage = () => (
  <>
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
  </>
)

export default AboutPage
