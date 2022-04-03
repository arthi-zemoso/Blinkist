import { Typography,Button} from  "@mui/material";
import Footer from "../../organisms/Footer/footer";
import Header from "../../organisms/Header/header";
import Tab from '../../molecules/Tab/tab'
import Book from '../../../assets/Books/2.svg'
const BookDetails = () => {
    type bookType={
        title:string,
        id:number,
        author:string,
        imgSrc:string
    }
    return(
        <div>
            
            <Header></Header>
            <div style={{
                margin:"16px 15% 16px 18%",    
            }}>
                <Typography variant="body2">Get the key idea from</Typography>
           
            <div style={{
                display:'flex',
                //justifyContent:'space-between',
            }}>
                <div style={{
                    marginRight:'125px',
                    paddingTop:"40px"
                }}>
           
            <Typography variant="h3"> Beyond Entrepreneurship 2.0</Typography>
            <Typography variant="subtitle1">Turning Your Business into an Enduring Great Company</Typography>
            <Typography variant="body1"> Jim Collins and Bill Lazier</Typography>
            <Button sx={{
                marginRight:'10px',
                borderRadius:"0px",
                marginTop:"30px"
            }} variant="outlined">Read More</Button>
            <Button sx={{borderRadius:"0px",
            marginTop:"30px"
            }} variant="contained">Finished Reading</Button>
            {/* <ConnectBtn variant="contained" title="Finished Reading" ></ConnectBtn> */}
                </div>
                <div>
            <img src={Book} alt="beyond entrepreneurship"></img>
            </div>
            </div>
            <div style={{
                margin:"2px 0px 0px 0px",
            }}>
                <Tab title="Synopsis" isActive={true}></Tab>
                <Tab title="What is for?" isActive={false}></Tab>
                <Tab title="About the author" isActive={false}></Tab>
            </div>
            <div>
                <Typography variant="body2">
                Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential
                <br/> 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs,
                <br/> visionaries, and innovators of today. This new edition combines the timeless
                <br></br> business advice and strategy of the original text, supplemented with
                 <br></br>cutting-edge insights and case studies pertinent to today’s business world.
                </Typography>
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default BookDetails;