import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import calculatorStyles from "./calculator.module.css"
import CalculatorPage from "./calculator"

function Calculator() {
    const [userInput, setUserInput] = useState([[]]);
    const [userInputCount, setUserInputCount] = useState(0);
    const [displayIndex, setDisplayIndex] = useState(0);

    return <CalcGrid setUserInput={setUserInput}/>
}

function CalcGrid(props) {
    const {setUserInput} = props
    return <div>
        <div>
            <CalcButton
                id="1"
                onClick={setUserInput}
            />
            <CalcButton
                id="2"
            />
            <CalcButton
                id="3"
            />
            <CalcButton
                id="+"
            />
        </div>
        <div>
            <CalcButton
                id="4"
            />
            <CalcButton
                id="5"
            />
            <CalcButton
                id="6"
            />
            <CalcButton
                id="-"
            />
        </div>    
        <div>
            <CalcButton
                id="7"
            />
            <CalcButton
                id="8"
            />
            <CalcButton
                id="9"
            />
            <CalcButton
                id="x"
            />
        </div>    
        <div>
            <CalcButton
                id="0"
            />
            <CalcButton
                id="."
            />
            <CalcButton
                id="="
            />
            <CalcButton
                id="÷"
            />
        </div>    
        <div>
            <CalcButton
                id="CLEAR"
            />
        </div>
    </div>

}

function CalcButton(props) {
    const handleClick = () => {props.onClick(props.id)}
    return <button 
             className={calculatorStyles.button}
             onClick={handleClick}>
             {props.id}
           </button>
}

const CalculatorPagePart2 = () => (
    <Layout>
        <SEO title="Calculator Part 2" />
        <h2>~*~ Calculator Part 2~*~</h2>
        <Calculator />
        <Link  to="/">Go Home</Link>
    </Layout>
)

export default CalculatorPagePart2