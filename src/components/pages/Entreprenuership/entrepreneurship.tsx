import { Box, Typography } from "@mui/material";
import SearchBar from "../../molecules/Search/searchbar";
import Banner from '../../organisms/Banner/banner'
import Footer from "../../organisms/Footer/footer";
import Header from "../../organisms/Header/header";
import MyLibrary from '../../organisms/Library/LIbrary'
import React from "react";
import API from '../../../api';
import BookCardComponent from '../../molecules/card/BookCardComponent';
import { useState, useEffect } from 'react';
import { makeStyles, Grid, Link } from '@material-ui/core';
import LibraryBtn from '../../molecules/button/librarybtn'
interface Book{
    id:number,
    imgsrc:string,
    name:string,
    author:string,
    time:string,
    numberReads:string,
    status:string,
  }

const Entrepreneurship = () => {   
    const [bookState, setBookState] = useState(false);
    const [bookCardItems, setBookCardData] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        API.get('/books')
        .then(res =>res.data)
        .then(
            (result)=>{
            setIsLoaded(true);
            setBookCardData(result);
            console.log(result);
        },
        (error)=>{
            setIsLoaded(true);
        }
        );
    }, [bookState]);

    return(
        <div>
            <Header avatar={true}></Header>
            <Box sx={{
               margin:'10px 0px 10px 18%'
            }}>
                <div style={{
                    margin:"0px 0px 10px 39px"
                }}>
                    <Banner></Banner>
                    <div
                style={{
                    margin:"30px 0px 32px 39px",
                }}>
                <SearchBar></SearchBar>
                </div>
                </div>
               
                <Typography variant="h3"
                sx={{
                    align:"left",
                    marginBottom:'60px'
                }}>Trending Blinks</Typography>
               <Grid container spacing={2}>
                  <Grid container item xs={12} spacing={4}>
                  { bookCardItems.map((bookCardItem:Book)=>(
                            <Grid key={bookCardItem.id} item xs={12} md={4}>
    
                                <BookCardComponent id={bookCardItem.id} title={bookCardItem.name} author={bookCardItem.author} timeRead={bookCardItem.time}  img={bookCardItem.imgsrc}  status={
                                            bookCardItem.status === "CR"
                                            ? "Finished Reading"
                                            : "Currently Reading"
                                        }            
                                />
                              <LibraryBtn  title="Add to library"  onClick={()=>window.location.href="/bookDetails"}
                                />    
                            </Grid>
                    ))}
              </Grid>
           
              </Grid>  
                </Box>
                
            <Footer/>
        </div>
    )
};
export default Entrepreneurship;