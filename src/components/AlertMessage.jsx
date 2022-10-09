import React from 'react'
import { Alert, Snackbar } from '@mui/material';
import { useAlert } from '../context/AlertContext';



export default function AlertMessage() {
    const { open, closeAlert, severity, message } = useAlert()

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={closeAlert}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
            <Alert onClose={closeAlert} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}