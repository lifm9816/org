import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton.js"

const Formulario = () =>
{
    //Función que evitará que la página se recarge
    //cada que se llena la función del formulario
    const manejarEnvio = (evento) => 
    {
        console.log("Manejar envío", evento);
    }

    return <section className = "formulario">
        <form onSubmit = {manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto id = "nombre" titulo = "Nombre" placeholder = "Ingresar nombre"/>
            <CampoTexto id = "puesto" titulo = "Puesto" placeholder = "Ingresar puesto" />
            <CampoTexto id = "foto" titulo = "Foto" placeholder = "Ingresar enlace de foto" />
            <ListaOpciones id = "opciones" placeholder = "Seleccionar equipo"/>
            <Boton texto = "Crear"/>
        </form>
    </section>
}

export default Formulario