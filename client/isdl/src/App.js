import { useState } from 'react';
import {Routes,Route, BrowserRouter, useSearchParams} from 'react-router-dom';
import './App.css';
import Editcif from './Editcif';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Req from './Req';
import Requests from './Requests';
import Start from './Start';
import { useStateValue } from './StateProvider';
import Viewcif from './Viewcif';

function App() {
  const [{userType, user}, dispatch] = useStateValue();
  const [token,setToken] = useState();
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/req/:id" element={<><Header/><Req/></>}/>
        <Route path="/requests" element={<><Header/><Requests/></>}/>
        <Route path="/edit/:id" element={<><Header/><Editcif/></>}/>
        <Route path="/view/:id" element={<><Header/><Viewcif /></>}/>
        <Route path="/home" element = { <><Header/><Home/></>}/>
        <Route path="/login" element = {<><Header/><Login/></>}/>
        <Route path="/" element={<><Header/><Start/></>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
