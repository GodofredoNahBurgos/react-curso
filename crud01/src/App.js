import React from 'react'
import { CrudApi } from './components/CrudApi';
import { CrudApp } from './components/CrudApp';

export default function App(){
    return (
      <div>
        <h2>Ejercicios con React</h2>
        <hr/>
        <CrudApi/>
        <hr/>
        <CrudApp/>
        <hr/>
      </div>
    );
}