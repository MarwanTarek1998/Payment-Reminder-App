import { useMutation } from "react-query";
import axios from "axios";

export const useUpdateInvoice = (onSuccess) => {

    const updateInvoice = (invoice) => {
        return axios.put('http://localhost:5000/invoices/updateInvoice' , invoice)
    }

    return useMutation(updateInvoice , {
        onSuccess : onSuccess
    })
}