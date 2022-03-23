import { Box, Typography,Grid } from "@mui/material";
import Logo from '../../atoms/Icons/logo.svg'
import { makeStyles } from '@material-ui/core/styles';
import NavSection from "../NavSection/navsection";
import React from 'react';


const Footer =()=>{
    return(
        <Box
        sx={{
            background:"#F1F6F4",
            width:"100%",
            height:"370px",
            left:"12px",
            top:"6638px",
            paddingTop:"38px",
            Padding:"24px 24px 24px 244px",
            boxSizing:"border-box"
        }}>
            <div style={{
                display:'flex',
                flexDirection:'row'
            }}>
        
            
            <div style={{
                display:'block',
                flexDirection:'column',
                left:"256px",
                
            }}>
             <img alt='blinkist' src={Logo} style={{width:"99.1px",height:'24px' ,left:'244px',top:"38px",right:"1096px",marginBottom:'32px',marginLeft:"244px"}}/>
            <Typography sx={{
                fontWeight:"500",
                font:'Cera Pro',
                fontStyle:"normal",
                fontSize :"24px",
                lineHeight:"32px",
                color:"#0365F2",
                width: '378px',
                height:'64px',
                top:'56px',
                left:'244px',
                marginLeft:"244px"
            }} variant='subtitle1'>
            Big ideas in small packages
            <br></br>
        Start learning now
            </Typography>
            </div>
        
            <div style={{
                lineHeight:'24px',
               marginLeft:"200px",
            }}>
            <NavSection/>
            </div>
           
        </div>
        
        <Box sx={{
            marginTop:'48px'
        }
        }>
            <Typography sx={{
                height: "22px",
                width: "546px",
                left: "244px",
                top: "310px",
                borderRadius: "nullpx",
                right:'650px',
                marginLeft:"244px"
                
            }}variant='caption'>© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography> 
        </Box>
        </Box>
            )
        }
    
export default Footer;
   /* return(
<Box
sx={{
    background:"#F1F6F4",
    width:"100%",
    height:"370px",
    left:"-12px",
    top:"6638px",
    paddingTop:"38px",
    Padding:"24px 24px 24px 244px",
    boxSizing:"border-box"
}}>
    <div style={{
        display:'flex',
        flexDirection:'row'
    }}>

    
    <div style={{
        display:'block',
        flexDirection:'column',
        left:"256px"
    }}>
     <img alt='blinkist' src={Logo} style={{width:"99.1px",height:'24px' ,left:'244px',top:"38px",right:"1096px",marginBottom:'32px'}}/>
    <Typography sx={{
        fontWeight:"500",
        font:'Cera Pro',
        fontStyle:"normal",
        fontSize :"24px",
        lineHeight:"32px",
        color:"#0365F2",
        width: '378px',
        height:'64px',
        top:'56px',
        left:'244px'
    }} variant='subtitle1'>
    Big ideas in small packages
    <br></br>
Start learning now
    </Typography>
    </div>

    <div style={{
        lineHeight:'24px'
       
    }}>
    <NavSection/>
    </div>
   
</div>

<Box sx={{
    marginTop:'48px'
}
}>
    <Typography sx={{
        height: "22px",
        width: "546px",
        left: "244px",
        top: "310px",
        borderRadius: "nullpx",
        right:'650px'
        
    }}variant='caption'>© Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies</Typography> 
</Box>
</Box>
    )
}
export default Footer; no hardocding
return(
        <Box
        sx={{
            background:"#F1F6F4",
            width:"100%",
            height:"270px",
            left:"-12px",
            top:"6638px",
            paddingTop:"38px",
            Padding:"24px 24px 24px 244px",
            boxSizing:"border-box"
        }}> 
        <Grid  container-spacing={2} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} text-align="center"
        display="flex"> 
         <img alt='blinkist' src={Logo} style={{width:"99.1px",height:'24px' ,top:"38px",right:"1096px",marginBottom:'32px'}}/>
         <Grid item xs={2}>
         <Typography variant="body1"
            sx={{
                marginBottom:'16px',
                marginTop:'16px'
            }}>Editorial</Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >Book List</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >What is Nonfiction?</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >What to read next?</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >Benefits of reading</a></Typography>   
         </Grid>
         <Grid item xs={2}>
         <Typography variant="body1"
            sx={{
                marginBottom:'16px'
            }}>Useful links</Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >Pricing</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a>Blinkist buisness</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >Gift Cards</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >Blinkst magaine</a></Typography>
                <Typography variant="body2"><a >Contacts & help</a></Typography>
         </Grid>
        < Grid item xs={2}>
        <Typography variant="body1"
                sx={{
                    marginBottom:'16px'
                }}>Company</Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px',
                marginTop: '16px'
            }}><a >About</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >Careers</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a >Partners</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px'
            }}><a>Code of Conduct</a></Typography>
         </Grid>
        </Grid>
        </Box>
    )
*/