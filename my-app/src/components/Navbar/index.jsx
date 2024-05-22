const Navbar = () =>
{
    let listaNavbar = ["Acerca de Mi ", "Conocimientos ", "Experiencia ", "Educacion ", "Certificacion ", "Contacto"]

    return(
        /* 
        <div style={{ width: "100%", height: "4vw", backgroundColor: "#e0f8ff"}}>
            <div style={{padding: "1.25vw", paddingRight: "9vw"}}>
                <nav style={{display: "flex", flexDirection: "row-reverse"}}>   <strong>{listaNavbar}</strong> </nav>
            </div>     
        </div>
        */

        /*REVISAR NAVBAR Y LINKS */
       
        <div class="topnav" id="myTopnav">
          <a href="views#main" class="active">Home</a>
          <a href="views#acercademi">Acerca de mi</a>
          <a href="views#conocimientos">Conocimientos</a>
          <a href="views#experiencia">Experiencia</a>
          <a href="#recomendaciones">Recomendaciones</a>
          <a href="#educacion">Educacion</a>
          <a href="#contacto">Contacto</a>
        </div>
    )
}

export default Navbar