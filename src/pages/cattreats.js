import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Cafe() {
  const [catTracker, setCatTracker] = useState([])
  const [catInput, setCatInput] = useState("")

  function giveTreat(catName) {
    const newCats = catTracker.map(cat => {
      if (cat.name === catName) {
        return { ...cat, treatCount: cat.treatCount + 1 }
      } else {
        return cat
      }
    })
    setCatTracker(newCats)
  }

  function getCount(catName) {
    let cat = catTracker.find(x => x.name === catName)
    if (cat) {
      return cat.treatCount
    } else {
      return 0
    }
  }

  function registerCat(event) {
    event.preventDefault()
    const cat = {
      name: catInput,
      treatCount: 0,
    }
    const newCats = [...catTracker, cat]
    setCatTracker(newCats)
  }

  function removeCat(catName) {
    const newCats = catTracker.filter(cat => cat.name !== catName)
    setCatTracker(newCats)
  }

  return (
    <div>
      Welcome to the Cat Treat Cafe! Please register your cat!
      <CatCreator
        onSubmit={registerCat}
        catInput={catInput}
        setCatInput={setCatInput}
      />
      <p>Cats currently dining with us.... </p>
      {catTracker.map(cat => {
        return (
          <Cat
            name={cat.name}
            treatCount={cat.treatCount}
            giveTreat={giveTreat}
            removeCat={removeCat}
          />
        )
      })}
    </div>
  )
}

function Cat(props) {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Treat Count: {props.treatCount}</div>
      <div>
        <TreatButton handleClick={props.giveTreat} catName={props.name}>
          Give Treat!
        </TreatButton>
      </div>
      <div>
        <TreatButton handleClick={props.removeCat} catName={props.name}>
          Send Home
        </TreatButton>
      </div>
    </div>
  )
}

function TreatButton(props) {
  const handleClick = () => {
    props.handleClick(props.catName)
  }
  return <button onClick={handleClick}>{props.children}</button>
}

function CatCreator(props) {
  return (
    <form onSubmit={event => props.onSubmit(event)}>
      <label>
        <input
          type="text"
          value={props.catInput}
          onChange={event => props.setCatInput(event.target.value)}
        />
      </label>
      <input type="submit" value="Register Cat" />
    </form>
  )
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
