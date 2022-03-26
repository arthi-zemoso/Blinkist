import { Grid, Typography  }  from "@mui/material";
import React from "react";
import Bag from '../../atoms/Icons/bag.svg'
import Bell from '../../atoms/Icons/bell.svg';
import Leaf from '../../atoms/Icons/leaf.svg';
import House from '../../atoms/Icons/house.svg';
import Bulb from '../../atoms/Icons/bulb.svg';
import Target from '../../atoms/Icons/target.svg';
import Globe from '../../atoms/Icons/globe.svg';
import Heart from '../../atoms/Icons/heart.svg'
import Graph from '../../atoms/Icons/graph.svg'
import Chart from '../../atoms/Icons/chart.svg'
import Brain from '../../atoms/Icons/brain.svg'


    let items=[
    {
        id:1,
        "icon":<img src={Bell}></img>,
        "href":'entrepreneurship',
        "title":'Entrepreneurship'
    },{
        id:2,
        "icon":<img src={Bell}></img>,
       
        "title":'Science'
    },
    {
        id:3,
        "icon":<img src={Globe}></img>,
    
        "title":'Economics'
    },
    {
        id:4,
        "icon":<img src={Bag}></img>,
       
        "title":'Corporate Culture'
    },
    {
        id:5,
        "icon":<img src={Brain}></img>,
      
        "title":'Psychology'
    },
    {
        id:6,
        "icon":<img src={Leaf}></img>,
      
        "title":'Nature & Environment'
    },
    {
        id:7,
        "icon":<img src={House}></img>,

        "title":'Politics'
    },
    {
        id:8,
        "icon":<img src={Bell}></img>,
       
        "title":'Health & Nutrition'
    },{
        id:9,
        "icon":<img src={House}></img>,
      
        "title":'History'
    },{
        id:10,
        "icon":<img src={Bulb}></img>,
       
        "title":'Motivation & Inspiration'
    },{
        id:11,
        "icon":<img src={Bell}></img>,
            
        "title":'Productivity'
    },
    {
        id:12,
        "icon":<img src={Target}></img>,
            
        "title":'Career & Success'
    },
    {
        id:13,
        "icon":<img src={Chart}></img>,
            
        "title":'Marketing & Sales'
    },
    {
        id:14,
        "icon":<img src={Graph}></img>,
            
        "title":'Personal Development'
    },
    {
        id:15,
        "icon":<img src={Bell}></img>,
            
        "title":'Communication Skills'
    },
    {
        id:16,
        "icon":<img src={Bell}></img>,
           
        "title":'Money & Investments'
    },
    {
        id:17,
        "icon":<img src={Heart}></img>,
        
        "title":'Sex & Relationship'
    },{
        id:18,
        "icon":<img src={Bell}></img>,
          
        "title":'Education'
    }
]

const ExtendedNav=()=>{
   
    return(
       
        <div className="extNav"
        style={{
            backgroundColor:'#F1F6F4',
            position:"absolute",
            zIndex:2
        }}
        >
            
           
            <div className="insideNav"
            style={{
                paddingBottom: '26px',
                margin:'8px 18% 20px 18%'  
            }}
            >
                <div className="topNav"
                 style={{
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"space-between",
                    margin:'30px 0px 30px 0px',
                    borderBottom: '2px solid black',
                    paddingBottom:"30px"
                    
                }}>
                <Typography variant="subtitle2"
              >
                    Explore by category
                </Typography>
                <Typography variant="subtitle2"
                  >
                    See recent added titles
                </Typography>
                <Typography variant="subtitle2"
                 sx={{paddingRight:"70px"}}>
                    See popular titles
                </Typography>
                </div>
   <Grid container spacing={2}
   sx={{
       marginTop:"17px",
       zIndex:2
   }}>
    {
    items.map((element)=>{
        return(<Grid key={element.id} item xs={4}
        sx={[{
            display:"flex"},
            {'&:hover':{
                color:"blue",
            },'&:hover svg path':{
                fill:"blue",
                color:"blue",
            }},
            ]}>
              
            {/* <div className='barHover'> */}
            {element.icon}
            <a style={{
              textDecoration:"none",
            cursor:"pointer"
               }} href={element.href} >
             <Typography variant="body2"
                      sx={{paddingLeft:"5px"}}  >
                        {element.title}</Typography>
                        </a>
                            </Grid>
        )
    }
    )}
    </Grid>
    </div>
    </div>
    )
}
export default ExtendedNav;
/*  <Route path='/entrepreneurship'>
          <Entrepreneurship/>
           </Route>
 
          */
