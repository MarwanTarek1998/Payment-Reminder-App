import { useNavigate , Navigate } from "react-router-dom"

export const ProtectRoute = ({children}) => {
    
    if (!localStorage.getItem('token')) {
        console.log(localStorage.getItem('token'))
        return <Navigate to='/'/>
    }

    return children
}
