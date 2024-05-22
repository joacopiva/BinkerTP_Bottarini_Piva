import IconosConocimientos from "../../components/IconosConocimientos"
import Titulo from "../../components/Titulo"

let Conocimientos = () =>
{
    const url1 = "https://ezebinker.github.io/images/services/web-programming.svg"
    const texto1 = "Desarrollo Web"
    const url2 = "https://ezebinker.github.io/images/services/app-development.svg"
    const texto2 = "Desarrollo Móbil"
    const url3 = "https://ezebinker.github.io/images/services/blockchain.svg"
    const texto3 = "Blockchain & Criptomonedas"
    const url4 = "https://ezebinker.github.io/images/services/ui-ux.svg"
    const texto4 = "UX/UI"
    return(
        <section id="#conocimientos">
            <>
            <Titulo
            texto = {"Conocimientos"}
            />
            

            <strong>
            <div style={{display: "flex"}}>
                
            <IconosConocimientos
            url = {url1}
            texto = {texto1}
            />
            
            <IconosConocimientos
            url = {url2}
            texto = {texto2}
            />

            <IconosConocimientos
            url = {url3}
            texto = {texto3}
            />
            <IconosConocimientos
            url = {url4}
            texto = {texto4}
            />
            </div>
            </strong>
            </>
        </section>
        
        
        
        
    )   
}
export default Conocimientos