import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CatPage = () => (
    <Layout>
        <SEO title="Cat Treat Cafe" />
        <h2>~*~ Cat Treat Cafe ~*~</h2>
        <Link to="/">Go Home</Link>
    </Layout>
)

export default CatPage