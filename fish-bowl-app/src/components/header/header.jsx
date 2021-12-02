import React from "react"
import { BrowserRouter, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LangToggleButton from "./switches/language-switch.jsx";
import ThemeToggleButton from "./switches/theme-switch.jsx";


export default function MyHeader() {
    const [t] = useTranslation("global")
    return (
        <Box>
            <AppBar position="static">
                {/* ICON Fishbowl */}
                <Toolbar sx={{justifyContent:'space-between'}}>
                        <Stack direction='row' spacing ={4}>
                            <Typography variant='h5' >
                                <Link to="/">Home</Link>
                            </Typography>
                            <Typography variant='h5'>
                                <Link to="/becomafish">Become a Fish</Link>
                            </Typography>
                            <Typography variant='h5'>
                                <Link to="/register">Register</Link>
                            </Typography>
                            <Typography variant='h5'>
                                <Link to="/login">Login</Link>
                            </Typography>
                        </Stack>
                    <Stack direction='row' spacing={4}>
                    <LangToggleButton></LangToggleButton>
                    <ThemeToggleButton></ThemeToggleButton>
                    </Stack>
                </Toolbar>
            </AppBar>

        </Box>
    )
}