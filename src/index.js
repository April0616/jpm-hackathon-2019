import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "@routes";

// Import routes
import PageHome from "@routes/PageHome";
import Model from "@routes/Model";
import Pipeline from "@routes/Pipeline";
import VersionControl from "@routes/VersionControl";

// Import global style
import "src/styles/app.scss";
import "src/styles/normalize.scss";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.ROUTE_HOME} component={PageHome} />
      <Route exact path={ROUTES.ROUTE_MODEL} component={Model} />
      <Route exact path={ROUTES.ROUTE_PIPELINE} component={Pipeline} />
      <Route
        exact
        path={ROUTES.ROUTE_VERSION_CONTROL}
        component={VersionControl}
      />
      {/* Add more routes here */}
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
