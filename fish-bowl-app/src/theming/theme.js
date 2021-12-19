import { createTheme } from '@mui/material/styles';
import Brainfish from '../assets/fonts/Brainfish.ttf'
import Nunito from '../assets/fonts/Nunito.ttf'
import RobotoMono from '../assets/fonts/RobotoMono.ttf'
import Baloo from '../assets/fonts/Baloo.ttf'

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
})

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  common: {
    black: '#000',
    white: '#fff',
    special:'	#303030',
    fish:'5e8ca8',
  },
  palette: {

    primary: {
      main: '#5e8ca8',
      light: '#8ebcda',
      dark: '#2e5f79',
      contrastText: '#000000',

    },
    secondary: {
      main: '#ffc86f',
      light: '#ffc86f',
      dark: '#ffab23',
      contrastText: '#000000',
    },
    text: {
      primary: "#303030",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#DCDCDC",
      default: "#DCDCDC"
    },
    // error: {
    //     main: '',
    //     light: '',
    //     dark: '',
    //     contrastText:'',
    // },
    // warning: {
    //     main: '',
    //     light: '',
    //     dark: '',
    //     contrastText:'',
    // },
    // info: {
    //     main: '',
    //     light: '',
    //     dark: '',
    //     contrastText:'',
    // },
    // sucess: {
    //     main: '',
    //     light: '',
    //     dark: '',
    //     contrastText:'',
    // }
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    }
  },

  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: ['Baloo', 'Arial'].join(','),
    h1: {
      fontFamily: ['"Brainfish"', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '4rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '5rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.xl}px)`]: { fontSize: '8rem', },
    },
    h2: {
      fontFamily: ['Nunito', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '2rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '5rem', },
    },
    h3: {
      fontFamily: ['Nunito', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '1.7rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '3rem', },
    },
    h4: {
      fontFamily: ['Nunito', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '1.3rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '2.3rem', },
    },
    h5: {
      fontFamily: ['Nunito', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '1.1rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '1.5rem', },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'BrainFish';
              src: local('Brainfish'), url(${Brainfish}) format('truetype');
            }
            @font-face {
              font-family: 'Nunito';
              src: local('Nunito'), url(${Nunito}) format('truetype');
            }
            @font-face {
              font-family: 'RobotoMono';
              src: local('RobotoMono'), url(${RobotoMono}) format('truetype');
            }
            @font-face {
              font-family: 'Baloo';
              src: local('Baloo'), url(${Baloo}) format('truetype');
            }
          `,
    },
  },
})

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  common: {
    black: '#000',
    white: '#fff',
    special:'#D3D3D3',
    fish:'F0BB62',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#F4E881',
      light: '#699DD2',
      dark: '#c56200',
      contrastText: '#000000',
    },
    secondary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: ['Baloo', 'Arial'].join(','),
    h1: {
      fontFamily: ['"Brainfish"', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '4rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '5rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.xl}px)`]: { fontSize: '8rem', },
    },
    h2: {
      fontFamily: ['Nunito', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '2rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '5rem', },
    },
    h3: {
      fontFamily: ['Nunito', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '1.7rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '3rem', },
    },
    h4: {
      fontFamily: ['Nunito', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '1.3rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '2.3rem', },
    },
    h5: {
      fontFamily: ['Nunito', 'Roboto'].join(','),
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.sm}px)`]: { fontSize: '1.1rem', },
      [`@media screen and (min-width: ${defaultTheme.breakpoints.values.md}px)`]: { fontSize: '1.5rem', },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'BrainFish';
              src: local('Brainfish'), url(${Brainfish}) format('truetype');
            }
            @font-face {
              font-family: 'Nunito';
              src: local('Nunito'), url(${Nunito}) format('truetype');
            }
            @font-face {
              font-family: 'RobotoMono';
              src: local('RobotoMono'), url(${RobotoMono}) format('truetype');
            }
            @font-face {
              font-family: 'Baloo';
              src: local('Baloo'), url(${Baloo}) format('truetype');
            }
          `,
    },
  },
})