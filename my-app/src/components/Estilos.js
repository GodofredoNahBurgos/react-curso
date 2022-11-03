/* eslint-disable */
import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";

export default function Estilos(){

    let myStyles = {
        borderRadius: ".5rem",
        margin: "2rem auto",
        maxWidth: "50%"
    };

    return(
        <section class="Estilos">
            <h2>Estilos CCS en React</h2>
            <h3 className="bg-react">Estilos en hoja CSS externa</h3>
            <h3 className="bg-react" style={{borderRadius: ".25rem", margin: "1rem"}}>Estilos en linea (atributo style)</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en linea </h3>
            <h3 className="bg-react">
                Agregando Normalize
            <br/>
            <code>@import-normalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con Módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con Módulos</h3>
            <h3 className="bg-sass">Estilos con Sass</h3>           
        </section>
    );
}