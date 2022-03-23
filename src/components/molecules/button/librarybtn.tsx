import Button from '@mui/material/Button';
import React from "react";
import AddIcon from '@mui/icons-material/Add';
    
//import Add from './atoms/Icons/plus.svg';
import Add from "/home/arthia/Desktop/Blinkist/my-blinkist/src/components/atoms/Icons/plus.svg";

type LibraryBtnProps={
    title:string,
    onClick:React.EventHandler<any>
}

const LibraryBtn = (props:LibraryBtnProps) => {
    return(
        <Button  variant="text"
        onClick={props.onClick} 
        sx={{
            width:"183px",
            height:"52px",
            borderRadius:"4px",
            padding:"14px 24px 14px 24px",
            color:'primary'
        }}startIcon={<AddIcon/>} >
         
        Finished</Button>
    )
}
export default LibraryBtn;
//    <img src={Add} alt="plus"/>  startIcon={<Add/>}  <img alt="plus"src={Add}> </img> <AddIcon></AddIcon>startIcon={<Add/>}
/*  
        
        */