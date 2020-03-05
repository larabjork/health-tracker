import React from 'react';

function NewGeneralJournalRecordForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='date'
          placeholder='Date'/>
        <textarea
          id='journalEntry'
          placeholder="What's happening?"/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  )
}

export default NewGeneralJournalRecordForm;
