import {useState} from "react"
import './App.css';
import Header from "./components/Header/Header.js"
import Formulario from "./components/Formulario/Formulario.js"
import MiOrg from "./components/MiOrg"
import Equipo from "./components/Equipo/Equipo.js"

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([])

  //? = Si es verdadero
  //: = Si no es verdadero
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () =>
  {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>
  {
    console.log("Nuevo colaborador", colaborador)
    //Spread Operator: Crear una copia de los valores actuales
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      fondo: "#D9F7E9",
      destaques: "#57C278"
    }, 
    {
      titulo: "Front End",
      fondo: "#E8F8FF",
      destaques: "#82CFFA"
    }, 
    {
      titulo: "Data Science",
      fondo: "#F0F8E2",
      destaques: "#A6D157"
    }, 
    {
      titulo: "Devops",
      fondo: "#FDE7E8",
      destaques: "#E06B69"
    },
    {
      titulo: "UX y Diseño",
      fondo: "#FAE9F5",
      destaques: "#DB6EBF"
    },
    {
      titulo: "Móvil",
      fondo: "#FFF5D9",
      destaques: "#FFBA05"
    },
    {
      titulo:"Innovación y gestión",
      fondo: "#FFEEDF",
      destaques: "#FF8A29"
    }
  ];
 
  return (
    <div>
      <Header/>
      { 
        /*mostrarFormulario === true ? <Formulario equipos = {equipos.map((equipo)=> equipo.titulo)} /> : <></>*/
        mostrarFormulario && <Formulario equipos = {equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador = {registrarColaborador}
        />
      }  
      <MiOrg cambiarMostrar = {cambiarMostrar} />
      
      {
        equipos.map((equipo) => {
          return <Equipo datos = {equipo} key = {equipo.titulo} />
        })
      }

    </div>
  );
}

export default App;
