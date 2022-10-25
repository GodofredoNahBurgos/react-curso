import React, { Component } from "react";

export default class Padre extends Component{
    state ={
        contador: 0
    }
    incrementarContador = (e) =>{
        this.setState({
            contador: this.state.contador + 1
        });
    }
    render(){
        return(
            <div>
            <h2>Comunicaciòn entre Componentes</h2>
            <p>Contador <b>{this.state.contador}</b> </p>
            <Hijo mensaje="Mensaje para el hijo 1"/>
            <Hijo incrementarContador={this.incrementarContador} mensaje="Mensaje para el hijo 2"/>
            </div>
        );
    }
}
function Hijo(props){
    return(
        <div>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </div>
    );
}