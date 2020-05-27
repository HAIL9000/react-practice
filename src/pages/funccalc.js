import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import calculatorStyles from "./calculator.module.css"
import CalculatorPage from "./calculator"

function Calculator() {
    const [userInput, setUserInput] = useState("");
    const [userInputCount, setUserInputCount] = useState(0);
    const [displayIndex, setDisplayIndex] = useState(0);

    return <CalcGrid setUserInput={setUserInput} userInput={userInput}/>
}

function CalcGrid(props) {
    const {setUserInput, userInput} = props
    return <div>
        <div>
            <CalcButton
                id="1"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="2"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="3"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="+"
                onClick={setUserInput}
                userInput={userInput}
            />
        </div>
        <div>
            <CalcButton
                id="4"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="5"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="6"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="-"
                onClick={setUserInput}
                userInput={userInput}
            />
        </div>    
        <div>
            <CalcButton
                id="7"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="8"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="9"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="x"
                onClick={setUserInput}
                userInput={userInput}
            />
        </div>    
        <div>
            <CalcButton
                id="0"
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="."
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="="
                onClick={setUserInput}
                userInput={userInput}
            />
            <CalcButton
                id="÷"
                onClick={setUserInput}
                userInput={userInput}
            />
        </div>    
        <div>
            <CalcButton
                id="CLEAR"
                onClick={setUserInput}
                userInput={userInput}
            />
        </div>
    </div>

}

function CalcButton(props) {
    const handleClick = () => {props.onClick(props.userInput + props.id)}
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