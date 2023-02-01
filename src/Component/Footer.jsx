
const Footer = () => {
    return (
        <>
            <footer className="page-footer font-small blue pt-4">
                <hr className="divider" />
                <div className="container container-fluid text-left text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Grupo 10</h5>
                            <p>Muchas gracias por visitar nuestra página! Te dejamos nuestras redes sociales para que puedas seguirnos.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Redes Sociales</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Facebook</a></li>
                                <li><a href="#!">Instagram</a></li>
                                <li><a href="#!">LinkedIn</a></li>
                                <li><a href="#!">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href="#!">Grupo 10. FullStackDev</a>
                </div>

            </footer>
        </>
    )

}
export default Footer;