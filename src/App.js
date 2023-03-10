import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landsat from './Components/Landsat';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<><Navbar/><HomePage/></>}/>
        <Route path = '/satellite-images' element = {<><Navbar/><Landsat/></>}/>
      </Routes>
    </div>
  );
}

export default App;
