import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Cafe() {
  const [catTracker, setCatTracker] = useState([]);
  const [catInput, setCatInput] = useState("");

  function giveTreat(catName) {
    const catIndex = catTracker.findIndex((x) => x.name === catName);

    if (catIndex === -1) {
      const newCat = {
        name: catName,
        treatCount: 1,
      };
      setCatTracker([...catTracker, newCat]);
    } else {
      const newCats = catTracker.map((cat, index) => {
        if (index === catIndex) {
          return { ...cat, treatCount: cat.treatCount + 1 };
        } else {
          return cat;
        }
      });
      setCatTracker(newCats);
    }
  }

  function getCount(catName) {
    let cat = catTracker.find((x) => x.name === catName);
    if (cat) {
      return cat.treatCount;
    } else {
      return 0;
    }
  }

  function registerCat(event) {
    event.preventDefault();
    const cat = {
      name: catInput,
      treatCount: 0,
    };
    const newCats = [...catTracker, cat];
    setCatTracker(newCats);
  }

  return (
    <div>
      <CatCreator
        onSubmit={registerCat}
        catInput={catInput}
        setCatInput={setCatInput}
      />
      {catTracker.map((cat) => {
        return (
          <Cat
            name={cat.name}
            treatCount={cat.treatCount}
            giveTreat={giveTreat}
          />
        );
      })}
    </div>
  );
}

function Cat(props) {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Treat Count: {props.treatCount}</div>
      <TreatButton handleClick={props.giveTreat} catName={props.name} />
    </div>
  );
}

function TreatButton(props) {
  const handleClick = () => {
    props.handleClick(props.catName);
  };
  return <button onClick={handleClick}>Give Treat!</button>;
}

function CatCreator(props) {
  return (
    <form onSubmit={(event) => props.onSubmit(event)}>
      <label>
        <p>Cat Name:</p>
        <input
          type="text"
          value={props.catInput}
          onChange={(event) => props.setCatInput(event.target.value)}
        />
      </label>
      <input type="submit" value="Register Cat" />
    </form>
  );
}

const CatPage = () => (
  <Layout>
    <SEO title="Cat Treat Cafe" />
    <h2>~*~ Cat Treat Cafe ~*~</h2>
    <Cafe />
    <Link to="/">Go Home</Link>
  </Layout>
);

export default CatPage;
