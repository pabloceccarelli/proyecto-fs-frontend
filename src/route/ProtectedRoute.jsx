//import { Component } from "react";
import {Route, Redirect, Router, Switch} from "react-router-dom";

const ProtectedRoute = ({params : logged}) =>{
    return(
        <Router>
            <Switch>
                <Route render={(logged)=>{
                    if(logged){
                        console.log("ingresando");
                        return <Redirect to={"/home"}/>
                    }else{
                        return <Redirect to={"/login"}/>
                    }
                }}/>
            </Switch>
        </Router>
    )
}
export default ProtectedRoute;