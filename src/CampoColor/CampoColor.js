import "./CampoColor.css"

const CampoColor = (props) =>
{
    const manejarCambio = (e) =>
    {
        props.actualizarValor(e.target.value)
    }

    return <div className = "campo-color">
        <label htmlFor = {props.id} > {props.titulo} </label>
        <input type = "color" 
            id = {props.id}
            defaultValue = "#19192D"
            onChange = {manejarCambio}
         />
    </div>
}

export default CampoColor