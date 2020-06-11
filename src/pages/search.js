import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const fruits = [
  "apple",
  "pear",
  "orange",
  "peach",
  "strawberry",
  "lemon",
  "lime",
  "blueberry",
  "cranberry",
  "durian",
  "kiwi",
  "banana",
];

function Search() {
  let [input, setInput] = useState("");
  let [fruitMatches, setFruitMatches] = useState([]);

  function lookup(event) {
    setInput(event.target.value);
    const matches = fruits.filter(fruit => fruit.includes(input));
    setFruitMatches(matches);
  }

  return (
    <div>
      <SearchForm setInput={setInput} lookup={lookup} />
      {fruitMatches.map(fruit => {
        return <div>{fruit}</div>;
      })}
    </div>
  );
}

function SearchForm(props) {
  return (
    <form>
      <label>
        <input
          type="text"
          value={props.input}
          onChange={event => props.lookup(event)}
        />
      </label>
    </form>
  );
}

const SearchPage = () => (
  <Layout>
    <SEO title="Search Autocomplete" />
    <h2>~*~ Search Autocomplete ~*~</h2>
    <Search />
    <Link to="/">Go Home</Link>
  </Layout>
);

export default SearchPage;
