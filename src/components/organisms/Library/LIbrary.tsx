import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles, Grid, Typography, Link } from '@material-ui/core';
import API from '../../../api';
import BookCardComponent from '../../molecules/card/card';
import LibraryBtn from '../../molecules/button/librarybtn'
import Button from '../../molecules/button/button'
import Tab from '../../molecules/tab'

interface Book{
    id:number,
    imgsrc:string,
    name:string,
    author:string,
    time:string,
    numberReads:string,
    status:string,
  }
type BookTabProps={
    toAdd:boolean,
    status?:"CR"|"F",
    finishset?:()=>void,
    book?:Book
  }

  const useStyles = makeStyles((theme)=>({

    bookButton:{
        padding: theme.spacing(1),
        color: "white",
        backgroundColor : theme.palette.primary.main,
        cursor: "pointer"
      },
    middleContainer:{
        maxWidth: "59rem",
        margin: "0 auto"
    },
    libraryTabs:{
        position: "relative",
        zIndex:1,
        overflow: "visible"
    },
    tabs:{
        display:"flex",
        boxSizing: "border-box",
        flexDirection: "row",
        flex: "0 1 auto",
        padding:"3rem 0"
    },
    tabNames:{
        display:"flex",
        borderBottom: "0.125rem solid #BAC8CE",
        paddingBottom: "0.5rem",
        flexBasis: "100%",
        cursor: "pointer",
        flexDirection: "column",
        color:"black"
    },
    tabActive:{
        color:"#22C870",
        borderBottom: "0.125rem solid #22C870"
    }
}));
  const MyLibrary= () => {
 
  
    const styles = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bookState, setBookState] = useState(false);
    const [bookCardItems, setBookCardData] = useState<any[]>([]);
    const [currentTab, setCurrentTab] = useState('CR');
    const [finished,setFinished]=useState(false);

    const onchangeTab =() =>{
        currentTab === 'CR'? setCurrentTab('F'):setCurrentTab('CR');
        console.log(currentTab);
    };
    
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
            setError(error);
        }
        );
    }, [bookState]);

 const updateFunc=(book:Book)=>{
       
    API.put(`/books/${book.id}`, book)
        .then(res => res.data)
        .then((result)=>{
            console.log(result,'Book status updated successfully');
            console.log(book.id);
        },
        (error)=>{
            console.log(error, "Error while updating");
        }
         );
         
}   
const statusUpdate=(book:Book)=>{
      console.log(book.status);
    book.status === 'CR'?book.status='F':book.status='CR';
        setBookState(!bookState);
        updateFunc(book);
}
        return(
          
              <>
                
              <div className={styles.middleContainer}>
                  <div className={styles.libraryTabs}>
                      <div className={styles.tabs}>
                      <a  onClick={onchangeTab} className={currentTab === "CR"?`${styles.tabNames} ${styles.tabActive}`: `${styles.tabNames}`}><Typography  variant="subtitle1"> Currently reading</Typography></a>
                      <a  onClick={()=>{onchangeTab()}}  className={currentTab === "F"?`${styles.tabNames} ${styles.tabActive}`: `${styles.tabNames}`}><Typography  variant="subtitle1">Finished</Typography></a>
                    
                      </div>

                  </div>
              </div>
              <Grid container spacing={2}>
                  <Grid container item xs={12} spacing={4}>
                  { bookCardItems.length !== 0 && (bookCardItems.filter((bookCardItem)=>{
                        return bookCardItem.status === `${currentTab}`;
                    })?.map((bookCardItem:Book)=>(
                            <Grid key={bookCardItem.id} item xs={12} md={4}>
                                
                                <BookCardComponent id={bookCardItem.id} title={bookCardItem.name} author={bookCardItem.author} timeRead={bookCardItem.time}  img={bookCardItem.imgsrc}  status={
                                            bookCardItem.status === "CR"
                                            ? "Finished Reading"
                                            : "Currently Reading"
                                        }            
                                />

                            <LibraryBtn  title="library"  onClick={()=>{statusUpdate(bookCardItem)}}/>
                                
                            </Grid>
                    )))}
              </Grid>
           
              </Grid>  
              {bookCardItems.length === 0 && (<h3 style={{textAlign:"center"}}>You don't have any books to read</h3>)}                  
          </>
        )
        };

  export default MyLibrary;
 

/*</div>

          
        
              <button className="fetch-button" onClick={RetreiveBooks}>
           
            Fetch Data
            
            </button>
            const RetreiveBooks=async()=>{

        const response=await API.get("/books");
        setBooks(response.data);
        console.log(response.data);
    }
   img={bookCardItem.imgsrc}
   img={bookCardItem.imgsrc}
    const onStatusChange = (id:number,status:string) => {
         
       <Tab title="Currently Reading" className="CR" isActive={!finished}onClick={()=>setFinished(false)}></Tab>
                     <Tab title="Finished" className="F" isActive={finished} onClick={()=>setFinished(true)}></Tab>
*/