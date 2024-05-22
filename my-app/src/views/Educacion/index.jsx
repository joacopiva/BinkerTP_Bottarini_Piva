import Titulo from "../../components/Titulo"
import Card from "../../components/Card"

const Educacion = () =>
{
    return(
    <section id="#educacion">
    <Titulo
    texto = {"Educación"}
    />

    <div style={{display: "flex", marginBottom: "3vw", justifyContent: "center", columnGap: "4vw"}}>
        <Card
        titulo = {"ESBA"}
        fecha = {"2020 - 2021"}
        descrip = {"Analista de Sistemas Computer Systems Analysis"}
        />
        <Card
        titulo = {"Universidad Argentina de la Empresa"}
        fecha = {"2015 - 2018"}
        descrip = {"Contador Publico Ciencias economicas"}
        />
    </div>

    <div style={{display: "flex", marginBottom: "2vw", justifyContent: "center", columnGap: "4vw"}}>
        <Card
        titulo = {"Nueva escuela de diseño y comunicación"}
        fecha = {"2016 - 2017"}
        descrip = {"Diseñador Gráfico. Dos años cursados."}
        />
        <Card
        titulo = {"Museo fotografico Simik"}
        fecha = {"2016 - 2016"}
        descrip = {"Curso de fotografía."}
        />
    </div>
    
    </section>
    )
}

export default Educacion