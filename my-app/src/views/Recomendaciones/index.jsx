import TextoRecomendaciones from "../../components/TextoRecomendaciones"
import Titulo from "../../components/Titulo"
import comillas from "../../img/comillas.png"

const Recomendaciones = () =>
{
    return(
        <section>
            <>
            <Titulo
            texto = "Recomendaciones"
            />
            <div style={{display: "flex", justifyContent: "center", columnGap: "10vw"}}>
                <TextoRecomendaciones
                texto = "Angie fue muy didáctica y transmitió los contenidos de la cursada de una manera que se me hizo muy fácil de entender. Siempre estuvo a disposición para despejar dudas y fue realmente de ayuda en la resolución de los distintos ejercicios."
                imagen = {comillas}
                />
                <TextoRecomendaciones
                texto = "Su dedicación, compromiso, adaptabilidad e ingenio han colaborado en lograr que los proyectos planteados por todo el equipo se logren y generen un alto impacto en estudiantes y docentes."
                imagen = {comillas}
                />
            </div>
            <div style={{display: "flex", justifyContent: "center", columnGap: "10vw"}}>
                <TextoRecomendaciones
                texto = "Desde muy joven ha demostrado ser una profesional sumamente responsable, destacada por su compromiso, calidad humana, capacidad de escucha, trabajo en equipo, movilizadora de ideas y proyectos, y una gran humildad para seguir superandose. Cada vez que recibió mas tareas, responsabilidades y compromisos, logró cumplir cada uno de los objetivos."
                imagen = {comillas}
                />
                <TextoRecomendaciones
                texto = "Sin duda alguna, una de las mejores profesores de programación que he tenido no solo por su conocimiento en el área, sino también por su gran capacidad para transmitir dichos conocimientos, logrando que cada clase sea indispensable y entretenida. Es una persona dedicada que siempre nos ha sabido guiar en nuestro proceso de aprendizaje, generando confianza y empatía con todos."
                imagen = {comillas}
                />
            </div>
            </>
        </section>
    )   
}

export default Recomendaciones