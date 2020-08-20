import React, { Component } from "react";
import Welcome from "./components/welcome/Welcome";
import NoMatch from './components/nomatch/NoMatch';

import { Route,Switch} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
      
        <Switch>
        <Route
          exact
          path="/welcome/:name"
          render={(props) => <Welcome {...props} />}
        />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Doggy Dog" />}
        />
       <Route>
          <NoMatch />
        </Route>
      </Switch>
      </div>
    );
  }
}
export default App;