import "./App.css";
import { useState } from "react";
import AppoinmentForm from "./components/AppoinmentForm";
import AppoinmentList from "./components/AppoinmentList";
import AppoinmentDetail from "./components/AppoinmentDetail";
import AppoinmentCanceled from "./components/AppoinmentCanceled";

function App() {
  const [appoinments, setAppoinments] = useState([]);
  const [selectedAppoinment, setSelectedAppoinment] = useState(null);
  const [canceledAppoinments, setCanceledAppoinments] = useState([]);
  const [seeCanceled, setSeeCanceled] = useState(false);
  const [editMode, setEditMode] = useState(null);

  const addAppoinment = (appoinment) => {
    setAppoinments([{ ...appoinment, id: Date.now() }, ...appoinments]);
  };

  const cancelAppoinment = (id) => {
    const appoinment = appoinments.find((appoinment) => appoinment.id === id);
    if (!appoinment) return;
      setAppoinments(appoinments.filter((appoinment) => appoinment.id !== id));
      setCanceledAppoinments([appoinment, ...canceledAppoinments]);
    }

  return (
    <>
      <div className="title">
        <h1>AuraZen</h1>
      </div>

      <AppoinmentForm onAdd={addAppoinment} 
      onUpdate={(update)=>{
        setAppoinments(appoinments.map((appoinment)=> appoinment.id === update.id ? update :appoinment));
        setEditMode(null);
        }}
        editData={editMode}
        />
      <button onClick={() => setSeeCanceled(!seeCanceled)}>
        {seeCanceled ? 'Ver Citas Activas' : 'Ver Citas Cancelada'}
      </button>

        <div className="canceled-list">
      {seeCanceled && (
        <AppoinmentCanceled citas={canceledAppoinments} />
      )}
      </div>

      <div className='appoinment-list'>
      <AppoinmentList 
        appoinments={appoinments} 
        onDetail={setSelectedAppoinment}
        onCancel={cancelAppoinment}
        onUpdate={(update)=>{
          setAppoinments(appoinments.map((appoinment)=> appoinment.id === update.id ? update :appoinment));
        }}
      />
      </div>
      
      {selectedAppoinment && (<AppoinmentDetail
          appoinment={selectedAppoinment}
          onClose={() => setSelectedAppoinment(null)}
      />
      )}
    </>
  );
}

export default App;
