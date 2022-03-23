import Button from '@mui/material/Button';

import React from "react";

type ConnectBtnProps={
    title:string,
    onClick?:()=>void,
    style?:React.CSSProperties
    
}

const ConnectBtn = (props:ConnectBtnProps) => {
    return(
        <Button variant="contained"
        color='success'
        sx={{
            width:"296px",
            height:"44px",
            borderRadius:"4px",
            padding:"12px 116px 12px 116px"
        }} onClick={props.onClick}>Connect</Button>
    )
}
export default ConnectBtn;

//top:"3047px", left:"345px",