import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) =>
{
    //Destructuración
    const {colorPrimario, colorSecundario, titulo} = props.datos
    
    /*
    return <section className = "equipo" style = {{backgroundColor: fondo}}>
        <h3 style = {{borderColor: destaques}} >{titulo}</h3>
        <div className = "colaboradores"></div>
    </section>
    */
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.4)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    const {colaboradores, eliminarColaborador, actualizarColor} = props;

    return <>
    { colaboradores.length > 0 &&
        <section className = "equipo" style = {obj}>
            <input
                type="color"
                className = "input-color"
                value = {colorPrimario}
                onChange = {(evento) => {
                    actualizarColor(evento.target.value, titulo )
                }}
            />
            <h3 style = {estiloTitulo} >{titulo}</h3>
            <div className = "colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                datos = {colaborador}
                key = {index}
                colorPrimario = {colorPrimario}
                colorSecundario = {colorSecundario}
                eliminarColaborador = {eliminarColaborador} />)
            }
            </div>
        </section>
    }</>
}

export default Equipo