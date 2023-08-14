import {useState} from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton.js"

const Formulario = () =>
{
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    //Función que evitará que la página se recarge
    //cada que se llena la función del formulario
    const manejarEnvio = (evento) => 
    {
        evento.preventDefault();
        console.log("Manejar envío", evento);
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto
        }
        console.log(datosAEnviar);
    }

    return <section className = "formulario">
        <form onSubmit = {manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto id = "nombre" titulo = "Nombre" placeholder = "Ingresar nombre" required valor = {nombre} actualizarValor = {actualizarNombre} />
            <CampoTexto id = "puesto" titulo = "Puesto" placeholder = "Ingresar puesto" required valor = {puesto} actualizarValor = {actualizarPuesto} />
            <CampoTexto id = "foto" titulo = "Foto" placeholder = "Ingresar enlace de foto" required valor = {foto} actualizarValor = {actualizarFoto} />
            <ListaOpciones id = "opciones" placeholder = "Seleccionar equipo" required/>
            <Boton texto = "Crear"/>
        </form>
    </section>
}

export default Formulario