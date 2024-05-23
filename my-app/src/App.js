import {useState} from "react";
import './App.css';
import Inicio from './views/Inicio';
import Main from "./views/Main";
import AcercaDeMi from "./views/AcercaDeMi";
import Conocimientos from "./views/Conocimientos";
import Experiencia from "./views/Experiencia";
import Recomendaciones from "./views/Recomendaciones";
import Educacion from "./views/Educacion";
import Contacto from "./views/Contacto";
import Footer from "./views/Footer";


function App() {
  
  return (
    <>
      
      <Inicio/>
      <Main/>
      <AcercaDeMi/> 
      <Conocimientos/>
      <Experiencia/>
      <Recomendaciones/>
      <Educacion/>
      <Contacto/>
      <Footer/>
 
    </>

  );
}

export default App;