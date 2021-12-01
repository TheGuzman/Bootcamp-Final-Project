import { createTheme } from '@mui/material/styles';
import Brainfish from '../assets/fonts/Brainfish.ttf'

export const lightTheme = createTheme({
    common:{
        black: '#000',
        white: '#fff'
    },
    palette: {
        primary: {
            main: '#673a2d',
            // light: '',
            // dark: '',
            contrastText:'#fff',
        },
        // secondary: {
        //     main: '',
        //     light: '',
        //     dark: '',
        //     contrastText:'',
        // },
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
    },
    shape:{
        borderRadius:'',
    },
    typography: {
        fontFamily: ['Roboto','Arial'].join(','),
        h1:{
            fontFamily: ['"Brainfish"','Roboto'].join(','),
            fontSize: '8rem'
        },
        h2:{
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
        mode: 'dark',
        warning: {
            main: '#FF0000'
        }
    },
    typography: {
        fontFamily: ['Roboto','Arial'].join(','),
        h1:{
            fontFamily: ['"Brainfish"','Roboto'].join(','),
            fontSize: '8rem'
        },
        h2:{
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