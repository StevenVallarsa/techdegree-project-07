import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route, useParams } from "react-router-dom";
import keys from "./config";
import Gallery from "./Gallery";
import Nav from "./Nav";

import SearchForm from "./SearchForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = search => {
    setSearchTerm(search);
  };

  return (
    <Router>
      <div className="container">
        {/* <h1>Gallery App</h1> */}
        <SearchForm handleSubmit={handleSubmit} />
        <Nav />
        <Switch>
          <Route path="/:search" component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
