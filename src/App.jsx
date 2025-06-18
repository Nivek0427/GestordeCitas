import "./App.css";
import { useState } from "react";
import AppoinmentForm from "./components/AppoinmentForm";
import AppoinmentList from "./components/AppoinmentList";
import AppoinmentDetail from "./components/AppoinmentDetail";

function App() {
  const [appoinments, setAppoinments] = useState([]);
  const [selectedAppoinment, setSelectedAppoinment] = useState(null);

  const addAppoinment = (appoinment) => {
    setAppoinments([{ ...appoinment, id: Date.now() }, ...appoinments]);
  };

  const deleteAppoinment = (id) => {
    setAppoinments(appoinments.filter((appoinment) => appoinment.id !== id));
  };

  return (
    <>
      <div className="title">
        <h1>Gestor de Citas Spa</h1>
      </div>

      <AppoinmentForm onAdd={addAppoinment} />
      <AppoinmentList
        appoinments={appoinments} 
        onDelete={deleteAppoinment}
        onDetail={setSelectedAppoinment}
      />
      
      {selectedAppoinment && (<AppoinmentDetail
          appoinment={selectedAppoinment}
          onClose={() => setSelectedAppoinment(null)}
      />
      )}
    </>
  );
}

export default App;
