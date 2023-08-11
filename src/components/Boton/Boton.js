import "./Boton.css"

const Boton = (props) =>
{
    return <button type = "submit" className = "boton">{props.texto}</button>
}

export default Boton