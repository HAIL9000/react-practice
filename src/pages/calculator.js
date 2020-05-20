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
    );
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
        const userInput = this.state.userInput;
        const userInputCount = this.state.userInputCount;

        const operators = ["+","-","x","÷","="];

        // CLEAR case
        if(id === "CLEAR"){
            this.setState(
                {
                    userInput: [[]],
                    userInputCount: 0,
                }
            );

        // operator case
        } else if(operators.includes(id)) {
            // if the last entry was an operator, replace it rather
            // than pushing a new one on
            if(userInput.length > 1 && userInput[userInputCount].length === 0 && operators.includes(userInput[userInputCount - 1][0])) {
                userInput[userInputCount - 1] = [id]
                this.setState(
                    {
                        userInput: userInput,
                        userInputCount: userInputCount,
                    }
                );
            } else {
                userInput.push([id])
                userInput.push([])
                this.setState(
                    {
                        userInput: userInput,
                        userInputCount: userInputCount + 2,
                    }
                );
             }
        // number entry case
        } else {
            if (!(userInput[userInputCount].includes('.') && id === '.')) {
                userInput[userInputCount].push(id);
            }
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