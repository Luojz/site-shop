import React from "react"
import Css from "../../../assets/css/home/home/index.scss"
import {Route,Switch} from "react-router-dom"
import IndexComponent from "../index/index"
import CartComponent from "../cart/index"
import UserComponent from "../user/index/index"
import Config from "../../../assets/js/conf/config"

class IndexPage extends React.Component{
    constructor(){
        super();
        this.state={
            bHomeStyle:true,
            bCartStyle:false,
            bMyStyle:false
        }
    }
    componentDidMount(){
        this.handleNavStyle()
    }
    goPage(pUrl){
        this.props.history.replace(pUrl);
    }
    componentWillReceiveProps(newProps){
        this.handleNavStyle(newProps)
    }
    handleNavStyle(newProps=this.props){
        switch (newProps.location.pathname){
            case Config.path+"home/index":
                this.setState({
                    bHomeStyle:true,
                    bCartStyle:false,
                    bMyStyle:false
                })
                break;
            case Config.path+"home/cart":
                this.setState({
                    bHomeStyle:false,
                    bCartStyle:true,
                    bMyStyle:false
                })
                break;
            case Config.path+"home/user":
                this.setState({
                    bHomeStyle:false,
                    bCartStyle:false,
                    bMyStyle:true
                })
                break;
        }
    }
    render(){
        return(
            <div>
                <React.Fragment>
                    <Switch>
                        <Route path={Config.path+"home/index"} component={IndexComponent}/>
                        <Route path={Config.path+"home/cart"} component={CartComponent}/>
                        <Route path={Config.path+"home/user"} component={UserComponent}/>
                    </Switch>
                </React.Fragment>
                <div className={"bottom-nav"}>
                    <div className={"nav"}>
                        <ul onClick={()=>{this.goPage(Config.path+"home/index")}}>
                            <li className={"home"+" "+(this.state.bHomeStyle && "active")}></li>
                            <li className={"text"+" "+(this.state.bHomeStyle && "active")}>首页</li>
                        </ul>
                    </div>
                    <div className={"nav"}>
                        <ul onClick={()=>{this.goPage(Config.path+"home/cart")}}>
                            <li className={"car"+" "+(this.state.bCartStyle && "active")}></li>
                            <li className={"text"+" "+(this.state.bCartStyle && "active")}>购物车</li>
                        </ul>
                    </div>
                    <div className={"nav"}>
                        <ul onClick={()=>{this.goPage(Config.path+"home/user")}}>
                        <li className={"my"+" "+(this.state.bMyStyle && "active")}></li>
                        <li className={"text"+" "+(this.state.bMyStyle && "active")}>我的</li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default IndexPage