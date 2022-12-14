import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./Gallery";
import Nav from "./Nav";
import Error from "./Error";

import SearchForm from "./SearchForm";
import Start from "./Start";

function App(props) {
  const [searchTerm, setSearchTerm] = useState("");

  // This function is not used in this first iteration
  //  of the app as search term is provided by URL
  //  for Gallery.js component
  const handleSubmit = search => {
    setSearchTerm(search);
  };

  return (
    <Router>
      <div className="container">
        <SearchForm handleSubmit={handleSubmit} />
        <Nav />
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/search/:search" component={Gallery} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
