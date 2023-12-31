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
import { DatePicker } from "@mui/x-date-pickers";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

export const AddInvoiceForm = ({ open, closeInvoiceForm }) => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const [subjectFlag, setSubjectFlag] = useState(false);
  const [amountFlag, setAmountNameFlag] = useState(false);
  const [dateFlag, setDateFlag] = useState(false);

  //   const validateForm = () => {
  //     firstName.length >= 2 ? setFirstNameFlag(false) : setFirstNameFlag(true);

  //     lastName.length >= 2 ? setLastNameFlag(false) : setLastNameFlag(true);

  //     validate(email) ? setEmailFlag(false) : setEmailFlag(true);
  //   };

  const handleAddInvoice = (e) => {
    e.preventDefault();

    // validateForm();
  };

  return (
    <Dialog open={open} onClose={closeInvoiceForm}>
      <DialogTitle sx={{fontWeight: '700' , fontSize: '1.5rem'}}>Add Invoice</DialogTitle>

      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              autoComplete="subject"
              required
              fullWidth
              color="primary"
              variant="filled"
              name="subject"
              id="subject"
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {subjectFlag && (
              <FormHelperText error>
                Please enter the invoice subject
              </FormHelperText>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="number"
              required
              fullWidth
              color="primary"
              variant="filled"
              name="amount"
              id="amount"
              label="Invoice Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {amountFlag && (
              <FormHelperText error>
                Please enter the invoice amount
              </FormHelperText>
            )}
          </Grid>

          <Grid item xs={12}>
            <DatePicker
              required
              sx={{ width: "100%" }}
              color="primary"
              name="date"
              id="date"
              label="Due Date"
              value={selectedDate}
              onChange={(e) => console.log(e.target.value)}
            />
            {dateFlag && (
              <FormHelperText error>
                Please enter the invoice due date
              </FormHelperText>
            )}
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" color="error" onClick={closeInvoiceForm}>
          cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginRight: "8px" }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
