import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CalculatorPage = () => (
    <Layout>
        <SEO title="Calculator" />
        <h2>~*~ Calculator ~*~</h2>
        <Link  to="/">Go Home</Link>
    </Layout>
)

export default CalculatorPage