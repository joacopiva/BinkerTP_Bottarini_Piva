import FlipCard from "../../components/FlipCard"
import Titulo from "../../components/Titulo"
import card1 from "../../img/card1.png"
import card2 from "../../img/card2.png"
import card3 from "../../img/card3.png"
import card4 from "../../img/card4.png"
const Experiencia = () =>
{
    return(
        <section id="#experiencia"> 
        <Titulo
        texto = {"Experiencia"}
        />
        <div style={{display: "flex", margin: "5vw", justifyContent: "space-between"}}>
            <FlipCard
            imagen = {card1}
            titulo = {"Diseñadora y Programadora Web"}
            fecha = {"feb. 2020 - dic. 2021 1 año 11 meses"}
            texto = {"Asesoría integral a empresas que quieren armar su página web. Institucionales. E-commerce. Diseño Gráfico, Logotipos, Fotografía, Edición Fotográfica."}
            />

            <FlipCard
            imagen = {card2}
            titulo = {"Profesora/Mentora HTML, CSS, JS, React.JS"}
            fecha = {"ago. 2021 - mar. 2022 8 mes"}
            texto = {"Como mentora, enseño programación web desde 0 con explicaciones claras y demostración de código. Planifico temas, doy clases, coordino reuniones virtuales y apoyo a los alumnos. Tecnologías: React, CSS, HTML, Javascript, Github."}
            />

            <FlipCard
            imagen = {card3}
            titulo = {"Mobile Developer"}
            fecha = {"may. 2022 - nov. 2022 7 mes"}
            texto = {"Formo parte del desarrollo de una aplicación móvil de servicios cloud para la división de Sony USA."}
            />

            <FlipCard
            imagen = {card4}
            titulo = {"Co-fundadora: Get out! Sala de escape"}
            fecha = {"feb. 2018 - feb. 2019 1 año 1 mes"}
            texto = {"Pensado y armado de salas de escape. Atención al cliente/ game master. Desarrollo web. Community Manager. Gestión y seguimiento contable. Confección de presupuestos"}
            />
        </div> 
        </section>
    )
}

export default Experiencia