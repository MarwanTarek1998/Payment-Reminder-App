import {Box, Card , CardContent ,Chip,Typography, Tooltip , Button } from '@mui/material'
import React from 'react'
import DescriptionIcon from "@mui/icons-material/Description";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useOutletContext } from 'react-router-dom';

export const InvoiceCard = ({invoice , editInvoice}) => {

  const [handleOpenInvoiceForm] = useOutletContext()


  return (
    <Card variant="outlined" sx={{marginBottom: '16px'}}>
              <CardContent sx={{ display: "flex", alignItems: "center" , padding:'24px 24px 16px 24px' }}>
                <DescriptionIcon
                  sx={{
                    fontSize: "3rem",
                    color: "#373773",
                    marginRight: "16px",
                  }}
                />
                <Box sx={{ flexGrow: "1" }}>

                  <Box sx={{display: 'flex' , alignItems: 'center' , justifyContent: 'space-between'}}>

                    <Typography variant="h4" sx={{ marginBottom: "8px" }}>
                      {invoice.invoiceID.subject}
                    </Typography>

                    {invoice.invoiceID.state === "Active" && 
                      <Tooltip title= 'Edit' placement='left'>
                        <Button 
                          color = 'secondary'
                          variant='contained'
                          sx={{minWidth: '0px'}}
                          onClick={() => editInvoice(invoice.invoiceID)}
                          >

                            <ModeEditOutlineIcon />

                        </Button>
                      </Tooltip>
                    }

                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap : 'wrap',
                    }}
                  >
                    
                    <Typography variant="h6" sx={{marginBottom : '8px'}}><Chip label="Amount" color='primary'  /> : {invoice.invoiceID.amount} $</Typography>

                    <Typography sx={{ color: invoice.invoiceID.state == 'Active' ? "#4caf50" : '#ef5350', fontWeight: "700" , marginBottom: '8px' }}>
                        <Chip label="Status" sx={{fontWeight : 500}} color='primary'/> : {invoice.invoiceID.state}
                    </Typography>

                    <Typography sx={{marginBottom : '8px'}}><Chip label="Due Date" color='primary'/> : {invoice.invoiceID.dueDate}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
  )
}
