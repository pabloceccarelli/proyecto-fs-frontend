import { useEffect, useState } from "react";

const useData = () => {
    const [storage, setStorage] = useState([]);
    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2")
            .then(response => response.json())
            .then(responseJson => setStorage(responseJson.data))
    }, [])
    return storage;
}
export default useData;