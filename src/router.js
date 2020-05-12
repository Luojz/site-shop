import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import HomeComponent from "./pages/home/home"
// import PrivateRoute from "./routes/private"
import config from "./assets/js/conf/config"
function RouterComponent() {
  return (
      <React.Fragment>
          <Router>
              <React.Fragment>
                  <Switch>
                      <Route path={config.path} component={HomeComponent}></Route>
                  </Switch>
              </React.Fragment>
          </Router>
      </React.Fragment>
  );
}

export default RouterComponent;
