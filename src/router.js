import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import HomeComponent from "./pages/home/home"
// import PrivateRoute from "./routes/private"
import config from "./assets/js/conf/config"
function RouterComponent() {
  return (
      <React.Fragment>
          <Router>
              <React.Fragment>
                  <Switch>
                      <Route path={config.path+"home/"} component={HomeComponent}></Route>
                      <Redirect to={config.path+"home/index"}/>
                  </Switch>
              </React.Fragment>
          </Router>
      </React.Fragment>
  );
}

export default RouterComponent;
