import { useMutation } from "react-query";
import axios from "axios";

export const useAddClient = (onSuccess , onError) => {

    const addClient = (client) => {
        
        return axios.post('https://payment-reminder-app-backend.onrender.com/clients/addClient' , client , {withCredentials: true}) 
    }

    return useMutation(addClient , {
        onSuccess : onSuccess,
        onError : onError
    })
}