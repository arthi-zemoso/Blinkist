import {useState} from 'react';
import './App.css';
import LandingPage from './components/pages/Landing/EntryPage'
import { Routes, BrowserRouter, Route} from 'react-router-dom';
import Entrepreneurship from './components/pages/Entreprenuership/entrepreneurship'
import responsiveFontTheme from './themes/theme';
import BookDetails from './components/pages/BookDEtails/bookdetails'
import Footer from "./components/organisms/Footer/footer";
import Header from "./components/organisms/Header/header";
//import LogoutButton from './components/organisms/Logout';
import {ThemeProvider} from "@mui/material"
import Coverpage from "./components/pages/Coverpage/coverpage";

function App() {
 
  return (
    <div className="App">
     <ThemeProvider theme={responsiveFontTheme}>
       
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coverpage/>} />
            <Route path='/entrepreneurship' element={<Entrepreneurship/>} />
            <Route path="/bookDetails" element={<BookDetails></BookDetails>}/>
            <Route path='/library' element={<LandingPage/>}></Route>
             <Route path="*" element={<h1>Page not exist</h1>}></Route>
            </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
/*   <Header avatar={false} search={false} explore={false}  ></Header> */

export default App;

// 