import React from 'react'
import Link from 'next/link'
import { Box, Container } from '@mui/system'
import { Grid, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from '@mui/material'

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
                    <FormControlLabel
                        control={<Checkbox value="remember" color='primary' />}
                        label="Remember Me"
                    />
                    <Button type='submit' variant='contained' fullWidth sx={{ mt: 1 }}>
                        Sign In
                    </Button>
                    <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                        <Grid>
                            <Link href="/forgot" passHref>Forgot Password?</Link>
                        </Grid>
                        <Grid>
                            <Link href="/signup" passHref>Sign Up</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    )
}

export default signin