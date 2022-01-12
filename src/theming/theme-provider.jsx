import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContext } from './theme-context'
import { lightTheme, darkTheme } from './theme';

export default function MyThemeProvider({ children }) {
    const [isDarkTheme, changeTheme] = useState(false);

    return (
        <ThemeContext.Provider value={[isDarkTheme, changeTheme]}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>

        </ThemeContext.Provider>


    )


}