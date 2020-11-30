import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/app.css";
import Header from "./components/header";
import Footer from "./components/footer";


const About = lazy(() => import("./components/about"));
const Home = lazy(() => import("./components/home"));
const Register = lazy(() => import("./components/register"));
const Contact = lazy(() => import("./components/contact"));
const Inbox = lazy(() => import("./components/inbox"));
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Suspense fallback={<h1>Loading page....</h1>}>
            <Switch>
              <Route path="/inbox" component={Inbox} />
              <Route path="/contact" component={Contact} />
              <Route path="/register" component={Register} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/register" component={Register} />
              <Route path="/contact" component={Contact} />
              <Route path="/inbox/:userId" component={Inbox} />
              <Route exact path="/" component={Home} />
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
