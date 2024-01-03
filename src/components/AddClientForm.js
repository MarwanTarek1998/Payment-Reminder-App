import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Grid,
  TextField,
  Snackbar,
  Alert
} from "@mui/material";
import React, { useState } from "react";
import { validate } from "email-validator";
import { useAddClient } from "../hooks/useAddClient";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";


export const AddClientForm = ({ open, closeClientForm }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [emailFlag, setEmailFlag] = useState(false);
  const [firstNameFlag, setFirstNameFlag] = useState(false);
  const [lastNameFlag, setLastNameFlag] = useState(false);
  const [clientExist, setClientExist] = useState(false)
  const [clientAddedSuccessfully, setClientAddedSuccessfully] = useState(false)



  const handleClientExistClose = () =>{
    setClientExist(false)
  }

  const handleClientAddedSuccessfully = () => {
    setClientAddedSuccessfully(false)
  }

  // if the client is added successfully close the client form
  const onSuccess = () => {
    closeClientForm()
    setClientAddedSuccessfully(true)
  }

  //  if the error occur when add client
  const onError = () => {
    setClientExist(true)
  }
  
  const {mutate: addClient , error} = useAddClient(onSuccess , onError)

  const validateForm = () => {
    firstName.length >= 2 ? setFirstNameFlag(false) : setFirstNameFlag(true);

    lastName.length >= 2 ? setLastNameFlag(false) : setLastNameFlag(true);

    validate(email) ? setEmailFlag(false) : setEmailFlag(true);

  };

  const handleAddClient = (event) => {
    event.preventDefault()

    validateForm()
    
    if (firstName.length >= 2 && lastName.length >= 2 && validate(email)){

      const client = {
        firstName : firstName,
        lastName : lastName,
        email : email
      }
      
      addClient(client)
    }

  };


  return (
    <>
    
      <Dialog open={open} onClose={closeClientForm} component='form'>
        <DialogTitle sx={{fontWeight: '700' , fontSize: '1.5rem'}} >Add Client</DialogTitle>
        <DialogContent>
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
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailFlag && (
                <FormHelperText error>
                  The Entered email address is wrong
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="text"
                required
                fullWidth
                color="primary"
                variant="filled"
                name="firstName"
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {firstNameFlag && (
                <FormHelperText error>
                  Enter first name with length at least 2
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="text"
                required
                fullWidth
                color="primary"
                variant="filled"
                name="lastName"
                id="lastName"
                label="Last Name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
              {lastNameFlag && (
                <FormHelperText error>
                  Enter last name with length at least 2
                </FormHelperText>
              )}
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={closeClientForm}
          >
            cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{marginRight: '8px'}}
            onClick={(e) => {
              handleAddClient(e)
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={clientExist}
        autoHideDuration={3000}
        onClose={handleClientExistClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}>

        <Alert
          severity="error"
          elevation={20}>

            {error?.response.data.errMsg}

        </Alert>
        
      </Snackbar>
      
      <Snackbar
        open={clientAddedSuccessfully}
        autoHideDuration={3000}
        onClose={handleClientAddedSuccessfully}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}>

        <Alert
          severity="success"
          elevation={20}>

            The client has been added successfully

        </Alert>
        
      </Snackbar>

    </>
  );
};
