import FotoAngie from "../../components/FotoAngie";
const AcercaDeMi = () =>
{
    
    
    return(
        <section id="#acercademi" style={{display: "flex"}}>
        <div style={{flexDirection: "column", width: "30vw", paddingLeft: "14vw"}}> 
        <h1><strong>Hola! Me llamo Angeles Peña.</strong></h1>
            <p>
                Soy Docente de las materias:<br/>
                - Desarrollo de Aplicaciones Informáticas<br/>
                - Estructuras y funcionamiento de los sistemas operativos II<br/>
                En 5to año de secundaria con especialización en Informática<br/><br/><br/>

                Edad: <strong>31</strong><br/><br/>
                Email: <strong>angeles.peña@ort.edu.ar</strong><br/><br/><br/>

                Mi responsabilidad como profesora es enseñar y acompañar a personas que dan sus primeros pasos en la programación mediante explicaciones didácticas y demostración de código.<br/>
                Mis tareas incluyen la preparación la exposición oral, el control de las reuniones virtuales, el trato directo y acompañamiento de los alumnos, y la organización con los tutores.<br/>
                Tecnología: React
            </p>
        </div>
        <FotoAngie
        url = "https://media.licdn.com/dms/image/C4D03AQGrm4j0gCM5Lg/profile-displayphoto-shrink_200_200/0/1590530518694?e=2147483647&v=beta&t=bFsB5CNG65BebCCVmA4tkyGEM6n6cjSv4ZozCT2bdys"
        />
        </section>
    )
}
export default AcercaDeMi