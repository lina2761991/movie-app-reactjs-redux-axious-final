import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import MovieCard from "./containers/MovieCard.js";
import ParentComponent from "./containers/ParentComponent.js";
import { BrowserRouter, Route } from "react-router-dom";
import ModalComponent from "./containers/ModalComponent";
import MovieDescription from "./containers/MovieDescription";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/home" component={ParentComponent} />
        <Route path="/moviedescription" component={MovieDescription} />
      </div>
    </BrowserRouter>
  );
}

export default App;
