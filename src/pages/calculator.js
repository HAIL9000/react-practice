import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import calculatorStyles from "./calculator.module.css"

// Function syntax component
function CalcButton(props) {
    return(
        <button className={calculatorStyles.button} onClick={props.onClick}>
            {props.id}
        </button>
    )
}

// "Class" syntax component
class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: [[]],
            userInputCount: 0,
        };
    }

    handleClick(id) {
        const userInput = this.state.userInput
        const userInputCount = this.state.userInputCount

        const operators = ["+","-","x","÷","="]

        if(id === "CLEAR"){
            this.setState(
                {
                    userInput: [[]],
                    userInputCount: 0,
                }
            );

        } else if(operators.includes(id)) {
            userInput.push([id])
            userInput.push([])
            this.setState(
                {
                    userInput: userInput,
                    userInputCount: userInputCount + 2,
                }
            )

        } else {
            userInput[userInputCount].push(id)
            this.setState(
                {
                    userInput: userInput,
                    userInputCount: userInputCount,
                }
            );
        }
    }

    renderButton(id) {
        return (
            <CalcButton
                id={id}
                onClick= {() => this.handleClick(id)}
            />
        );
    }

    render() {
        const currentInput = this.state.userInput[this.state.userInputCount]
        const screen = "Input: " + currentInput.join('')
        return(
            <div>
                {screen}
                <div>
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                    {this.renderButton('+')}
                </div>
                <div>
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton('-')}
                </div>
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                    {this.renderButton(9)}
                    {this.renderButton('x')}
                <div>
                </div>
                    {this.renderButton(0)}
                    {this.renderButton('.')}
                    {this.renderButton('=')}
                    {this.renderButton('÷')}
                <div>
                </div>
                    {this.renderButton('CLEAR')}
                <div>
                </div>
            </div>
        );
    }
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