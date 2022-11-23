import { useState } from 'react';
import {Routes,Route, BrowserRouter, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Editcif from './Editcif';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Req from './Req';
import Requests from './Requests';
import Start from './Start';
import Viewcif from './Viewcif';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/req/:id" element={localStorage.getItem('Username') && localStorage.getItem('Type') === "Adm" && <><Header/><Req/></>}/>
        <Route path="/requests" element={ localStorage.getItem('Username') && localStorage.getItem('Type') === "Adm" && <><Header/><Requests/></>}/>
        <Route path="/edit/:id" element={ localStorage.getItem('Username') && (localStorage.getItem('Type') === "Faculty" || localStorage.getItem('Type') === "Adm") && <><Header/><Editcif/></>}/>
        <Route path="/view/:id" element={ localStorage.getItem('Username') && <><Header/><Viewcif /></>}/>
         <Route path="/home" element={ localStorage.getItem('Username') && <><Header/><Home/></>}/> 
        <Route path="/login" element = {<><Header/><Login/></>}/>
        <Route path="/" element={<><Header/><Start/></>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
