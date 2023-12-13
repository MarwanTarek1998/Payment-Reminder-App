import { Stack , Typography } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ActivationSuccessfullyPage =  () => {

    const {userId} = useParams()

    useEffect(() => {

        axios.post(`http://localhost:5000/userRegisteration/userActivation/${userId}`)

    } , [])

    return (
        <Stack 
            spacing={2} 
            direction='row'
            sx={{
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
            }}
        >
            <CheckCircleOutlineIcon 
                sx={{
                    width: 45 , 
                    height: 45 , 
                    color: 'secondary.main'
                    }}
            />
            <Typography variant="h4" component='h1'>Your account is activated successfully</Typography>
        </Stack>
    )
}
