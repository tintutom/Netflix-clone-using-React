import React from "react"
import NavBar from "./components/NavBar/NavBar";
import {originals,action} from './urls'
import './App.css'
import Banner from "./components/Banner/Banner";
import RawPost from "./components/RawPost/RawPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RawPost url={originals} title='Netflix Originals'/>
      <RawPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
