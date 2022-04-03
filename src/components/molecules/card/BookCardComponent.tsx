import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent,Typography,Grid } from '@material-ui/core';
import { AccessTime, PersonOutline, MoreHoriz } from '@material-ui/icons';
import Book from '../../../assets/Books/3.svg'

type CardProp={
id:number,
img?:string,
title?:string,
alt?:string,
author?:string,
timeRead:string,
numberRead:string,
toAdd:boolean,
status?:"Currently Reading"|"Finished Reading"|"null",
finishset?:()=>void,
changeStatus?:()=>void,
}
const useStyles = makeStyles((theme) => ({
    root:{
      width: "18rem",
      borderRadius: "3%",
      borderBottomRightRadius: "2%",
      borderBottomLeftRadius: "2%",
      display: "grid",
      background:"rgb(250,250,250)",
    },
    image: {
      width: "inherit",
      borderRadius: "inherit",
      borderBottomRightRadius: "unset",
      borderBottomLeftRadius: "unset"
    },
    bookButton:{
      padding: theme.spacing(1),
      cursor: "pointer",
      backgroundColor:"#2ce080",
      color: "black"
    }
  
  }));
  
const BookCardComponent = (props:CardProp) => {
  
    const styles = useStyles();
    return (
      
        <Card className={styles.root} variant="outlined"
       
        >
          <img
            className={styles.image}
            src={props.img}
            title={props.title}
            alt = {props.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" style={{fontWeight: 'bold'}}>
                {props.title}
            </Typography>
            <Typography variant="subtitle1">
              {props.author}
            </Typography>
            <br/>
            <Grid container justifyContent="space-between" >
              <Grid item ><AccessTime fontSize="small"  style={{marginTop: -2}} />{props.timeRead}</Grid>
              <Grid item><PersonOutline fontSize="small"  style={{marginTop: -2}} />{props.numberRead}</Grid>
            </Grid>

          </CardContent>
          <Grid container justifyContent="space-between">
          <Grid item >
             
          </Grid>
            <Grid item ><MoreHoriz fontSize="small" style={{margin: "1rem"}} /></Grid>
          </Grid>

        </Card>  
      
      );
    
  };
  BookCardComponent.defaultProps={
    img: Book,
title:"Doesn't hurt to ask",
alt:"bring human",
author:"Trey Gowdy",
timeRead:"13-min read",
numberRead:"1.9k reads",
toAdd:false,
status:"null",


}

export default BookCardComponent;

/* sx={[{width:284}
            ,{'&:hover': {
                backgroundColor:'#F1F6F4',
              },
              '&:hover button':{
                  backgroundColor:"blueviolet",
                  color:"white"
              }
               <LibraryBtn title="lib"/>
            }]}
            */
