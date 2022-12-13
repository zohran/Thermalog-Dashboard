import {createTheme } from '@mui/material';

const theme=createTheme({
    palette:{
      primary:{
        main:"#6D6D6D"
      },
      secondary:{
        main:"#FB3640"
      },
      tertiary:{
        main:"#FB3640"
    
      },
      other:{
        main:"#000000"
      }
    },
    typography: {
      fontFamily: "Manrope, sans-serif",

        h1:{
          fontSize: '2rem',
          fontWeight: '700',
          // lineHeight: 'rem',
          '@media (min-width:600px) and (max-width:900px)': {
            fontSize: '1.5rem',
          },
          '@media (min-width:300px) and (max-width:600px)': {
            fontSize: '1rem',
          },
          '@media (max-width:300px) ': {
            fontSize: '0.625rem',
          },

        },
        h2:{
          fontSize: '0.625rem',
          fontWeight: '300',
          lineHeight: '2rem',
          '@media (min-width:600px)': {
            fontSize: '1.3rem',
          },
          '@media (max-width:300px)': {
            fontSize: '0.625rem',
          },
        },
        h3:{
          fontSize: '1.125rem',
          fontWeight: '300',

          '@media (min-width:600px) and (max-width:900px)': {
            fontSize: '1rem',
          },
          '@media (min-width:300px) and (max-width:600px)': {
            fontSize: '0.7rem',
          },
          '@media (max-width:300px) ': {
            fontSize: '0.4rem',
          },
        }
      },
      
})

export default theme;