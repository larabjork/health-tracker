import React from "react";
import PropTypes from "prop-types";

function GeneralJournalRecord(props){
  return (
      <div>
        <h3>Date: {props.date} </h3>
        <p>Journal Entry: {props.journalEntry}</p>
      </div>
  );
}

GeneralJournalRecord.propTypes = {
  date: PropTypes.string,
  journalEntry: PropTypes.string
};

export default GeneralJournalRecord;
