import React from 'react'
import { useState } from 'react';
import styles from './AppoinmentCard.module.css';

function AppoinmentCard({ appoinment, onCancel, onUpdate, onDetail }) {
  const [modoEditar, setModoEditar] = useState(false);
  const [notaEditada, setNotaEditada] = useState(appoinment.note);
  const [fechaEditada, setFechaEditada] = useState(appoinment.date);
  const [horaEditada, setHoraEditada] = useState(appoinment.time);

  const guardarCambios = () => {
    onUpdate({
      ...appoinment,
      note: notaEditada,
      date: fechaEditada,
      time: horaEditada
    });
    setModoEditar(false);
  };

  return (
    <div className={styles.card}>
      {modoEditar ? (
        <>
          <input
            value={fechaEditada}
            onChange={(e) => setFechaEditada(e.target.value)}
            type="date"
          />
          <input
            value={horaEditada}
            onChange={(e) => setHoraEditada(e.target.value)}
            type="time"
          />
          <textarea
            value={notaEditada}
            onChange={(e) => setNotaEditada(e.target.value)}
          />
          <button onClick={guardarCambios}>Guardar</button>
        </>
      ) : (
        <>
          <h3 className={styles.h3}>{appoinment.name}</h3>
          <p className={styles.p}><strong>Fecha:</strong> {appoinment.date}</p>
          <p className = {styles.p}> <strong>Hora:</strong> {appoinment.time}</p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => onDetail(appoinment)}>Ver Detalle</button>
          <button className={styles.button} onClick={() => setModoEditar(true)}>Editar</button>
          <button className={styles.button} onClick={() => onCancel(appoinment.id)}>Cancelar</button>
          </div>
        </>
      )}
    </div>
  );
}
export default AppoinmentCard;
