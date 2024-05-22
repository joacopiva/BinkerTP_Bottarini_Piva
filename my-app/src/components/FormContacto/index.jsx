const FormContacto = () =>
{
    return(
    <div class="container" style={{width: "20vw"}}>
        <form action="/action_page.php">
            <label for="fname"><strong>Nombre</strong></label>
            <input type="text" id="fname" name="firstname" placeholder="Tu nombre..."/>

            <label for="lname"><strong>Correo electrónico</strong></label>
            <input type="text" id="lname" name="lastname" placeholder="Tu correo electronico..."/>

            <label for="subject"><strong>Mensaje</strong></label>
            <textarea id="subject" name="subject" style={{height: "200px"}}></textarea>

            <input type="submit" value="Enviar" style={{color: "black"}}/>
        </form>
    </div>
    )

}

export default FormContacto