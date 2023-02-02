import axios from "axios";

export const register = async(user)=>{
    //user.password = encrypt (user.password);
    //aquí iría la encriptación
    
    const response = await axios.post("http://localhost:8000/users/register", user);
    return response.data;
}

export const login = async(user)=>{

    const response = await axios.post("http://localhost:8000/users/login", user);
    
    return response.data;
    
    
}

export const getAllProducts = async()=>{
    const response = await axios.get("http://localhost:8000/products");
    return response.data;
}