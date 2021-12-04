import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeContext } from '../../../theming/theme-context.js';
import { useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export default function ThemeToggleButton() {
    const [isDarkTheme, updateTheme] = useContext(ThemeContext);
    const [mode, setMode] = useState('light');

    const handleChange = (event, newMode) => {
        if(newMode!==null){
            setMode(newMode);
            updateTheme(!isDarkTheme)
        }
        
    };

    const LanguageToggleButton = styled(ToggleButton)({
        border: '2px solid black',
        borderRadius: '8px',
        padding:'3px',
        marginTop: 0,
    })



    return (
        <ToggleButtonGroup
            color="secondary"
            value={mode}
            exclusive
            onChange={handleChange}
        >
            <LanguageToggleButton value="light"><LightModeIcon></LightModeIcon></LanguageToggleButton>
            <LanguageToggleButton value="dark"><DarkModeIcon></DarkModeIcon></LanguageToggleButton>
        </ToggleButtonGroup>
    );
}
