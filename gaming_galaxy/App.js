import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./src/pages/login";
import signup from "./src/pages/signup";
import home from "./src/pages/home";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
