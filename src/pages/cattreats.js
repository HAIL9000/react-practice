import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Cafe() {
    const [catTracker, setCatTracker] = useState([]);

    function giveTreat(catName) {
        let catIndex = catTracker.findIndex(x => x.name === catName);
        let cats = catTracker;

        if(catIndex === -1) {
            let newCat = {
                name: catName,
                treatCount: 0
            }
            cats.push(newCat);
            setCatTracker(cats);
        } else {
            let cat = cats[catIndex];
            cat.treatCount = cat.treatCount + 1;
            cats[catIndex] = cat;
            setCatTracker(cats);
        }
    }

    function getCount(catName) {
        let cat = catTracker.find(x => x.name === catName);
        if(cat) {
            return cat.treatCount;
        } else {
            return 0;
        }
    }

    return <div>
        <Cat
            name="Atton"
            treatCount={getCount("Atton")}
        />
        <TreatButton
            handleClick={giveTreat}
            catName="Atton"
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
    const handleClick = () => {props.handleClick(props.catName)}
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