const Icono = ({imagen,url}) => 
{

    return(
        <button style={{width: "2vw", height: "2vw", border: "none", backgroundColor: "transparent"}}><a href={url}><img src={imagen} alt="" style={{width: "1.5vw", height: "1.5vw"}}/></a>  </button>

        )
    
}

export default Icono
