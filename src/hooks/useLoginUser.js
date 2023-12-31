import axios from "axios"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

export const useLoginUser = (onError) => {

    const loginUser = (user) => {
        return axios.post('http://localhost:5000/userRegisteration/login' , user)
    }

    return useMutation(loginUser , {
        onError : onError
    })
}
