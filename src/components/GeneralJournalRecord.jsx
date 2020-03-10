import React from "react";
import PropTypes from "prop-types";
import './../JournalForm.css';

function GeneralJournalRecord(props){
  return (
      <div className="paper">
        <h6 className="date">Date: {props.date} </h6>
        <p>{props.journalEntry}</p>
      </div>
  );
}

GeneralJournalRecord.propTypes = {
  date: PropTypes.string,
  journalEntry: PropTypes.string
};

export default GeneralJournalRecord;
