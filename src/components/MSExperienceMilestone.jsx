import React from "react";
import PropTypes from "prop-types";

function MSExperienceMilestone(props){
  return (
      <div>
        <h3>Date: {props.date} </h3>
        <p>Experience: {props.Experience}</p>
      </div>
  );
}

MSExperienceMilestone.propTypes = {
  date: PropTypes.string,
  Experience: PropTypes.string
};

export default MSExperienceMilestone;
