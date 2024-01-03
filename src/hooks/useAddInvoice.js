import axios from "axios"
import { useMutation } from "react-query"

export const useAddInvoice = (onSuccess)=>{

    const addInvoice = (obj) => {
        return axios.post("http://localhost:5000/invoices/addInvoice", obj ,{withCredentials: true})
    }

    return useMutation(addInvoice , {
        onSuccess: onSuccess
    })
}