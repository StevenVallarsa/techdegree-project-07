import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import keys from "./config";
import Gallery from "./Gallery";
import Nav from "./Nav";

import SearchForm from "./SearchForm";

function App() {
  const handleSubmit = e => {
    console.log(e);
  };

  return (
    <Router>
      <div className="container">
        {/* <h1>Gallery App</h1> */}
        <SearchForm handleSubmit={handleSubmit} />
        <Nav />
        <Gallery />
      </div>
    </Router>
  );
}

export default App;
