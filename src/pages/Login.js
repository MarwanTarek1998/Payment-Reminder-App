import { Container , Box , TextField , Typography , Avatar , Link , Grid, Button , Paper, FormHelperText } from "@mui/material"
import Logo from '../images/logo.png'
import { validate } from "email-validator"
import { useState } from "react"
import { useLoginUser } from "../hooks/useLoginUser"
import { useNavigate } from "react-router-dom"


export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailFlag, setEmailFlag] = useState(false)
    const [passwordFlag, setPasswordFlag] = useState(false)

    const navigate = useNavigate()


    const {mutate : loginUser , isSuccess , isError} = useLoginUser()

    const handleSumbit = (event) => {

        event.preventDefault()
        
        validate(email) ?  setEmailFlag(false) : setEmailFlag(true)
        
        password.length >= 6 ? setPasswordFlag(false) : setPasswordFlag(true)
        
        if (validate(email) && password.length >= 6){

            const user = {
                email,
                password
            }

            loginUser(user) 
        }
    }

    if (isSuccess) {
        navigate('/dashboard')
    }

    return (
        <Box>

            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt="logo" 
                    src={Logo} 
                    sx={{
                        width: 120 , 
                        height: 120 , 
                        p: 4 
                    }}
                />
            </Box>
            
            <Container 
                maxWidth='sm' 
                sx={{
                    display: 'flex' , 
                    alignItems: 'center' , 
                    justifyContent: 'center'
                    }}
            >
                
                <Paper variant="elevation" elevation={20} sx={{p: 4}}>

                    <Box 
                        sx={{
                            display: 'flex' , 
                            flexDirection: 'column' , 
                            alignItems: 'center'}}
                    >

                        <Typography variant="h5" component='h1' color="primary">Log in</Typography>
                        <Box 
                            component='form'
                            sx={{
                                mt: 3 ,
                                display: 'flex' ,
                                flexDirection: 'column' , 
                                alignItems: 'center' , 
                                justifyContent: 'center' }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        type="email"
                                        autoComplete="email"
                                        required
                                        fullWidth
                                        color="primary"
                                        variant="filled"
                                        name="email"
                                        id="email"
                                        label='Email Address'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailFlag && <FormHelperText error>The Entered email address is wrong</FormHelperText>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="password"
                                        required
                                        fullWidth
                                        color="primary"
                                        variant="filled"
                                        name="password"
                                        id="password"
                                        label='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordFlag && <FormHelperText error>Please enter password with lenght at least 6</FormHelperText>}
                                </Grid>
                            </Grid>

                            <Button 
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                size="large"
                                sx={{mt: 3 , mb: 2}}
                                onClick={(e) => handleSumbit(e)}
                            >
                                log in
                            </Button>

                            <Link 
                                href='/sign-up'
                                sx={{ 
                                    alignSelf: 'end' , 
                                    cursor: 'pointer'
                                }} 
                                underline="hover">
                                    Don't have an account? Sign Up
                            </Link>
                        </Box>

                    </Box>

                </Paper>

            </Container>

        </Box>
        
    )
}
