import {useState} from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>
{

    const placeholderModificado = `${props.placeholder}...`

    //Destructuración
    const {type = "text"} = props;

    const manejarCambio = (e) =>
    {
        props.actualizarValor(e.target.value)
    }

    return <div className = "campo-texto">
        <label htmlFor = {props.id} >{props.titulo}</label>
        <input id = {props.id} placeholder = {placeholderModificado} required = {props.required} value = {props.valor} onChange = {manejarCambio} type = {type}/>
    </div>
}

export default CampoTexto