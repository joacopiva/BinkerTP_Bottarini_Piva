import Card from "../../components/Card"
import card1 from "../../img/card1.png"
import card2 from "../../img/card2.png"
import card3 from "../../img/card3.png"
import card4 from "../../img/card4.png"
const Experiencia = () =>
{
    return(
        <section id="#experiencia"> 
            <Card
            imagen = {card1}
            titulo = {"Diseñadora y Programadora Web"}
            texto = {"dddddddddd"}
            />

            <Card
            imagen = {card2}
            titulo = {"Diseñadora y Programadora Web"}
            texto = {"dddddddddd"}
            />

            <Card
            imagen = {card3}
            titulo = {"Diseñadora y Programadora Web"}
            texto = {"dddddddddd"}
            />

            <Card
            imagen = {card4}
            titulo = {"Diseñadora y Programadora Web"}
            texto = {"dddddddddd"}
            />
        </section>
    )
}

export default Experiencia