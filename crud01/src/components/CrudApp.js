import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso",
    },
    {
        id: 2,
        name: "Shinyu",
        constellation: "Dragòn",
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne",
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andròmeda",
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fènix",
    }
];

export const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);
    
    const createData = (data) => {
        data.id = Date.now();
        setDb({
            ...db, data
        });
    };

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    };

    const deleteData = (id) => {};

  return (
    <div>
        <h2>CRUD APP</h2>
        <CrudForm 
        createData={createData} 
        updateDate={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <CrudTable 
        data={db} 
        setDataToEdit={setDataToEdit} 
        deleteData={deleteData}
        />
    </div>
  );
};
