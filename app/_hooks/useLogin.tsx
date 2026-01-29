import axios from "axios";

export const useLogin = async (email:String, password:String) => {
return await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, { email, password });
}

