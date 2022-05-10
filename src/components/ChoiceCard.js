import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  return (
    <img
      onClick={() => {
        "Your code here";
      }}
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
