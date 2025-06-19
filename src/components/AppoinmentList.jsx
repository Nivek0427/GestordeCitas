import React from 'react'
import AppoinmentCard from './AppoinmentCard'

function AppoinmentList({appoinments, onCancel, onDetail, onEdit, onUpdate}){
    if (appoinments.length === 0) {
        return <div>No hay citas programadas.</div>;
    }

    return (
        <div className='appoinment-lsit'>
            {appoinments.map((at) => (
                <AppoinmentCard
                    key={at.id}
                    appoinment={at}
                    onCancel={onCancel}
                    onDetail={onDetail}
                    onEdit={onEdit}
                    onUpdate={onUpdate}
                />
            ))}
        </div>
    )
}

export default AppoinmentList;

