import Footer from "../Component/Footer";
import LoginComponent from "../Component/LoginComponent";
import NavbarComp from "../Component/Navbar"
import RegisterComponent from "../Component/RegisterComponent";



const Login = () => {
    return (
        <>
            <NavbarComp />
            <div className="container">
                
                <div className="row card-login">
                    <LoginComponent />
                    <RegisterComponent/>
                </div>

            </div>

            <Footer />

        </>
    )
}
export default Login;