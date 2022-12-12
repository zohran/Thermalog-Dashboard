import {createTheme } from '@mui/material';


const theme=createTheme({
    pallate:{
      primary:{
        main:"#6D6D6D"
      },
    },
    typography: {
      fontFamily: "Manrope",

      h1:{
        fontWeight:"700",
        fontSize:'2rem',
        color:"#171717",
        '@media (max-width:900px) ':{
          fontSize:'1rem',

        },
        '@media (max-width:600px) ':{
          fontSize:'0.8rem',
        }
      },
      h3:{
        color:"#737373",
        fontWeight:"400",
        fontSize:'1rem',
        '@media (max-width:900px) ':{
          fontSize:'0.8rem',
        },
        '@media (max-width:600px) ':{
          fontSize:'0.625rem',
        }
      },
      
      

}})

export default theme;