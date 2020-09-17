import React from "react";
import { Link } from "react-router-dom";

const StorySummary = ({ title, intro }) => {
  return (
    <div className="story-summary">
      <div className="container">
        <h4 className="uppercase bold text-primary">{title}</h4>
        <p>{intro}</p>
        <Link to="/" className="btn-primary">
          Restart from the beginning
        </Link>
      </div>
    </div>
    <div id="stats">
        <b>Stats:</b><br/>
        <b>6: </b><div id="6stat"></div>
        <b>4: </b><div id="4stat"></div>
        <b>2: </b><div id="2stat"></div>
    </div>
  );
};

export default StorySummary;
