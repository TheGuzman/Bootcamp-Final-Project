import { createTheme } from '@mui/material/styles';
import Brainfish from '../assets/fonts/Brainfish.ttf'

export const lightTheme = createTheme({
  common: {
    black: '#000',
    white: '#fff'
  },
  palette: {
    primary: {
      main: '#5e8ca8',
      light: '#8ebcda',
      dark: '#2e5f79',
      contrastText: '#000000',

    },
    secondary: {
      main: '#f19740',
      light: '#ffc86f',
      dark: '#ba690b',
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
    borderRadius: '10px',
  },
  typography: {
    fontFamily: ['Roboto', 'Arial'].join(','),
    h1: {
      fontFamily: ['"Brainfish"', 'Roboto'].join(','),
      '@media (min-width:320px)': {
        fontSize: '4rem',
      },
      '@media (min-width:768px)': {
        fontSize: '8rem',
      },

    },
    h2: {
      fontFamily: ['Roboto', 'Arial'].join(','),
      fontSize: '2rem'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'BrainFish';
              src: local('Brainfish'), url(${Brainfish}) format('truetype');
            }
          `,
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: '#616161',
      light: '#8d8d8d',
      dark: '#363636',
      contrastText: '#ffffff',

    },
    secondary: {
      main: '#ffcc80',
      light: '#ffffb0',
      dark: '#ca9b52',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Arial'].join(','),
    h1: {
      fontFamily: ['"Brainfish"', 'Roboto'].join(','),
      fontSize: '8rem'
    },
    h2: {
      fontFamily: ['Roboto', 'Arial'].join(','),
      fontSize: '2rem'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'BrainFish';
              src: local('Brainfish'), url(${Brainfish}) format('truetype');
            }
          `,
    },
  },

})