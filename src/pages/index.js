import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function ListItem({children}) {
  return(
    <li style= {{ marginLeft: `3rem` }}>
      {children}
    </li>
  )
}

function MarqueeCat({children}) {
  return(
    <marquee>
        ~*~ {children} ₍⸍⸌̣ʷ̣̫⸍̣⸌₎ ~*~
    </marquee>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MarqueeCat>Welcome!!</MarqueeCat>
    <p>Hello! I'm trying to learn a little bit about React so I'm doing some small projects on
      this website so I can practice. I hope you enjoy your stay!!
    </p>
    <h3>~*~ Project Index ~*~</h3>
    <ListItem>
      <Link to="/calculator/">Calculator</Link>
    </ListItem>
    <ListItem>
      <Link to="/funccalc/">Calculator 2</Link> - a better designed calculator
    </ListItem>
  </Layout>
)

export default IndexPage
