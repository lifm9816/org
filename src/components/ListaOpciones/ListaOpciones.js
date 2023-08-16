import "./ListaOpciones.css"

const ListaOpciones = (props) =>
{
    /*Método map -> arreglo.map((equipo, index) => return 
    {
        return <option><option/>
    })*/

    const manejarCambio = (e) =>
    {
        props.actualizarValor(e.target.value)
    }

    return <div className = "lista-opciones">
        <label htmlFor = {props.id}>Equipos</label>
        <select id = {props.id} value = {props.valor} onChange = {manejarCambio} >
            <option value = "" disabled defaultValue = "" hidden >{props.placeholder}</option>
            {
                props.equipos.map((equipo, index) => <option key = {index} value = {equipo} >{equipo}</option>)
            }
        </select>
    </div>
}

export default ListaOpciones