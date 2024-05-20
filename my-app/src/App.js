import {useState} from "react";
import './App.css';
import Inicio from './views/Inicio';
import Main from "./views/Main";
import AcercaDeMi from "./views/AcercaDeMi";
import Conocimientos from "./views/Conocimientos";
import Experiencia from "./views/Experiencia";


function App() {
  
  return (
    <>
      
      <Inicio/>
      <Main/>
      <AcercaDeMi/> 
      <Conocimientos/>
      <Experiencia/>
 
    </>

  );
}

export default App;