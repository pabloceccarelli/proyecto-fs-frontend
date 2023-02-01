import HomeBody from "../Component/HomeBody"
import NavbarComp from "../Component/Navbar"
import Footer from "../Component/Footer"
import HookComponent from "../Component/HookComponent"
import HookEfecto from "../Component/HookEfecto"

const HomePage = () => {
    return (
        <>
            
            <NavbarComp />
            <br />
            <HomeBody valor="hola" valor2="chau" saludo="Hola pibe fachero 😎"/>    
            <Footer />
        </>
    )
}

export default HomePage;