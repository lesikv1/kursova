import React from "react"
import {
  Switch,
  Route
} from "react-router-dom"
import {
  PLogin,
  PMain
} from '../pages'


export default function Content() {
  return (
    <Switch>
      <Route path="/login">
        <PLogin />
      </Route>
      <Route path="/">
        <PMain />
      </Route>
    </Switch>
  );
}