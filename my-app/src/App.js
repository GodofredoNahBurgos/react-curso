import React, { Component } from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosEs6, EventosEs7, MasSobreEventos } from './components/eventos';
import ComunicacionCompoentes from './components/ComunicacionCompoentes';
import { CicloVida } from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
class App extends Component {

  render() {

    let nombre = "Jhon";
    let auth = false;
    let estaciones = ["Primavera", "Verano", "Otoño", "Inverno"];
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <label htmlFor='nombre'>Nombre</label>
          <input type="text" id="nombre"></input>
          <h1>{nombre}</h1>
          <p>{auth ? "El usuario esta logeado":"El usuario no esta logeado"}</p>
          <ul>
            {estaciones.map((elemento, index) => (<li key={index}>{elemento}</li>))}
          </ul>
        <section>
          
          <Componente msg="Hola, soy un componente funcional expresado"/>
          <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero={19} 
          booleano={false}
          arreglo={[1,2,3]}
          objeto={{nombre:"jhon", correo: "ejemplo@ejemplo.com" }}
          elementoReact={<li>Esto es un elemento React</li>}
          funcion={(num) => num*num}
          componenteReact={
            <Componente msg="Soy un componente pasado en Props"/>
          }/>
          <hr/>
          <Estado />
          <RenderizadoCondicional/>  
          <RenderizadoElementos/>
          <hr/>
          <EventosEs6/>    
          <EventosEs7/>
          <MasSobreEventos/>
          <ComunicacionCompoentes/>
          <CicloVida/>
          <AjaxApis/>
          <hr/>
          <ContadorHooks titulo="Seguidores"/>
          <ScrollHooks/>
          <RelojHooks/>
        </section>


        </div>
        <p className="App-intro">
          To get started, editar <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
