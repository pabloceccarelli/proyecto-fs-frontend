import axios from "axios";

export const register = async(user)=>{
    //user.password = encrypt (user.password);
    //aquí iría la encriptación
    
    const response = await axios.post("http://192.168.21.50:8000/users/register", user);
    return response.data;
}

export const login = async(user)=>{

    const response = await axios.post("http://192.168.21.50:8000/users/login", user);
    
    return response.data;
    
    
}

export const getProducts = async(rutaActual)=>{
    const response = await axios.get("http://192.168.21.50:8000"+rutaActual);
    return response.data;
}
