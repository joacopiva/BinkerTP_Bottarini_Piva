let IconosConocimientos = ({url, texto}) =>
(
    <div style={{margin: "10", textAlign: "center", justifyContent: "space-between", margin: "4vw", paddingLeft: "6vw", marginTop: "3vw", marginBottom: "5vw"}}>
        <img src={url} alt="..."  style={{ width: "7vw", height: "7vw"}}></img>
        <p style={{fontSize: "large"}}> {texto}</p>
    </div>

)
export default IconosConocimientos