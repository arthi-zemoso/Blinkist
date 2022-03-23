import React,{useState} from 'react';
import Logo from '../../atoms/Icons/logo.svg'
import SearchIcon from '../../atoms/Icons/Vectorsearch.svg';
import { Typography } from '@mui/material';
import LatterAvatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExtendedNav from '../ExtendedNav/extendednav';
import SearchBar from '../../molecules/Search/searchbar'
import { Routes, HashRouter, Route, Link } from 'react-router-dom';
import Entrepreneurship from '../../pages/Entreprenuership/entrepreneurship'
type HeaderConst={
    avatar:boolean,
    avatarLatter?:string,
    search:boolean,
    explore:boolean,
    openSearch:()=>void,
}
const Header = (props:HeaderConst)=>{
    const[explr,setExplr]=useState(false);
    const[search,setSearch]=useState(false);
    return(
        <div className="header"
        style={{
            padding: '30px 0px 30px 0px',
            backgroundColor:"white",
          
        }}>

            <div className="inHeader"
            style={{
                marginLeft:"18%",
            display: "flex",
            alignItems:"center",
            zIndex:'100'
            
        }}
            >
            <img alt='blinkist' src={Logo} style={{left:'250px',width:'124.09px',height:'26px'}}/>

           <img alt='search' src={SearchIcon}   onClick={()=>setSearch(!search)} style={{left:'50px'}}/>
            
           <div className='linkHover'
            style={{
                color:'black',
                marginLeft:"43px",
                display:'flex',
                alignItems:'center'
            }}
            onClick={()=>setExplr(!explr)}>
             <Typography
            variant='body1'
            sx={{
                display:'inline-block'
            }}>Explore
            </Typography>
            {explr
            ?<KeyboardArrowUpIcon></KeyboardArrowUpIcon>
            :<KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            }
            </div>
            
           
        <div className="linkHover"
        style={{
            marginLeft:'41px',
        }}>
            <Typography
            variant='body1'
            >MyLibrary</Typography>
            </div>
            <div className='account'
            style={{display:'flex',
            alignItems:'center',
            marginLeft:'40%',
            cursor:'pointer',
        }}>

                {props.avatar
                ?<LatterAvatar >{props.avatarLatter}</LatterAvatar>
                :<Typography
                variant='body1'
                >Account
              </Typography>
            }
             <KeyboardArrowDownIcon/>
             
            </div>
            </div>
            {search
            ?<SearchBar ></SearchBar>
        :undefined}
            {explr
      ?<ExtendedNav></ExtendedNav>
    :undefined}
        </div>
    )
}
Header.defaultProps={
avatar:false,
   avatarLatter:'A',
    explore:false,
    search:false,
   openSearch:undefined,
 openExplore:undefined
}
export default Header;