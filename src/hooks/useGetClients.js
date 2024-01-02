import { useQuery } from "react-query";
import axios from 'axios'

export const useGetClients = () =>{

    const getClients = () => {

        return axios.get('')
    }

    return useQuery('clients' , getClients)
}
