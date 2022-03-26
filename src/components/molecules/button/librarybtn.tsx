import Button from '@mui/material/Button';
import React from "react";
import AddIcon from '@mui/icons-material/Add';
    
//import Add from './atoms/Icons/plus.svg';


type LibraryBtnProps={
    title:string,
    onClick:React.EventHandler<any>
}

const LibraryBtn = (props:LibraryBtnProps) => {
    return(
        <Button  variant="text"
        onClick={props.onClick} 
        sx={{
            width:"193px",
            height:"52px",
            borderRadius:"4px",
            padding:"14px 24px 14px 24px",
            color:'primary',
        }}startIcon={<AddIcon/>} >    
        {props.title}</Button>
    )
}
export default LibraryBtn;
