import { useState } from "react"

const HookComponent = () => {
    const [click, setClick] = useState(0);
    localStorage.setItem("clicks", click)

    const updateLocalStorage = () => {
        localStorage.setItem("clicks", click);
    }

    const handleClick = () => {
        setClick(click + 1);
        updateLocalStorage();
    }


    const [nombre, setNombre] = useState("");
    localStorage.setItem("nombre", nombre);

    const handleNombre = (values) =>{
        console.log(values.target.value);
        setNombre(values.target.value);
        localStorage.setItem("nombre",nombre)

    }


/*     const [formulario, setFormulario] = useState({

    }); */



    return (
        <>
            <section>
                <form>
                    <label htmlFor="">Hiciste {click} Clicks</label>
                    <br />
                    <button type="button" onClick={() => { handleClick() }}>Haz click para sumar</button>
                    <button type="button" onClick={() => { console.log(localStorage.getItem("clicks")); }}>Mostrar por consola</button>
                </form>
            </section>
            <section>
                <form>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(values)=>handleNombre(values)}/>
                </form>
            </section>
        </>


    )
}

export default HookComponent