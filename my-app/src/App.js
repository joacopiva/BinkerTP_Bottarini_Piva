import {useState} from "react";
import './App.css';
import Saludo from './views/Saludo';
import Inicio from './views/Inicio';
import Boton from "./components/Boton";

function App() {
  const [nombre, setNombre] = useState("Agostina")

  const cambiarNombre = () =>
  {
    setNombre("Joaquin")
  }
  console.log(nombre)

    //let nombre = "joaquin"
  return (
    <>
      
      <Inicio nombre={nombre}/>
      <Saludo nombre={nombre}/>
      <button onClick = {cambiarNombre}>Cambiar Nombre</button>
    </>

  );
}

export default App;