import React from "react"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LangToggleButton from "./switches/language-switch.jsx";
import ThemeToggleButton from "./switches/theme-switch.jsx";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';


export default function MyHeader() {
    const [t] = useTranslation("global")

    const HeaderStack = styled(Stack)({
        '@media (min-width:760px)': {
            flexDirection: 'row',
            gap: '1em',
        },
    })
    const ButtonStack = styled(Box)({
        
    })



    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Grid container>
                <Grid item container xs={12}>
                    <AppBar position="static">
                        {/* ICON Fishbowl */}
                        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <HeaderStack direction='column' sx={{ flexWrap: 'wrap' }}>
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
                            </HeaderStack>
                            <Stack sx={{rowGap:'1em', '@media (min-width:760px)': {flexDirection: 'row',gap: '1em',},}}>
                                <LangToggleButton></LangToggleButton>
                                <ThemeToggleButton></ThemeToggleButton>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Box>

    )
}