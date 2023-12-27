import {
  Box,
  Button,
  Container,
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

export const AddClientForm = ({ style, closeClientForm }) => {
    
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
    <Box
      style={style}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: (theme) => theme.zIndex.drawer + 2,
        backgroundColor: "#1c1b1b59",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper variant="elevation" elevation={20} sx={{ p: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: "0",
                right: "0",
                cursor: "pointer",
                padding: "0",
              }}
              color="error"
              onClick={closeClientForm}
            >
              <HighlightOffOutlinedIcon />
            </IconButton>
            <Typography variant="h5" component="h1" color="primary">
              Add Client
            </Typography>
            <Box
              component="form"
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
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

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => handleAddClient(e)}
              >
                Add Client
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
