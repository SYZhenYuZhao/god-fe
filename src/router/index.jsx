import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Hupu from './hupu'

export default function() {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/hupu" component={Hupu}></Route>
    </Switch>
  );
}
