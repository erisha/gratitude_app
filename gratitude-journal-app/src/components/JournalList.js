import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import Journal from './Journal';
import JournalForm from './JournalForm';

function JournalList() {
  const [gratitudeLogs, setGratitudeLogs] = useState([]);

  const addGratitudeLog = (gratitudeLog) => {
    if (!gratitudeLog.text || /^\s*$/.test(gratitudeLog.text)) {
      return;
    }
    const newGratitudeLogs = [gratitudeLog, ...gratitudeLogs];

    setGratitudeLogs(newGratitudeLogs);
    //console.log(...gratitudeLogs)
  };
  const updateGratitudeLog = (gratitudeLogId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
    setGratitudeLogs(prev => prev.map(item => (item.id === gratitudeLogId ? newValue : item)))
  }

  const removeGratitudeLog = (id) => {
    const removeArr = [...gratitudeLogs].filter(
      (gratitudeLog) => gratitudeLog.id !== id
    );

    setGratitudeLogs(removeArr);
  };

  
  const completeGratitudeLog = (id) => {
    let updatedGratitudeLogs = gratitudeLogs.map((gratitudeLog) => {
      if (gratitudeLog.id === id) {
        gratitudeLog.isComplete = !toBeInTheDocument.isComplete;
      }
      return gratitudeLog;
    });
    setGratitudeLogs(updatedGratitudeLogs);
  };
  return (
    <div>
      <h1>What are you grateful for today?</h1>
      <JournalForm onSubmit={addGratitudeLog} />
      <Journal
        gratitudeLogs={gratitudeLogs}
        completeGratitudeLog={completeGratitudeLog}
        removeGratitudeLog={removeGratitudeLog}
        updateGratitudeLog={updateGratitudeLog}


      />
    </div>
  );
}

export default JournalList;
