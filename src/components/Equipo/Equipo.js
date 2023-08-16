import "./Equipo.css"

const Equipo = (props) =>
{
    /*Destructuración
    const {titulo, fondo, destaques} = props.datos
    
    return <section className = "equipo" style = {{backgroundColor: fondo}}>
        <h3 style = {{borderColor: destaques}} >{titulo}</h3>
        <div className = "colaboradores"></div>
    </section>
    */
    const fondo =
    {
        backgroundColor: props.datos.fondo,
    }

    const destaques =
    {
        borderColor: props.datos.destaques
    }

    return <section className = "equipo" style = {fondo}>
        <h3 style = {destaques} >{props.datos.titulo}</h3>
        <div className = "colaboradores"></div>
    </section>
}

export default Equipo