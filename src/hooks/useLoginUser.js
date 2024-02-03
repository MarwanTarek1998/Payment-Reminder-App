import axios from "axios"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

export const useLoginUser = (onError , onSuccess) => {

    const loginUser = (user) => {
        return axios.post('https://payment-reminder-app-backend.onrender.com/userRegisteration/login' , user , {withCredentials : true})
    }

    return useMutation(loginUser , {
        onError : onError,
        onSuccess : onSuccess
    })
}
