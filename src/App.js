import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";
import Header from "components/header";

import { store, persistor } from "./store/index";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      {/* keeping something, persist */}
      <PersistGate persistor={persistor}>

        

        <Router>
          <Header />

          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={Login} />
          </Switch>
        </Router>

      </PersistGate>
    </Provider>
  );
}

export default App;
