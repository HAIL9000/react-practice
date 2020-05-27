import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import calclutorStyles from "./calculator.module.css"

function Calculator() {

    const [userInput, setUserInput] = useState("");
    const [operator, setOperator] = useState(null);

    return <CalcGrid
                setUserInput={setUserInput}
                userInput={userInput}
                operator={operator}
                setOperator={setOperator}
            />
}

function CalcGrid(props) {
    const {setUserInput, userInput, operator, setOperator} = props
    return <div>
        <div>
            <NumButton
                id="1"
                onClick={setUserInput}
                userInput={userInput}
            />
            <NumButton
                id="2"
                onClick={setUserInput}
                userInput={userInput}
            />
            <NumButton
                id="3"
                onClick={setUserInput}
                userInput={userInput}
            />
            <OpButton
                id="+"
                onClick={setOperator}
                userInput={operator}
            />
        </div>
        <div>
            <NumButton
                id="4"
                onClick={setUserInput}
                userInput={userInput}
            />
            <NumButton
                id="5"
                onClick={setUserInput}
                userInput={userInput}
            />
            <NumButton
                id="6"
                onClick={setUserInput}
                userInput={userInput}
            />
            <OpButton
                id="-"
                onClick={setOperator}
                userInput={operator}
            />
        </div>    
        <div>
            <NumButton
                id="7"
                onClick={setUserInput}
                userInput={userInput}
            />
            <NumButton
                id="8"
                onClick={setUserInput}
                userInput={userInput}
            />
            <NumButton
                id="9"
                onClick={setUserInput}
                userInput={userInput}
            />
            <OpButton
                id="x"
                onClick={setOperator}
                userInput={operator}
            />
        </div>    
        <div>
            <NumButton
                id="0"
                onClick={setUserInput}
                userInput={userInput}
            />
            <NumButton
                id="."
                onClick={setUserInput}
                userInput={userInput}
            />
            <OpButton
                id="="
                onClick={setOperator}
                userInput={operator}
            />
            <OpButton
                id="÷"
                onClick={setOperator}
                userInput={operator}
            />
        </div>    
        <div>
            <NumButton
                id="CLEAR"
                onClick={setUserInput}
                userInput={userInput}
            />
        </div>
    </div>

}

function NumButton(props) {
    const handleClick = () => {props.onClick(props.userInput + props.id)}
    return <button
             className={calclutorStyles.button}
             onClick={handleClick}>
             {props.id}
           </button>
}

function OpButton(props) {
    const handleClick = () => {props.onClick(props.id)}
    return <button 
             className={calclutorStyles.button}
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