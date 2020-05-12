import React from 'react'
import {Redirect,Route} from "react-router-dom"
const PrivateRoute = ({componet:Component,...rest})=>(
    <Route
        {...rest}
        render={props=>Boolean(localStorage['isLogin'])?(<Component {...props} />):(<Redirect to={{pathname:"/login",state:{form:props.location}}} />)}
    ></Route>
)
export default PrivateRoute