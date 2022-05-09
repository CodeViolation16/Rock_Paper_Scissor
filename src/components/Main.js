import React, { useState, useEffect } from "react";
import Result from "./Result";
import Display from "./Display";
import Choices from "./Choices";

import { getRandomGameItem, calculatorUserWinner } from "../utils";

const gameItems = [
  {
    url: "/images/paper.png",
    id: 0,
    winItemIds: [1],
    name: "Paper",
  },
  {
    url: "/images/rock.png",
    id: 1,
    winItemIds: [2],
    name: "Rock",
  },
  {
    url: "/images/scissor.png",
    id: 2,
    winItemIds: [0],
    name: "Scissor",
  },
];

export default function Main() {
  const [result, setResult] = useState("N/N");
  const [userGameItem, setUserGameItem] = useState(null);
  const [computerGameItem, setComputerGameItem] = useState(null);

  const handleGameItemChange = (gameItem) => {
    setUserGameItem({ ...gameItem });
  };

  useEffect(() => {
    if (userGameItem) {
      const computerNewItem = getRandomGameItem(gameItems);
      setComputerGameItem({ ...computerNewItem });
      setResult(calculatorUserWinner(userGameItem, computerNewItem));
    }
  }, [userGameItem]);

  return (
    <div className="conainer">
      <div className="main">
        <Result
          user1GameItem={userGameItem}
          user2GameItem={computerGameItem}
          result={result}
        />
        <Display />
        <Choices
          gameItems={gameItems}
          handleGameItemChange={handleGameItemChange}
        />
      </div>
    </div>
  );
}
