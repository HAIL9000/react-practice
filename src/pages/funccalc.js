import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import calclutorStyles from "./calculator.module.css";

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

  function storeUserInput(input) {
    let updatedInput;
    if (operator) {
      updatedInput = rightOp + input;
      setRightOp(updatedInput);
    } else {
      updatedInput = leftOp + input;
      setLeftOp(updatedInput);
    }
    setDisplayIndex(updatedInput);
  }

  function doMath() {
    let numLeft = Number(leftOp);
    let numRight = Number(rightOp);
    let result;

    switch (operator) {
      case "+":
        result = numLeft + numRight;
        break;
      case "-":
        result = numLeft - numRight;
        break;
      case "x":
        result = numLeft * numRight;
        break;
      case "÷":
        result = numLeft / numRight;
        break;
      default:
        console.log("Operator error!!");
    }

    setLeftOp(result + "");
    setRightOp("");
    setDisplayIndex(result + "");
    setOperator("");
  }

  return (
    <div>
      <div>{displayIndex}</div>
      <CalcGrid
        storeUserInput={storeUserInput}
        operator={operator}
        setOperator={setOperator}
        clearInput={clearInput}
        doMath={doMath}
      />
    </div>
  );
}

function CalcGrid(props) {
  const { storeUserInput, setOperator, clearInput, doMath } = props;
  return (
    <div>
      <div>
        <GenButton id="1" handleClick={() => storeUserInput("1")} />
        <GenButton id="2" handleClick={() => storeUserInput("2")} />
        <GenButton id="3" handleClick={() => storeUserInput("3")} />
        <GenButton id="+" handleClick={() => setOperator("+")} />
      </div>
      <div>
        <GenButton id="4" handleClick={() => storeUserInput("4")} />
        <GenButton id="5" handleClick={() => storeUserInput("5")} />
        <GenButton id="6" handleClick={() => storeUserInput("6")} />
        <GenButton id="-" handleClick={() => setOperator("-")} />
      </div>
      <div>
        <GenButton id="7" handleClick={() => storeUserInput("7")} />
        <GenButton id="8" handleClick={() => storeUserInput("8")} />
        <GenButton id="9" handleClick={() => storeUserInput("9")} />
        <GenButton id="x" handleClick={() => setOperator("x")} />
      </div>
      <div>
        <GenButton id="0" handleClick={() => storeUserInput("0")} />
        <GenButton id="." handleClick={() => storeUserInput(".")} />
        <GenButton id="=" handleClick={() => doMath()} />
        <GenButton id="÷" handleClick={() => setOperator("÷")} />
      </div>
      <div>
        <GenButton id="CLEAR" handleClick={() => clearInput()} />
      </div>
    </div>
  );
}

function GenButton(props) {
  return (
    <button className={calclutorStyles.button} onClick={props.handleClick}>
      {props.id}
    </button>
  );
}

const CalculatorPagePart2 = () => (
  <Layout>
    <SEO title="Calculator Part 2" />
    <h2>~*~ Calculator Part 2~*~</h2>
    <Calculator />
    <Link to="/">Go Home</Link>
  </Layout>
);

export default CalculatorPagePart2;
