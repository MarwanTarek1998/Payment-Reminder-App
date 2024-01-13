import axios from "axios"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

export const useLoginUser = (onError , onSuccess) => {

    const loginUser = (user) => {
        return axios.post('http://localhost:5000/userRegisteration/login' , user , {withCredentials : true})
    }

    return useMutation(loginUser , {
        onError : onError,
        onSuccess : onSuccess
    })
}
