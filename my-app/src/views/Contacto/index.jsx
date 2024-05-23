import FormContacto from "../../components/FormContacto"
import Titulo from "../../components/Titulo"

const Contacto = () =>
{
    return(
        <section id="contacto" style={{paddingTop: "6vw"}}>
            <Titulo
            texto = {"Contacto"}
            />
            <div style={{display: "flex", justifyContent: "center", columnGap: "5vw", marginBottom: "3vw"}}>
                <FormContacto/>
                <p style={{width: "23vw"}}> <strong style={{fontSize: "x-large"}}> Sigamos en contacto! </strong><br /><br />
                    Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal <br /><br />

                    ¡Gracias por visitar mi sitio web! <br /><br />

                    Email:<strong style={{marginLeft: "1.5vw"}}>angeles.peña@ort.edu.ar</strong>
                </p>
            </div>
            
            
        </section>
    )
}

export default Contacto 