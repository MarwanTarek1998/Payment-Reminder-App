import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { validate } from "email-validator";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

export const AddClientForm = ({ open, closeClientForm }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [emailFlag, setEmailFlag] = useState(false);
  const [firstNameFlag, setFirstNameFlag] = useState(false);
  const [lastNameFlag, setLastNameFlag] = useState(false);

  const validateForm = () => {
    firstName.length >= 2 ? setFirstNameFlag(false) : setFirstNameFlag(true);

    lastName.length >= 2 ? setLastNameFlag(false) : setLastNameFlag(true);

    validate(email) ? setEmailFlag(false) : setEmailFlag(true);
  };

  const handleAddClient = () => {
    validateForm();
  };

  return (
    <Dialog open={open} onClose={closeClientForm}>
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
          variant="contained"
          color="secondary"
      
          sx={{marginRight: '8px'}}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
