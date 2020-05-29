import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import calclutorStyles from "./calculator.module.css"

function Calculator() {

    const [leftOp, setLeftOp] = useState("");
    const [operator, setOperator] = useState(null);

    return <CalcGrid
                setLeftOp={setLeftOp}
                leftOp={leftOp}
                operator={operator}
                setOperator={setOperator}
                clearInput={clearInput}
            />

    function clearInput() {
        setLeftOp("");
        setOperator(null);
    }
}

function CalcGrid(props) {
    const {setLeftOp, leftOp, operator, setOperator, clearInput} = props
    return <div>
        <div>
            <NumButton
                id="1"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <NumButton
                id="2"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <NumButton
                id="3"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <OpButton
                id="+"
                onClick={setOperator}
                leftOp={operator}
            />
        </div>
        <div>
            <NumButton
                id="4"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <NumButton
                id="5"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <NumButton
                id="6"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <OpButton
                id="-"
                onClick={setOperator}
                leftOp={operator}
            />
        </div>    
        <div>
            <NumButton
                id="7"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <NumButton
                id="8"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <NumButton
                id="9"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <OpButton
                id="x"
                onClick={setOperator}
                leftOp={operator}
            />
        </div>    
        <div>
            <NumButton
                id="0"
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <NumButton
                id="."
                onClick={setLeftOp}
                leftOp={leftOp}
            />
            <OpButton
                id="="
                onClick={setOperator}
                leftOp={operator}
            />
            <OpButton
                id="÷"
                onClick={setOperator}
                leftOp={operator}
            />
        </div>    
        <div>
            <ClearButton
                id="CLEAR"
                onClick={clearInput}
            />
        </div>
    </div>

}

function NumButton(props) {
    const handleClick = () => {props.onClick(props.leftOp + props.id)}
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

function ClearButton(props) {
    const handleClick = () => {props.onClick()}
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