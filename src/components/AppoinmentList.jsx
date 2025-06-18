import React from 'react'
import AppoinmentCard from './AppoinmentCard'

function AppoinmentList({appoinments, onDelete, onDetail}){
    if (appoinments.length === 0) {
        return <div>No hay citas programadas.</div>;
    }

    return (
        <div className="appoinment-list">
            {appoinments.map((at) => (
                <AppoinmentCard
                    key={at.id}
                    appoinment={at}
                    onDelete={onDelete}
                    onDetail={onDetail}
                />
            ))}
        </div>
    )
}

export default AppoinmentList;

