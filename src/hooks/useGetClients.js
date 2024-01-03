import { useQuery } from "react-query";
import axios from 'axios'

export const useGetClients = () =>{

    const getClients = () => {

        return axios.get('http://localhost:5000/clients/getClients' , {withCredentials: true})
    }

    return useQuery('clients' , getClients , {
        refetchInterval: 2000,
        refetchIntervalInBackground: true
    })
}
