import styles from './AppoinmentCanceled.module.css';

function ListaCanceladas({ citas }) {
  if (citas.length === 0) return <p>No hay citas canceladas.</p>;

  return (
    <div className='canceled-list'>
      <h3 className={styles.h3}>Citas canceladas</h3>
      {citas.map((cita) => (
        <div key={cita.id} className={styles.card}>
          <p className={styles.p}><strong>{cita.name}</strong></p>
          <p className={styles.p}>Fecha: {cita.date} Hora: {cita.time}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaCanceladas;
