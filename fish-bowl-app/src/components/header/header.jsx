import React from "react"
import { useTranslation } from "react-i18next"
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../theming/theme-context.js';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export default function MyHeader() {
    const [t, i18n] = useTranslation("global")
    const [isDarkTheme, updateTheme] = useContext(ThemeContext);
    const theme = useTheme();

    return (
        <Box>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'baseline' }}>
                <Typography variant="h1">{t("header.fishbowl")}</Typography>
                <Typography variant="h2">{t("header.welcomeMsg")}</Typography>
            </Stack>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                    <button onClick={() => i18n.changeLanguage("deu")}>DEU</button>
                    <Switch
                        color="secondary"
                        checked={isDarkTheme}
                        onChange={() => updateTheme(!isDarkTheme)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}