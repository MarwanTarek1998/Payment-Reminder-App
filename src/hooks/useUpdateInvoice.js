import { useMutation } from "react-query";
import axios from "axios";

export const useUpdateInvoice = (onSuccess) => {

    const updateInvoice = (invoice) => {
        return axios.put('https://payment-reminder-app-backend.onrender.com/invoices/updateInvoice' , invoice, {withCredentials: true})
    }

    return useMutation(updateInvoice , {
        onSuccess : onSuccess
    })
}