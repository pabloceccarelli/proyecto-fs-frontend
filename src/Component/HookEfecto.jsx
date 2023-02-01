import useData from "../hooks/LoadData"

const HookEfecto = () => {
    const storage = useData();

    return (
        <>
            <table className="table container table-striped table-dark">

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Foto de perfil</th>
                    </tr>
                </thead>

                <tbody>
                    {storage.map(item => (
                        <tr>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><img src={item.avatar} /></td>
                        </tr>

                    ))}
                </tbody>

            </table>

        </>
    )
}
export default HookEfecto;