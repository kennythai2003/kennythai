import React from "react";

const Club = ({ image, alttag, clubName, date }) => {
  return (
    <div className="clubs-flexboxes-content">
      <img src={image} alt={alttag} className="clubs-p-icon" />
      <h2>{clubName}</h2>
      <p className="clubs-date">{date}</p>
    </div>
  );
};

export default Club;
