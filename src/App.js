import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import APOD from './Components/APOD';
import SearchPictures from './Components/SearchPictures';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<><Navbar/><HomePage/></>}/>
        <Route path = '/apod' element = {<><Navbar/><APOD/></>}/>
        <Route path = '/search-pictures' element = {<><Navbar/><SearchPictures/></>}/>
      </Routes>
    </div>
  );
}

export default App;
