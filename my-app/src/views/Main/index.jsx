import Icono from "../../components/Iconos";
import Foto from "../../components/Foto";
import logoLinkedin from "../../img/logo_linkedin.png";
import logoGithub from "../../img/logo_github.png"
import logoBehance from "../../img/logo_behance.png"
import BotonAmarillo from "../../components/BotonAmarillo";
const Main = () =>
{
    const urlLnk = "https://ar.linkedin.com/in/angeles-pe%C3%B1a?challengeId=AQHv2POg2CmJ9QAAAY99M9VtB23JaM2Pvw9s9yuHGs3Jo8HfNlmLd7UlAoX0D0_rq0or4ffAyaUYpUAe9nQARri0RWSbGzio5Q&submissionId=f8c08c10-30b8-cf17-6ffa-7c624ff00d1c&challengeSource=AgGjpoM6lvo-tAAAAY99M91Iq0139x7Q-bRBHz-pJVyik-qXHj2vsZIhbRxDYPk&challegeType=AgEEyW9Z-0aUaAAAAY99M91Lm7RRAGYWped-oY6X5Jol1ycXnI06-gc&memberId=AgE0wIvElw15MAAAAY99M91OXg7LDQ20YBAM917RdphwoFU&recognizeDevice=AgEiOzt83LC81AAAAY99M91R8LweWVxhUOZfGW5dCvlr9CGne_Qm"
    const urlGit = "https://github.com/"
    const urlBehance = "https://www.behance.net/"  
    const textoBoton = "Contactame!" 
    

    return(
    <section id="main" style={{display: "flex"}}>
    <>
    <Foto
    url = "https://ezebinker.github.io/images/illustrations/hello3.svg"
    />
    </>
    <div style={{flexDirection: "column", paddingTop: "8vw"}}>
        <p style={{fontSize: "x-large"}}>Buenas!</p>
        <h1 style={{fontSize: "xx-large"}}>Soy Angeles Fabiana Peña</h1>
        <p style={{fontSize: "large"}}>Tec. Sup. en Análisis de Sistemas y Profesora de Programacion</p>
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
        <div style={{paddingTop: "45px"}}>
        <BotonAmarillo
        texto = {textoBoton}
        />
        </div>
    </div>
    
        
    

    
    </section>
)
    }
export default Main; 