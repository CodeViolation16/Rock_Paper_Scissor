export const getRandomGameItem = (gamesItems) => {
  const index = Math.floor(Math.random() * gamesItems.length);
  return gamesItems[index];
};

export const calculatorUserWinner = (user1GameItem, user2GameItem) => {
  if (user1GameItem.id === user2GameItem.id) return "Peace";
  else if (user1GameItem.winItemIds.includes(user2GameItem.id)) return "Win";
  else return "Lost";
};
