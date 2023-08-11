import "./ListaOpciones.css"

const ListaOpciones = (props) =>
{
    /*Método map -> arreglo.map((equipo, index) => return 
    {
        return <option><option/>
    })*/
    const equipos = [
        "Programación", 
        "Fron End", 
        "Data Science", 
        "Devops",
        "Móvil",
        "Innovación y gestión"];

    return <div className = "lista-opciones">
        <label for = {props.id}>Equipos</label>
        <select id = {props.id} placeholder = {props.placeholder}>
            {
                equipos.map((equipo, index) => <option key = {index}>{equipo}</option>)
            }
        </select>
    </div>
}

export default ListaOpciones