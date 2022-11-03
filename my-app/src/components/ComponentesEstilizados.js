import React from 'react';
import styled from 'styled-components';

export default function ComponentesEstilizados(){
    let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

    const setTransitionTime = (time) => `all ${time} ease-in-out`;

    const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color};
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};

    &:hover {
        background-color: ${mainAlphaColor80};
    }
    `;
    return(
        <div>
            <h2>Compoenentes Estilizados</h2>
            <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
            <MyH3 color="#61dafb">Hola soy un h3 estilizado con styled-components</MyH3>
        </div>
    );
}