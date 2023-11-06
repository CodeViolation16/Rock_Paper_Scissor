import React from "react";

function Result({ user1GameItem, user2GameItem, result }) {
  return (
    <div>
      <h1 className="result-header">Result</h1>
      <div className="result-wrapper">
        {user1GameItem && <span>{user1GameItem.name}</span>}
        <span className="result">{result}</span>
        {user2GameItem && <span>{user2GameItem.name}</span>}
      </div>
    </div>
  );
}

export default Result;
