import React from 'react';
import {useState} from 'react';

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
    <form onSubmit={handleSubmit}>
      <h3>Crear nueva cita</h3>
      <input
        type="text"
        placeholder="Nombre del cliente"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
        <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        />
      <textarea
        placeholder="Nota"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        />
      <button className='button' type="submit">Agregar Cita</button>
    </form>
  );
}

export default AppoinmentForm;
