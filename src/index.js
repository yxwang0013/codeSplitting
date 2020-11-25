import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/app.css";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/home";
import About from "./components/about";
import Inbox from "./components/inbox";
import Register from "./components/register";
import Contact from "./components/contact";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/inbox/:userId" component={Inbox} />
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
