import React from 'react';
import {useState} from 'react';
import styles from './AppoinmentForm.module.css';

function AppoinmentForm({onAdd}) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    onAdd({
        name,
        date,
        time,
        note,
        });

        // limpiar el formulario    
    setName('');
    setDate('');
    setTime('');
    setNote('');

  };

  return (
    <form  className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.h3}>Crear nueva cita</h3>
      <input
      className={styles.input}
        type="text"
        placeholder="Nombre del cliente"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
      className={styles.input}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
        <input
        className={styles.input}
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        />
      <textarea
      className={styles.textarea}
        placeholder="Nota"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        />
      <button className={styles.button} type="submit">Agregar Cita</button>
    </form>
  );
}

export default AppoinmentForm;
