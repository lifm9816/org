import "./CampoTexto.css"

const CampoTexto = (props) =>
{
    const placeholderModificado = `${props.placeholder}...`
    return <div className = "campo-texto">
        <label htmlFor = {props.id} >{props.titulo}</label>
        <input id = {props.id} placeholder = {placeholderModificado} />
    </div>
}

export default CampoTexto