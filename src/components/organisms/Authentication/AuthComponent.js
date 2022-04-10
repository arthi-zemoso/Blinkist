import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../LogoutButton'
import {Typography} from '@mui/material'
const AuthComponent=()=>{
      const {user}=useAuth0();
  return (
      <div className="container" sx={{
        width:"40px",
        position:"fixed",
        display:"flex",
        height:"50px",
        backgroundColor:"#F1F6F4",
        zIndex:2
      }}>
                   <Typography> {user?.name} </Typography>
                   <p>Hi</p>
                   <LogoutButton></LogoutButton>
      </div>
    )

}

export default  AuthComponent