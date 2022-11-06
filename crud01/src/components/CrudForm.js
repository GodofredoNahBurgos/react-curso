/* eslint-disable */ 
import React, { useState, useEffect } from 'react';

const initialForm = { 
    name: "",
    constellation: "",
    id: null,
}

const CrudForm = () => {
    const [form, Setform] = useState(initialForm);
    const handleChange = (e) => {}

    const handleSubmit = (e) => {}

    const handleReset = (e) => {}

  return (
    <div>
    <h3>Agregar</h3>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Nombre' onChange={handleSubmit} value={form.name}/>
        <input type="text" name="constellation" placeholder='Constelaciòn' onChange={handleReset} value={form.constellation}/>
        <input type="submit" value="Enviar" onClick={handleSubmit}/>
        <input type="reset" value="Limpiar" onClick={handleReset}/>
    </form>
    </div>
  );
};

export default CrudForm