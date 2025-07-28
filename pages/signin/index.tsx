import { Paper, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

const signin = () => {

    const handleSubmit = () => {
        console.log("signed in")
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={10} sx={{ marginTop: 8, padding: 6 }}>
                <Typography component="h1" variant='h5' sx={{ textAlign: "center", fontWeight: "600" }}>
                    Sign In
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        placeholder='Enter username'
                        fullWidth
                        required
                        autoFocus
                        sx={{ mb: 2, mt: 2 }}
                    />
                    <TextField
                        placeholder='Enter password'
                        fullWidth
                        required
                        type='password'
                    />
                </Box>
            </Paper>
        </Container>
    )
}

export default signin