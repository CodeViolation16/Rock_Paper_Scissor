import React from "react";
import ChoiceCard from "./ChoiceCard";

function Choices({ gameItems, handleGameItemChange }) {
  return (
    <div>
      <h2 className="choices-title">Choices</h2>
      <div className="choices">
        {gameItems.map((gameItem) => (
          <ChoiceCard
            key={gameItem.id}
            gameItem={gameItem}
            handleGameItemChange={"Your code here"}
          />
        ))}
      </div>
    </div>
  );
}

export default Choices;
