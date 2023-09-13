import {useState} from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import CampoColor from "../../CampoColor/CampoColor"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton.js"

const Formulario = (props) =>
{
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");
    //Función que evitará que la página se recarge
    //cada que se llena la función del formulario

    const {registrarColaborador} = props

    const manejarEnvio = (evento) => 
    {
        evento.preventDefault();
        console.log("Manejar envío", evento);
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }

    return <section className = "formulario">
        <form onSubmit = {manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                id = "nombre" 
                titulo = "Nombre" 
                placeholder = "Ingresar nombre" 
                required 
                valor = {nombre} 
                actualizarValor = {actualizarNombre} />
            <CampoTexto 
                id = "puesto" 
                titulo = "Puesto" 
                placeholder = "Ingresar puesto" 
                required 
                valor = {puesto} 
                actualizarValor = {actualizarPuesto} />
            <CampoTexto 
                id = "foto" 
                titulo = "Foto" 
                placeholder = "Ingresar enlace de foto" 
                required 
                valor = {foto} 
                actualizarValor = {actualizarFoto} />
            <ListaOpciones 
                id = "opciones" 
                placeholder = "Seleccionar equipo" 
                required 
                valor = {equipo} 
                actualizarValor = {actualizarEquipo} 
                equipos = {props.equipos} />
            <Boton texto = "Crear"/>
        </form>
        <form onSubmit = {manejarEnvio}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <CampoTexto 
                id = "titulo" 
                titulo = "Título del equipo" 
                placeholder = "Ingresar título" 
                required 
                valor = {titulo} 
                actualizarValor = {actualizarTitulo} />
            <CampoColor 
                id = "color"
                titulo = "Selecciona el color del nuevo equipo"
                valor = {color}
                actualizarValor = {actualizarColor}
                 />
        </form>
    </section>
}

export default Formulario