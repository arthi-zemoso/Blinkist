import { Typography } from "@mui/material";
import React from "react";

const NavSection=()=>{
    return(
        <div style={{
            display: "flex"

        }} >
            <div style={{
                display:'flex',
                flexDirection: 'column',
                width:'214px' ,
                right:'722px'   
            }}>
            <Typography variant="body1"
            sx={{
                marginBottom:'16px',
                
            }}>Editorial</Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px',
                
            }} ><a >Book List</a></Typography>
            <Typography variant="body2"
           sx={{
            marginBottom:'16px',
            
        }} ><a >What is Nonfiction?</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px',
                
            }} ><a >What to read next?</a></Typography>
            <Typography variant="body2"
             sx={{
                marginBottom:'16px',
                
            }}><a >Benefits of reading</a></Typography>   
            </div>
            <div
             style={{
                display:'flex',
                flexDirection: 'column',
                width:'214px'
            }}>
            <Typography variant="body1"
            sx={{
                marginBottom:'16px',
                fontWeight:'bold',
            }}>Useful links</Typography>
            <Typography variant="body2"
             sx={{
                marginBottom:'16px',
                
            }}><a >Pricing</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px',
                
            }}><a>Blinkist buisness</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px',
                
            }}><a >Gift Cards</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px',
                
            }}><a >Blinkst magaine</a></Typography>
            <Typography variant="body2"><a >Contacts & help</a></Typography>
                </div>  
                <div
                 style={{
                    display:'flex',
                flexDirection: 'column',
                width:'214px',
                right:'-303px'
                }}>
                <Typography variant="body1"
                sx={{
                    marginBottom:'16px',
                    fontWeight:'bold',
                }}>Company</Typography>
            <Typography variant="body2"
           sx={{
            marginBottom:'16px',
            
        }} ><a >About</a></Typography>
            <Typography variant="body2"
             sx={{
                marginBottom:'16px',
                
            }}><a >Careers</a></Typography>
            <Typography variant="body2"
             sx={{
                marginBottom:'16px',
                
            }}><a >Partners</a></Typography>
            <Typography variant="body2"
            sx={{
                marginBottom:'16px',
                
            }} ><a>Code of Conduct</a></Typography>
                    </div> 
                      
        </div>
    )
}
export default NavSection;