import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import calclutorStyles from "./calculator.module.css"

function Calculator() {

    const [leftOp, setLeftOp] = useState("");
    const [operator, setOperator] = useState(null);
    const [rightOp, setRightOp] = useState("");
    const [displayIndex, setDisplayIndex] = useState("");

    function clearInput() {
        setLeftOp("");
        setRightOp("");
        setDisplayIndex("");
        setOperator(null);
    }

    function storeUserInput(input){
        let updatedInput;
        if(operator) {
           updatedInput = rightOp + input;
           setRightOp(updatedInput);
        } else {
            updatedInput = leftOp + input;
            setLeftOp(updatedInput);
        }
        setDisplayIndex(updatedInput);
    }

    function doMath(){
        setLeftOp("");
        setRightOp("");
        setDisplayIndex("hewwo :3c");
        setOperator(null);
    }

    return <div>
                <div>{displayIndex}</div>
                <CalcGrid
                    storeUserInput={storeUserInput}
                    operator={operator}
                    setOperator={setOperator}
                    clearInput={clearInput}
                    doMath={doMath}
                />
            </div>

}

function CalcGrid(props) {
    const {storeUserInput, operator, setOperator, clearInput, doMath} = props
    return <div>
        <div>
            <NumButton
                id="1"
                onClick={storeUserInput}
            />
            <NumButton
                id="2"
                onClick={storeUserInput}
            />
            <NumButton
                id="3"
                onClick={storeUserInput}
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
                onClick={storeUserInput}
            />
            <NumButton
                id="5"
                onClick={storeUserInput}
            />
            <NumButton
                id="6"
                onClick={storeUserInput}
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
                onClick={storeUserInput}
            />
            <NumButton
                id="8"
                onClick={storeUserInput}
            />
            <NumButton
                id="9"
                onClick={storeUserInput}
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
                onClick={storeUserInput}
            />
            <NumButton
                id="."
                onClick={storeUserInput}
            />
            <GenButton
                id="="
                onClick={doMath}
            />
            <OpButton
                id="÷"
                onClick={setOperator}
                leftOp={operator}
            />
        </div>    
        <div>
            <GenButton
                id="CLEAR"
                onClick={clearInput}
            />
        </div>
    </div>

}

function NumButton(props) {
    const handleClick = () => {props.onClick(props.id)}
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

function GenButton(props) {
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