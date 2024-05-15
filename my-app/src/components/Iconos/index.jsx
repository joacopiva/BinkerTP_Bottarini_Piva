const Icono = ({imagen,url}) => 
{

    return(
        <button onClick={url} style={{width: "2vw", height: "2vw", border: "none"}}> <img src={imagen} alt="" style={{width: "1.5vw", height: "1.5vw"}}/> </button>
    )
    
}

export default Icono
