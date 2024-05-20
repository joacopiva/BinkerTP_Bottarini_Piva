const Card = ({imagen, titulo, texto}) =>
{
    return(
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={imagen} alt="Avatar" style={{width:"300px", height: "300px"}}></img>
                </div>
                <div class="flip-card-back">
                    <h1>{titulo}</h1> 
                    <p>{texto}</p> 
                </div>
            </div>
        </div>
    )
}

export default Card