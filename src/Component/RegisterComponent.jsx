const { useState } = require("react");
const { register } = require("../service/apiCall");



const RegisterComponent = () => {

    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: ""
    })

    const handleChange = (event) => {
        setFormValues(
            {
            ...formValues,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const saveUser = () => {
            register(formValues).then(() => {
                alert("Registrado");
            }).catch((error) => alert("Error al registrar"));

        }
        saveUser();
    }


    return (
        <div className="col-12 col-lg-6">
            <br />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">¿Aún no estás registrado?</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label>
                                <b>Email</b>
                            </label>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="example@example.com.ar"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>
                                <b>Password</b>
                            </label>

                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>
                                <b>Nombre</b>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="firstname"
                                value={formValues.firstname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>
                                <b>Apellido</b>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                name="lastname"
                                value={formValues.lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Deseo suscribirme al newsletter
                            </label>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}
export default RegisterComponent;