const Card = ({titulo, descrip, fecha}) =>
{
    return(
        <div class="card" style={{}}>
            <div class="container">
                <h2><b>{titulo}</b></h2>
                <p style={{fontSize: "small", color: "dddddd"}}>{fecha}</p>
                <p>{descrip}</p>
            </div>
        </div>
    )
}

export default Card