import Boton from "../../components/Boton"
const Saludo = (props) =>
{
    return(
    <div>
      <h1> Hola</h1>
      <p> {props.nombre}</p>
      <Boton nomre={props.nombre}/>
    </div>
    )
}

export default Saludo