import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import calculatorStyles from "./calculator.module.css"

function CalcButton(props) {
    return(
        <button className={calculatorStyles.button}>
            {props.children}
        </button>
    )
}

function Calculator() {
    return(
        <div>
            <div>
                <CalcButton>1</CalcButton>
                <CalcButton>2</CalcButton>
                <CalcButton>3</CalcButton>
            </div>
            <div>
                <CalcButton>4</CalcButton>
                <CalcButton>5</CalcButton>
                <CalcButton>6</CalcButton>
            </div>
            <div>
                <CalcButton>7</CalcButton>
                <CalcButton>8</CalcButton>
                <CalcButton>9</CalcButton>
            </div>
        </div>
    )
}

const CalculatorPage = () => (
    <Layout>
        <SEO title="Calculator" />
        <h2>~*~ Calculator ~*~</h2>
        <Calculator />
        <Link  to="/">Go Home</Link>
    </Layout>
)

export default CalculatorPage