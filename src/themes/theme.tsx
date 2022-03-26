import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const defaultTheme = createTheme();
export const COLORS = {
    ALPHA_PRIMARY_700: "#4caf50",
    ALPHA_PRIMARY_500: "#99acc2",
    // more colors
};

declare module '@mui/material/styles' {
  interface TypographyVariants {
      heading: React.CSSProperties;
      subtitle3: React.CSSProperties;
      body3: React.CSSProperties;
      caption1: React.CSSProperties;
      caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
      heading?: React.CSSProperties;
      subtitle3?: React.CSSProperties;
      body3?: React.CSSProperties;
      caption1?: React.CSSProperties;
      caption2?: React.CSSProperties;
  }

  interface PaletteColor {
      darker?: string;
      border?: string;
      placeholder?: string;
  }

  interface SimplePaletteColorOptions {
      darker?: string;
      placeholder?: string;
      border?: string;
  }

  interface Palette {
      greyscale: Palette['primary'];
      textcolor: Palette['primary'];
      backgroundcolor: Palette['primary'];
  }

  interface PaletteOptions {
      greyscale?: PaletteOptions['primary'];
      textcolor?: PaletteOptions['primary'];
      backgroundcolor?: PaletteOptions['primary'];
  }
  
}
declare module '@mui/material/Typography' {

  interface TypographyPropsVariantOverrides {
      heading: true;
      subtitle3: true;
      body3: true
      caption1: true;
      caption2: true;
  }

}
const baseTheme = createTheme({
  palette:{
    primary:{
        main:'#00C263'
    }
},
typography:{
    fontFamily: [
        'Segoe UI',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    subtitle1:{
        fontFamily:"Cera Pro",
        fontWeight:600,
        lineHeight:'22.63',
        fontSize:18,
        textAlign:'center',
    },
    subtitle2:{
        fontFamily:"Cera Pro",
display:"inline-block",
margin:'30px 0px 20px 0px',
color:'#6D787E'
    },
    h1:{
        fontFamily:"Cera Pro",
        fontSize:'36px',
         fontWeight:'bolder'
    },
    h3:{
        fontFamily:"Cera Pro",
        fontSize:'20px',
         fontWeight:'bolder',
         textAlign:"left"
    },
    body1:{
        fontFamily:"Cera Pro",
textAlign:"left",
  fontWeight:'bolder'
    },  
    body2:{
        fontFamily:"Cera Pro",
        color:'#6D787E',
        bottom:"16px",
        top:"16px",
        textAlign:'left',
    },
    caption:{
        fontFamily:"Cera Pro",
        color:'#6D787E',
        fontSize:14,
        position:"relative",
        bottom: "3px"
    }
}
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
//color: "black",pallete:{
 // primary:COLORS.ALPHA_PRIMARY_700
//}