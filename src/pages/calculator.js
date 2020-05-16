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
            userInput: [],
        };
    }

    handleClick(id) {
        const userInput = this.state.userInput
        userInput.push(id)

        if(id === "CLEAR"){
            this.setState(
                {
                    userInput: [],
                }
            );

        } else {
            this.setState(
                {
                    userInput: userInput,
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
        const screen = "Input: " + this.state.userInput.join('')
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