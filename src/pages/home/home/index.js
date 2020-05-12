import React from "react"
import Css from "../../../assets/css/home/home/index.module.css"
import {Route,Switch} from "react-router-dom"
import IndexComponent from "../index/index"
class IndexPage extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <div>
                <React.Fragment>
                    <Switch>
                        <Route path={"/"} component={IndexComponent}/>
                    </Switch>
                </React.Fragment>
                <div className={Css["bottom-nav"]}>
                    <div className={Css["nav"]}>
                        <ul>
                            <li className={Css["home"]+" "+Css["active"]}></li>
                            <li className={Css["text"]+" "+ Css["active"]}>首页</li>
                        </ul>
                    </div>
                    <div className={Css["nav"]}>
                        <ul>
                            <li className={Css["car"]}></li>
                            <li className={Css["text"]}>购物车</li>
                        </ul>
                    </div>
                    <div className={Css["nav"]}>
                        <ul>
                            <li className={Css["my"]}></li>
                            <li className={Css["text"]}>我的</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default IndexPage