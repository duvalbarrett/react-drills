import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import Details from "./Details";

export default (
  <Routes>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/details" component={Details} />
  </Routes>
);