import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Search() {
  let [input, setInput] = useState("");

  return (
    <div>
      <SearchForm setInput={setInput} input={input} />
      User Input: {input}
    </div>
  );
}

function SearchForm(props) {
  return (
    <form onSubmit={() => props.setInput(props.Input)}>
      <label>
        <input
          type="text"
          value={props.input}
          onChange={event => props.setInput(event.target.value)}
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
