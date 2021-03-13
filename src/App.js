import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/blog" component={Blog} exact />
    </Switch>
  );
};

export default App;
