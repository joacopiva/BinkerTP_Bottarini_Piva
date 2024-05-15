const Navbar = () =>
{
    let listaNavbar = ["Acerca de Mi ", "Conocimientos ", "Experiencia ", "Educacion ", "Certificacion ", "Contacto"]

    return(
        
        <div style={{ width: "100%", height: "4vw", backgroundColor: "#e0f8ff"}}>
            <div style={{padding: "1.25vw", paddingRight: "9vw"}}>
                <nav style={{display: "flex", flexDirection: "row-reverse"}}>   <strong>{listaNavbar}</strong> </nav>
            </div>     
        </div>
    )
}

export default Navbar