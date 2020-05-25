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
            displayIndex: 0,
        };
    }

    handleClick(id) {
        let userInput = this.state.userInput;
        let userInputCount = this.state.userInputCount;

        const operators = ["+","-","x","÷"];

        // CLEAR case
        if(id === "CLEAR"){
            this.setState(
                {
                    userInput: [[]],
                    userInputCount: 0,
                    displayIndex: 0,
                }
            );

        // = case
        } else if(id === "=") {
            if(userInput.length === 3){
                userInput = doMath(userInput)
                userInputCount = 0;
                this.setState(
                    {
                        userInput: userInput,
                        userInputCount: userInputCount,
                        displayIndex: userInputCount,
                    }
                );
            }
        // all other operators case
        } else if(operators.includes(id)) {
            // if the user input is three long, we have two numbers and an operator
            // so do some math and condense
            if(userInput.length === 3){
                userInput = doMath(userInput)
                userInputCount = 0;
                this.setState(
                    {
                        userInput: userInput,
                        userInputCount: userInputCount,
                        displayIndex: userInputCount,
                    }
                );
            }

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
                    displayIndex: userInputCount,
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
        const currentInput = this.state.userInput[this.state.displayIndex]
        const screen = currentInput.join('')
        return(
            <div className={calculatorStyles.calcBackground}>
                <div className={calculatorStyles.screen}>
                    <div style={{'margin-left' : '10px'}}>
                        {screen}
                    </div>
                </div>
                <div className={calculatorStyles.buttonRow}>
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                    {this.renderButton(3)}
                    {this.renderButton('+')}
                </div>
                <div className={calculatorStyles.buttonRow}>
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                    {this.renderButton(6)}
                    {this.renderButton('-')}
                </div>
                <div className={calculatorStyles.buttonRow}>
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                    {this.renderButton(9)}
                    {this.renderButton('x')}
                </div>
                <div className={calculatorStyles.buttonRow}>
                    {this.renderButton(0)}
                    {this.renderButton('.')}
                    {this.renderButton('=')}
                    {this.renderButton('÷')}
                </div>
                <div style={{'margin-left': '65%'}}>
                    {this.renderButton('CLEAR')}
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

// actually preform math operation on calcualtor input
// returns an updated user input data structure for the
// calculator to update its state with
function doMath(input) {
    const left = Number(input[0].join(""));
    const operation = input[1][0];
    const right = Number(input[2].join(""));

    let result = 0;

    switch(operation){
        case "+":
            result = left + right;
            break;
        case "-":
            result = left - right;
            break;
        case "x":
            result = left * right;
            break;
        case "÷":
            result = left / right;
            break;
        default:
            // we should never get here
    }

    const arrayResult = (result + "").split("")
    return [arrayResult];

}

export default CalculatorPage