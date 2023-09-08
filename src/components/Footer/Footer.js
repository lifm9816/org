import "./Footer.css"

const Footer = () => 
{
    return <footer className = "footer">
        <div className = "redes">
            <a href = "https://www.aluracursos.com/">
                <img src = "/img/facebook.png" alt = "Facebook" />
            </a>
            <a href = "https://www.aluracursos.com/">
                <img src = "/img/twitter.png" alt = "Twitter" />
            </a>
            <a href = "https://www.aluracursos.com/">
                <img src = "/img/instagram.png" alt = "Instagram" />
            </a>
        </div>
        <img src = "/img/Logo.png" alt = "org" />
        <strong>Desarrollado por: Luis Ignacio Flores Martínez</strong>
    </footer>
}

export default Footer