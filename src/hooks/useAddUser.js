import { useMutation } from "react-query"
import axios from "axios"

export const useAddUser = (onError) => {

    const  addUser =  (user) => {
        return axios.post('https://payment-reminder-app-backend.onrender.com/userRegisteration/signup' , user , {withCredentials: true})
    }

    return useMutation('signup',addUser,{
        onError : onError
    })
    
}
