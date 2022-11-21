import {Routes,Route, BrowserRouter} from 'react-router-dom';
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
        <Route path='/req' element={<><Header/><Req/></>}/>
        <Route path="/requests" element={<><Header/><Requests/></>}/>
        <Route path="/edit" element={<><Header/><Editcif/></>}/>
        <Route path="/view" element={<><Header/><Viewcif/></>}/>
        <Route path="/home" element = {<><Header/><Home/></>}/>
        <Route path="/login" element = {<><Header/><Login/></>}/>
        <Route path="/" element={<><Header/><Start/></>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
