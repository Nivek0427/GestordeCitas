import React from 'react'

function AppoinmentDetail({ appoinment, onClose }) {
    const {name, date, time, note} = appoinment;

    return(
        <div className='detail-overlay'>
            <div className='detail-modal'>
                <h2>Detalle de Cita</h2>
                <p><strong>Nombre:</strong> {name}</p>
                <p><strong>Fecha:</strong> {date}</p>
                <p><strong>Hora:</strong> {time}</p>
                <p><strong>Nota:</strong> {note || 'sin nota'}</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}
export default AppoinmentDetail;