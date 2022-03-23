import {useState} from 'react';
import './App.css';
import LandingPage from './components/pages/Landing/landingpage'
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Entrepreneurship from './components/pages/Entreprenuership/entrepreneurship'
import responsiveFontTheme from './themes/theme';
import BookDetails from './components/pages/BookDEtails/bookdetails'
function App() {
  const [finished,setFinished]=useState(false);
  return (
    <div className="App">
     

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
            <Route path='/entrepreneurship' element={<Entrepreneurship/>} />
            <Route path="/bookDetails" element={<BookDetails></BookDetails>}/>
             <Route path="*" element={<h1>Page not exist</h1>}></Route>
            </Routes>
      </BrowserRouter>
    
   
    </div>
  );
}
/*   <Header avatar={false} search={false} explore={false}  ></Header> */

export default App;

// 