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
            direction='column'
            sx={{
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                backgroundColor : 'primary.main',
                textAlign: 'center'
            }}
        >
            <CheckCircleOutlineIcon 
                sx={{
                    width: 100 , 
                    height: 100 , 
                    color: 'secondary.main'
                    }}
            />
            <Typography variant="h4" component='h1'>Your account is activated successfully</Typography>
        </Stack>
    )
}
