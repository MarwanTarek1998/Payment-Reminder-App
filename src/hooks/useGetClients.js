import { useQuery } from "react-query";
import axios from 'axios'

export const useGetClients = () =>{

    const getClients = () => {

        return axios.get('https://payment-reminder-app-backend.onrender.com/clients/getClients' , {withCredentials: true})
    }

    return useQuery('clients' , getClients , {
        refetchInterval: 2000,
        refetchIntervalInBackground: true
    })
}
