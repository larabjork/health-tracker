import React from "react";
import PropTypes from "prop-types";
import './../JournalForm.css';

function GeneralJournalRecord(props){
  return (
      <div>
        <h6>Date: {props.date} </h6>
        <p>Journal Entry: {props.journalEntry}</p>
      </div>
  );
}

GeneralJournalRecord.propTypes = {
  date: PropTypes.string,
  journalEntry: PropTypes.string
};

export default GeneralJournalRecord;
