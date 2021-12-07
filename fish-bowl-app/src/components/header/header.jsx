import React from "react"
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LangToggleButton from "./switches/language-switch.jsx";
import ThemeToggleButton from "./switches/theme-switch.jsx";
import { styled } from '@mui/material/styles';



export default function MyHeader() {

    const HeaderStack = styled(Stack)({
        '@media (min-width:760px)': {
            flexDirection: 'row',
            gap: '1em',
        },
    })


    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <AppBar position="static" color='primary'>
                        {/* ICON Fishbowl */}
                        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <HeaderStack direction='column' sx={{ flexWrap: 'wrap' }}>
                                <Typography color = 'secondary.light' variant='h5' component={Link} style= {{ textDecoration:'none' }} to='/'>Home
                                </Typography>
                                <Typography color = 'secondary.light' variant='h5' component={Link} style= {{ textDecoration:'none' }} to='/becomeafish'>Become a Fish
                                </Typography>
                                <Typography color = 'secondary.light' variant='h5' component={Link} style= {{ textDecoration:'none' }} to='/register'>Sign up
                                </Typography>
                                <Typography color = 'secondary.light' variant='h5' component={Link} style= {{ textDecoration:'none' }} to='/login'>Login
                                </Typography>
                            </HeaderStack>
                            <Stack sx={{rowGap:'1em',alignItems:'center', '@media (min-width:760px)': {flexDirection: 'row',gap: '1em',},}}>
                                <LangToggleButton ></LangToggleButton>
                                <ThemeToggleButton></ThemeToggleButton>
                            </Stack>
                        </Toolbar>
                    </AppBar>
        </Box>

    )
}