import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTranslation } from "react-i18next"


export default function LangToggleButton() {
    const [, i18n] = useTranslation("global")
    const [lang, setLang] = useState('en');

    const handleChange = (event, newLang) => {
        if(newLang!==null){
            setLang(newLang);
            i18n.changeLanguage(newLang)
        }
        
    };

    const LanguageToggleButton = styled(ToggleButton)({
        border: '2px solid black',
        borderRadius: '8px',
        padding:'3px'
    })



    return (
        <ToggleButtonGroup
            color="secondary"
            value={lang}
            exclusive
            onChange={handleChange}
        >
            <LanguageToggleButton value="en">ENG</LanguageToggleButton>
            <LanguageToggleButton value="deu">DEU</LanguageToggleButton>
        </ToggleButtonGroup>
    );
}

