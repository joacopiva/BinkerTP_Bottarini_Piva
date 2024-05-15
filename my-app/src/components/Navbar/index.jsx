const Navbar = () =>
{
    let listaNavbar = ["AcercadeMi ", "Conocimientos ", "Experiencia ", "Eduacacion ", "Certificacion ", "Contacto"]

    return(
        
        <div style={{width: "100%", height: "4vw", backgroundColor: "#e0f8ff"}}>
            <div style={{}}>
                <nav style={{display: "flex", flexDirection: "row-reverse"}}> {listaNavbar} </nav>
            </div>
             
        </div>
        
    )
}

export default Navbar