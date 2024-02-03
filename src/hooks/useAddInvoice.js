import axios from "axios"
import { useMutation } from "react-query"

export const useAddInvoice = (onSuccess)=>{

    const addInvoice = (obj) => {
        return axios.post("https://payment-reminder-app-backend.onrender.com/invoices/addInvoice", obj ,{withCredentials: true})
    }

    return useMutation(addInvoice , {
        onSuccess: onSuccess
    })
}