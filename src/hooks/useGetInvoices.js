import { useQuery } from "react-query";
import axios from 'axios'

export const useGetInvoices = (clientID) =>{

    const getInvoices = () => {

        return axios.get(`http://localhost:5000/invoices/getInvoices/${clientID}` , {withCredentials: true})
    }

    return useQuery(['invoices' , clientID] , getInvoices , {
        refetchInterval: 2000,
        refetchIntervalInBackground: true
    })
}
