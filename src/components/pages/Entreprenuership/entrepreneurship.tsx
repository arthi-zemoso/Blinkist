import { Box, Typography } from "@mui/material";
import SearchBar from "../../molecules/Search/searchbar";
import Banner from '../../organisms/Banner/banner'
import Footer from "../../organisms/Footer/footer";
import Header from "../../organisms/Header/header";
import MyLibrary from '../../organisms/Library/LIbrary'
import React from "react";

const Entrepreneurship = () => {   
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
                    margin:"40px 0px 32px 0px"
                }}>
                <SearchBar></SearchBar>
                </div>
                </div>
               
                <Typography variant="h3"
                sx={{
                    align:"left",
                    marginBottom:'60px'
                }}>Trending Blinks</Typography>
                <MyLibrary/>
                </Box>
                
            <Footer></Footer>

        </div>
    )
}
export default Entrepreneurship;