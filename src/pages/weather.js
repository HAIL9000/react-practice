import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function WeatherDisplay() {
  const city = "London";
  const country = "UK";
  //Don't forget to add this back in after pushing to GitHub
  const key = "";

  let [high, setHigh] = useState(null);
  let [low, setLow] = useState(null);
  let [currentTemp, setCurrentTemp] = useState(null);
  let [desc, setDesc] = useState("");

  async function getWeather() {
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`
    );
    const { main, weather } = await apiCall.json();

    setHigh(main.temp_max);
    setLow(main.temp_min);
    setCurrentTemp(main.temp);
    setDesc(weather[0].description);
  }

  return (
    <div>
      <div>London, UK</div>
      <div>High: {high}</div>
      <div>Low: {low}</div>
      <div>Current Temperature: {currentTemp}</div>
      <div>Weather Description: {desc}</div>
      <WeatherButton handleClick={getWeather} />
    </div>
  );
}

function WeatherButton(props) {
  return <button onClick={() => props.handleClick()}>Get Weather</button>;
}

const WeatherPage = () => (
  <Layout>
    <SEO title="Weather Forecast" />
    <h2>~*~ Weather Forecast ~*~</h2>
    <WeatherDisplay />
    <Link to="/">Go Home</Link>
  </Layout>
);

export default WeatherPage;
