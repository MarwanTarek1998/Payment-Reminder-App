import { Container , Box, Avatar, Typography, Grid, TextField, Button , Paper , FormHelperText , Snackbar , Alert } from '@mui/material'
import Logo from '../images/logo.png'
import { validate } from 'email-validator'
import { useState } from 'react'
import { useAddUser } from '../hooks/useAddUser'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstNameFlag, setFirstNameFlag] = useState(false)
    const [lastNameFlag, setLastNameFlag] = useState(false)
    const [emailFlag, setEmailFlag] = useState(false)
    const [passwordFlag, setPasswordFlag] = useState(false)
    const [open, setOpen] = useState(false)


    const navigate = useNavigate()


    const {mutate : signupUser , isSuccess , isError , error} = useAddUser(()=>{
        setOpen(true)
    });
    
    const validateForm = ()=>{
        firstName.length >= 2 ? setFirstNameFlag(false) : setFirstNameFlag(true)

        lastName.length >= 2 ? setLastNameFlag(false) : setLastNameFlag(true)
        
        validate(email) ? setEmailFlag(false) : setEmailFlag(true)

        password.length >= 6 ? setPasswordFlag(false) : setPasswordFlag(true)
    }


    const handleClose = () => {
        setOpen(false)
    }

    const handleSumbit = (event) => {

        event.preventDefault()

        validateForm()

        if (firstName.length >= 2 && lastName.length >= 2 && validate(email) && password.length >= 6) {
            
            const user = {
                firstName,
                lastName,
                email,
                password
            }

            signupUser(user)
        }
    }


    if (isSuccess) {
        navigate('/activation-page')
    }

    return (
        <Box sx={{height : '100vh' , backgroundColor: '#373773'}}>

            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Avatar 
                    alt='logo' 
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
                    alignItems: 'center'
                    }}
            >
                
                <Paper 
                    variant='elevation' 
                    elevation={20} 
                    sx={{p: 4}}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        
                        <Typography component="h1" variant="h5" color='primary'>
                            Sign up
                        </Typography>
                        <Box component="form" sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete='given-name'
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        color='primary'
                                        variant='filled'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {firstNameFlag && <FormHelperText error>Enter first name with length at least 2</FormHelperText>}
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        color='primary'
                                        variant='filled'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {lastNameFlag && <FormHelperText error>Enter last name with length at least 2</FormHelperText>}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        color='primary'
                                        variant='filled'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailFlag &&  <FormHelperText error>The entered email is wrong</FormHelperText> }
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        color='primary'
                                        variant='filled'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordFlag && <FormHelperText error>Please enter paswword with length at least 6</FormHelperText>}
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                size='large'
                                onClick={(e) => handleSumbit(e)}
                            >
                                Sign Up
                            </Button>
                        </Box>

                    </Box>

                </Paper>
                

            </Container>

            <Snackbar 
                open={isError && open} 
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                
            >

                <Alert 
                    severity='error'
                    elevation={20}
                >
                    {error?.response.data.errorMsg}
                </Alert>

            </Snackbar>

            
        
        </Box>
        
        
    )
}
