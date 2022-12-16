
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
          fontSize: '1rem',
          fontWeight: '300',

          '@media (min-width:600px) and (max-width:900px)': {
            fontSize: '0.825rem',
          },
        },
        h6:{
          fontSize: '1.125rem',
          fontWeight: '300',

          '@media (min-width:600px) and (max-width:900px)': {
            fontSize: '1rem',
          },  
        },
        side:{
          fontSize: '1rem',
          fontWeight: '300',
          lineHeight: '1.18rem',
          fontFamily:"Manrope, sans-serif",
          '@media (min-width:600px) and (max-width:900px)': {
            fontSize: '0.625rem',
          },
        },
        devices:{
          fontSize: '1rem',
          fontWeight: '500',
          lineHeight: '1.18rem',
          fontFamily:"Manrope, sans-serif",
          '@media (min-width:600px) and (max-width:900px)': {
            fontSize: '1rem',
          },
        },
        card_title:{
            fontSize: '15px',
            fontFamily:"Manrope, sans-serif",
            fontWeight: '700',
            
            lineHeight:'20px',
            '@media (min-width:600px) and (max-width:900px)': {
              fontSize: '12px',  
              alignSelf:"center" 
            },
        },
        card_desc:{
          fontSize: '12px',
          fontFamily:"Manrope, sans-serif",
          fontWeight: '400',
          width:"100%",
          '@media (min-width:600px) and (max-width:900px)': {
            fontSize: '7px',  
            alignSelf:"self-start", 
          },
        },
        temp:{
          fontSize: '18px',
          fontFamily:"Manrope, sans-serif",
          fontWeight: '600',
          // lineHeight:'36px',
          color:"#FB3640",
          '@media (min-width:600px) and (max-width:900px)': {
            fontSize: '10px',  
          },
        },
      },
      
})

export default theme;