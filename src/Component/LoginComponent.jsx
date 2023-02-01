const { useState } = require("react");
const { login } = require("../service/apiCall");

const LoginComponent = () => {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const getUser = () => {
            login(formValues).then(() => {
                alert("EXITO AL LOGUEAR");
                console.log("Logueado");
            }).catch((error) => alert("Error al loguear"));


        }
        getUser();
    }

    return (

        <div className="col-12 col-lg-6">
            <br />
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
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
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}
export default LoginComponent;