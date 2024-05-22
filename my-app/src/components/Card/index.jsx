const Card = ({imagen, titulo, texto, fecha}) =>
{
    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={imagen} alt="Avatar" style={{width:"300px", height: "300px"}}></img>
                </div>
                <div class="flip-card-back" style={{padding: "1vw"}}>
                    <h1>{titulo}</h1> 
                    <p style={{color: "#dddddd", fontSize: "small"}}>{fecha}</p>
                    <p>{texto}</p> 
                </div>
            </div>
        </div>
    )
}

export default Card