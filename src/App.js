import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./hoc/Layout";
import Home from "./components/Home/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Kids from "./pages/Kids";
import Live from "./pages/Live";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/filmler">
              <Movies />
            </Route>
            <Route path="/diziler">
              <Series />
            </Route>
            <Route path="/cocuk">
              <Kids />
            </Route>
            <Route path="/canli-yayin">
              <Live />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </GlobalProvider>
  );
}

export default App;
