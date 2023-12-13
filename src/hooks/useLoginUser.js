import axios from "axios"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"

export const useLoginUser = () => {

    const navigate = useNavigate()

    const loginUser = (user) => {

        axios.post('http://localhost:5000/userRegisteration/login' , user)
        .then(response => {
            navigate('/dashboard')
        })
        .catch(err => {
            console.log(err.message)
        })
    }


    return useMutation(loginUser)
}
