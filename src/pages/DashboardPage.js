import React, { useState } from 'react'
import {NavBar} from '../components/NavBar.js'
import {ClientsMenu} from '../components/ClientsMenu'
import { Box } from '@mui/material'
import { InvoicesTabs } from '../components/InvoicesTabs.js'
import { Outlet } from 'react-router-dom'
import { AddClientForm } from '../components/AddClientForm.js'

export const DashboardPage = () => {

    const [openClientForm , setOpenClientForm] = useState(false)

    const handleOpenClientForm = ()=>{
        setOpenClientForm(!openClientForm)
    }

    return (
        <Box>
            <NavBar />

            <Box sx={{display : 'flex'}}>
                <ClientsMenu openClientForm={handleOpenClientForm} />
                <Outlet />
            </Box>

            <AddClientForm style={{display : openClientForm ? 'flex' : 'none'}} closeClientForm={handleOpenClientForm} />
        </Box> 
    )
}
 