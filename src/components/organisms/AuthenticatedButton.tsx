import LoginButton from './LoginButton';
import LogoutButton from './Logout';
import {useAuth0} from '@auth0/auth0-react'

const AuthenticatedButton=()=>{
    const {isAuthenticated} = useAuth0();
    return isAuthenticated?<LogoutButton/>:<LoginButton/>
}
export default AuthenticatedButton;