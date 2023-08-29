import "./Equipo.css"
import Colaborador from "../Colaborador"

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
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    const {colaboradores} = props;
    console.log(colaboradores.length > 0)

    return <>
    { colaboradores.length > 0 &&
        <section className = "equipo" style = {obj}>
            <h3 style = {estiloTitulo} >{titulo}</h3>
            <div className = "colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                datos = {colaborador}
                key = {index}
                colorPrimario = {colorPrimario} />)
            }
            </div>
        </section>
    }</>
}

export default Equipo