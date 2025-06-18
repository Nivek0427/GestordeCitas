import React from 'react'

function AppoinmentCard({ appoinment, onDelete, onDetail }) {
    const { id, name, date, time, note } = appoinment;

    return (
        <div className="appoinment-card">
            <h4>{name}</h4>
            <p>Fecha: {date} , Hora: {time}</p>
            <div className='action-buttons'>
                <button onClick={()=> onDetail(appoinment)}>Detalle</button>
                <button onClick={() => onDelete(id)}>Eliminar</button>
            </div>
        </div>
    );
}
export default AppoinmentCard;
