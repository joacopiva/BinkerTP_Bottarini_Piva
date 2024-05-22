import {useState} from "react";
import './App.css';
import Inicio from './views/Inicio';
import Main from "./views/Main";
import AcercaDeMi from "./views/AcercaDeMi";
import Conocimientos from "./views/Conocimientos";
import Experiencia from "./views/Experiencia";
import Recomendaciones from "./views/Recomendaciones";


function App() {
  
  return (
    <>
      
      <Inicio/>
      <Main/>
      <AcercaDeMi/> 
      <Conocimientos/>
      <Experiencia/>
      <Recomendaciones/>
 
    </>

  );
}

export default App;