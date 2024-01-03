import { useMutation } from "react-query";
import axios from "axios";

export const useAddClient = (onSuccess , onError) => {

    const addClient = (client) => {
        
        return axios.post('http://localhost:5000/clients/addClient' , client , {withCredentials: true}) 
    }

    return useMutation(addClient , {
        onSuccess : onSuccess,
        onError : onError
    })
}