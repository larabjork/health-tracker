import React from "react";
import PropTypes from "prop-types";

function MedHistoryMilestone(props){
  return (
      <div>
        <h3>Date: {props.date} </h3>
        <p>Event: {props.historyEvent}</p>
      </div>
  );
}

MedHistoryMilestone.propTypes = {
  date: PropTypes.string,
  historyEvent: PropTypes.string
};

export default MedHistoryMilestone;
