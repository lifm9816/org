import {useState} from "react"
import './App.css';
import Header from "./components/Header/Header.js"
import Formulario from "./components/Formulario/Formulario.js"
import MiOrg from "./components/MiOrg"
import Equipo from "./components/Equipo/Equipo.js"
import Footer from "./components/Footer/Footer.js"

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
  { 
    equipo: "Programación",
    foto: "https://github.com/lifm9816.png",
    nombre: "Luis Martínez",
    puesto: "Desarrollador Front End",
  },
  { 
    equipo: "Front End",
    foto: "https://github.com/lifm9816.png",
    nombre: "Luis Martínez",
    puesto: "Desarrollador Front End",
  },
  { 
    equipo: "Data Sciense",
    foto: "https://github.com/lifm9816.png",
    nombre: "Luis Martínez",
    puesto: "Desarrollador Front End",
  },
  { 
    equipo: "Devops",
    foto: "https://github.com/lifm9816.png",
    nombre: "Luis Martínez",
    puesto: "Desarrollador Front End",
  },
  { 
    equipo: "UX y Diseño",
    foto: "https://github.com/lifm9816.png",
    nombre: "Luis Martínez",
    puesto: "Desarrollador Front End",
  },
  { 
    equipo: "Móvil",
    foto: "https://github.com/lifm9816.png",
    nombre: "Luis Martínez",
    puesto: "Desarrollador Front End",
  },
  { 
    equipo: "Innovación y gestión",
    foto: "https://github.com/lifm9816.png",
    nombre: "Luis Martínez",
    puesto: "Desarrollador Front End",
  }
  ])

  const [equipos, actualizarEquipo] = useState(
    [
      {
        titulo: "Programación",
        colorSecundario: "#D9F7E9",
        colorPrimario: "#57C278"
      }, 
      {
        titulo: "Front End",
        colorSecundario: "#E8F8FF",
        colorPrimario: "#82CFFA"
      }, 
      {
        titulo: "Data Science",
        colorSecundario: "#F0F8E2",
        colorPrimario: "#A6D157"
      }, 
      {
        titulo: "Devops",
        colorSecundario: "#FDE7E8",
        colorPrimario: "#E06B69"
      },
      {
        titulo: "UX y Diseño",
        colorSecundario: "#FAE9F5",
        colorPrimario: "#DB6EBF"
      },
      {
        titulo: "Móvil",
        colorSecundario: "#FFF5D9",
        colorPrimario: "#FFBA05"
      },
      {
        titulo:"Innovación y gestión",
        colorSecundario: "#FFEEDF",
        colorPrimario: "#FF8A29"
      }
    ]
  )

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

  //Eliminar colaborador
  const eliminarColaborador = () =>
  {
    console.log("Eliminar colaborador");
  }

  //Actualizar color de equipo
  const actualizarColor = (color, titulo) =>
  {
    console.log("Actualizar: ", color, titulo);
    const equiposActualizados = equipos.map((equipo) =>
    {
      if(equipo.titulo === titulo)
      {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipo(equiposActualizados);
  }
 
  return (
    <div>
      <Header/>
      
      {        
        /*mostrarFormulario === true ? <Formulario 
          equipos = {equipos.map((equipo)=> equipo.titulo)} 
          registrarColaborador={registrarColaborador}
        /> : <></>*/
      }  
      {
        mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }  
      <MiOrg cambiarMostrar = {cambiarMostrar} />
      
      {
        equipos.map((equipo) => {
          return <Equipo 
          datos = {equipo} 
          key = {equipo.titulo} 
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor} />
        })
      }

      <Footer />
    </div>
  );
}

export default App;
