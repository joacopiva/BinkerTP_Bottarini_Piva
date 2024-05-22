import FormContacto from "../../components/FormContacto"
import Titulo from "../../components/Titulo"
import Icono from "../../components/Iconos";
import logoLinkedin from "../../img/logo_linkedin.png";
import logoGithub from "../../img/logo_github.png"
import logoBehance from "../../img/logo_behance.png"

const Contacto = () =>
{
    const urlLnk = "https://ar.linkedin.com/in/angeles-pe%C3%B1a?challengeId=AQHv2POg2CmJ9QAAAY99M9VtB23JaM2Pvw9s9yuHGs3Jo8HfNlmLd7UlAoX0D0_rq0or4ffAyaUYpUAe9nQARri0RWSbGzio5Q&submissionId=f8c08c10-30b8-cf17-6ffa-7c624ff00d1c&challengeSource=AgGjpoM6lvo-tAAAAY99M91Iq0139x7Q-bRBHz-pJVyik-qXHj2vsZIhbRxDYPk&challegeType=AgEEyW9Z-0aUaAAAAY99M91Lm7RRAGYWped-oY6X5Jol1ycXnI06-gc&memberId=AgE0wIvElw15MAAAAY99M91OXg7LDQ20YBAM917RdphwoFU&recognizeDevice=AgEiOzt83LC81AAAAY99M91R8LweWVxhUOZfGW5dCvlr9CGne_Qm"
    const urlGit = "https://github.com/"
    const urlBehance = "https://www.behance.net/"  
    return(
        <section id="#contacto">
            <Titulo
            texto = {"Contacto"}
            />
            <div style={{display: "flex", justifyContent: "center", columnGap: "5vw", marginBottom: "8vw"}}>
                <FormContacto/>
                <p style={{width: "23vw"}}> <strong style={{fontSize: "x-large"}}> Sigamos en contacto! </strong><br /><br />
                    Consultame lo que necesites a través del formulario o enviandome un mail a mi correo personal <br /><br />

                    ¡Gracias por visitar mi sitio web! <br /><br />

                    Email:<strong style={{marginLeft: "1.5vw"}}>angeles.peña@ort.edu.ar</strong>
                </p>
            </div>
            
                <div class="footer" style={{fontSize: "medium", /*REVISAR QUE EL FOOTER QUDE TODO ABAJO*/}}>
                    <br />
                    <p>Angeles Peña</p>
                    <p>Tec. Sup. en Análisis de Sistemas y Profesora de Programacion</p>
                    <Icono
                    url = {urlLnk} 
                    imagen={logoLinkedin}
                    />
                    <Icono
                    url = {urlGit} 
                    imagen={logoGithub}
                    />
                    <Icono
                    url = {urlBehance} 
                    imagen={logoBehance}
                    />
                    <br />
                    <p style={{marginBottom: "4vw"}}>©2024 Angeles Peña. Todos los derechos reservados</p>
                </div>
            
            
        </section>
    )
}

export default Contacto 