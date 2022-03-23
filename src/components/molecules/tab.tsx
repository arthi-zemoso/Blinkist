import { Typography ,Box} from "@mui/material";
import React from "react";
type TabProps={
    title:string,
    isActive:boolean,
    onClick?:()=>void,
   
}
const Tab = (props:TabProps) => {
    return(
        <Box sx={{
            borderBottom:props.isActive
            ?"2px solid #2CE080"
            :"2px solid #E1ECFC"
            ,height:"39px",
            width:"304px",
            color:props.isActive
            ?"#22C870"
            :"#6D787E",
            display:"inline-block"
        }}
        onClick={props.onClick}>
<Typography variant="subtitle1"
sx={{
    marginBottom:'16px',
}}>{props.title}</Typography>

        </Box>
    )
}
export default Tab;
Tab.defaultProps={
    title:"continue",
    isActive:true
}

