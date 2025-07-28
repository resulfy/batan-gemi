'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function TopAppBar() {
    return (
        <Box sx={{ flexGrow: 1, width: "100vw" }}>
            <AppBar position="static" sx={{ backgroundColor: "#2384cfe2" }}>
                <Toolbar>
                    <Image
                        src="/assets/batangemilogo.png"
                        alt="AppBarLogo"
                        width={64}
                        height={64}
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        BatanGemi
                    </Typography>
                    <Link href="/signin" passHref>
                        <Button color="inherit" size='medium' sx={{ fontSize: "16px", fontFamily: "inherit", textTransform: "none" }}>Sign In</Button>
                    </Link>
                    <Link href="/signup" passHref>
                        <Button color="inherit" size='medium' sx={{ fontSize: "16px", fontFamily: "inherit", textTransform: "none" }}>Sign up</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
