import { useQuery } from "react-query";
import axios from 'axios'

export const useGetInvoices = (clientID) =>{

    const getInvoices = () => {

        return axios.get(`https://payment-reminder-app-backend.onrender.com/invoices/getInvoices/${clientID}` , {withCredentials: true})
    }

    return useQuery(['invoices' , clientID] , getInvoices , {
        refetchInterval: 2000,
        refetchIntervalInBackground: true
    })
}
