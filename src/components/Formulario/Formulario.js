import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton.js"

const Formulario = () =>
{
    return <section className = "formulario">
        <form>
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