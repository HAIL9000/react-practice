import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Cafe() {
    const [treatCount, setTreatCount] = useState(0);

    function giveTreat() {
        setTreatCount(treatCount + 1);
    }

    return <div>
        <Cat
            name="Atton"
            treatCount={treatCount}
        />
        <TreatButton
            handleClick={giveTreat}
        />
    </div>

}

function Cat(props) {
    return <div>
       <div>Name: {props.name}</div>
       <div>Treat Count: {props.treatCount}</div>
    </div>
}

function TreatButton(props) {
    const handleClick = () => {props.handleClick()}
    return <button
        onClick={handleClick}>
        Give Treat!
        </button>
}

const CatPage = () => (
    <Layout>
        <SEO title="Cat Treat Cafe" />
        <h2>~*~ Cat Treat Cafe ~*~</h2>
        <Cafe />
        <Link to="/">Go Home</Link>
    </Layout>
)

export default CatPage