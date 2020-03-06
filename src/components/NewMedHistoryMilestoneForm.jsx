import React from 'react';

function NewMedHistoryMilestoneForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='date'
          placeholder='Date'/>
        <textarea
          id='historyEvent'
          placeholder="Milestone details here: symptom, diagnosis, test, medication etc."/>
        <button type='submit'>Save!</button>
      </form>
    </div>
  )
}

export default NewMedHistoryMilestoneForm;
