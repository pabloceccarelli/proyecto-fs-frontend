import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../Page/HomePage"
import QuienesSomosPage from "../Page/QuienesSomosPage"
import ProtectedRoute from "./ProtectedRoute"
import Login from "../Page/Login"
import EnConstruccion from "../Page/EnConstruccion"
import Products from "../Page/Products"

const AppRouter = () =>{
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path = "/" component={HomePage}/>
                    <Route exact path ="/home" component={HomePage}/>
                    <Route exact path ="/quienes_somos" component = {QuienesSomosPage}/>
                    <Route exact path ="/login" component={Login}/>
                    <Route exact path="/contacto" component={EnConstruccion}/>
                    <Route exact path="/products/hombres" component={EnConstruccion}/>
                    <Route exact path="/products/mujeres" component={EnConstruccion}/>
                    <Route exact path="/products/running" component={EnConstruccion}/>
                    <Route exact path="/products/futbol" component={EnConstruccion}/>
                    <Route exact path="/products/casual" component={EnConstruccion}/>
                    <Route exact path="/products" component={Products}/>

                    <ProtectedRoute exact path ="/protegido" params={true}/>
                </Switch>
            </Router>

        </>

    )
}
export default AppRouter;