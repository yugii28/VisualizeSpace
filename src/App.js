import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Title/>
    </div>
  );
}

export default App;
