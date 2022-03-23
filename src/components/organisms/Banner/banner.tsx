import React from 'react';
import Girl from '../../../assets/girl.svg'
import { Box, Typography } from "@mui/material"
const Banner=()=>{
    return(
        <Box sx={{
            display:'flex',
            height:'264px',
            width:'912px',
            // padding:'45px',
            backgroundColor:'#F1F6F4',
            flexDirection:'row'
        
        }}>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                margin: '45px 0px 45px 45px',
                
        
            }}>
            <Typography variant="h3"sx={{
                fontSize:'36px',
                fontWeight:'300'
            }}>Explore Books on <br></br> entrepreneurship</Typography>
        <Typography variant="subtitle2" sx={{
        marginTop:"15px",
        fontWeight:'400'
        }}>
        Everything you need to know about thriving on a <br></br>
        shoestring budget, making your first million, and hiring<br></br> 
        right from the start.
        </Typography>
            </Box>
        
        <Box sx={{
             display:'flex',
             marginLeft:"112px"
        }}>

      <img src={Girl}/>
        </Box>
        </Box>
            )
        }
        export default Banner;