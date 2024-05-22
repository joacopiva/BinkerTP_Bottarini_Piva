const TextoRecomendaciones = ({texto, imagen}) =>
{
    return(
        <div style={{width: "20vw", height: "10vw", border: "1px blue"}}> 
        <img src={imagen} alt="" style={{height: "1vw", width: "1vw"}}/>
        <p>{texto}</p>
        </div>
    )
}
export default TextoRecomendaciones