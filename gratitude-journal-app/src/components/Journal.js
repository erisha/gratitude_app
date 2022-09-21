import React, { useState } from 'react'
import JournalForm from './JournalForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Journal({gratitudeLogs, completeGratitudeLog, removeGratitudeLog, updateGratitudeLog}) {
    const [edit, setEdit] = useState ({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateGratitudeLog(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <JournalForm edit={edit} onSubmit={submitUpdate} />
    }
  return gratitudeLogs.map((gratitudeLog, index) => (
    <div className={gratitudeLog.isComplete ? 'gratitudeLog-row complete': 'gratitudeLog-row'}
         key={index}
         >
            <div key={gratitudeLog.id} onClick={() => completeGratitudeLog(gratitudeLog.id)}>
                {gratitudeLog.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeGratitudeLog(gratitudeLog.id)}
                    className='delete-icon'
                    />
                
                <TiEdit 
                    onClick={() => setEdit({ id: gratitudeLog.id, value: gratitudeLog.text})}
                    className='edit-icon'
                />
            </div>


    </div>
  ))
}

export default Journal