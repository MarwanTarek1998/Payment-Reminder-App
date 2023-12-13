import { Alert, AlertTitle, Avatar, Box, Button, Typography } from "@mui/material"
import Logo from '../images/logo.png'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const ActivationPage = () => {
    return (
        <Box>
            
            <Box>
                <Avatar 
                    alt="logo" 
                    src={Logo} 
                    sx={{
                        width: 100 , 
                        height: 100,
                        p: 4
                        }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2 
                }}
            >
                <Alert 
                    severity="info" 
                    variant="outlined" 
                    icon={<InfoOutlinedIcon fontSize="large" sx={{color: 'white'}}/>}
                    sx={{
                        color: 'white',
                        border: 'none'
                    }}
                >
                    <AlertTitle>
                        <Typography variant="h4" >Info</Typography>
                    </AlertTitle>

                    <Typography variant="h6">
                        Please first check your email to activiate your account and then click on the Active my account button to go to log-in page
                    </Typography>
                </Alert>

                <Button 
                    variant="contained" 
                    size="large" 
                    color="secondary"
                    sx={{
                        width: 'fit-content',
                        mt: 4
                    }}
                    href="/"
                >
                    Go to login page
                </Button>
            </Box>

        </Box>
    )
}
