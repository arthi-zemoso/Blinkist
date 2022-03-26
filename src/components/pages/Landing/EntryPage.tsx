import MyLibrary from '../../organisms/Library/LIbrary'
import { Box, Typography} from "@mui/material";
import Header from '../../organisms/Header/header';
import Footer from '../../organisms/Footer/footer'
const EntryPage=()=>{
return(
    <>
    <Header avatar={false} explore={false} openSearch={()=>console.log("hello")} ></Header>
    <Box sx={{
        margin:"59px 15% 8px 18%"
    }}>
    <Typography variant='h2'
    sx={{
        marginBottom:"60px",
        fontStyle: "normal",
         lineHeight: "45px",
        letterSpacing: "0em",
         TextAlign: "left",
         fontFamily: "Cera Pro",
         fontSize: "36px"
        }}>My Library</Typography>
        <MyLibrary/>
        </Box>
       <Footer/>
        </>
)
}
export default EntryPage;
// <MyLibrary/> <Footer></Footer>