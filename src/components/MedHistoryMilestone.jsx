import React from "react";
import PropTypes from "prop-types";

function MedHistoryMilestone(props){
  return (
      <div>
        <h5>Date: {props.date} </h5>
        <p>Event: {props.historyEvent}</p>
      </div>
  );
}

MedHistoryMilestone.propTypes = {
  date: PropTypes.string,
  historyEvent: PropTypes.string
};

export default MedHistoryMilestone;
