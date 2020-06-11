import React, { useState } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const WeatherPage = () => (
  <Layout>
    <SEO title="Weather Forecast" />
    <h2>~*~ Weather Forecast ~*~</h2>
    <Link to="/">Go Home</Link>
  </Layout>
);

export default WeatherPage;
