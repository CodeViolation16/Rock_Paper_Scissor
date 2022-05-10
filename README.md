---
author: Dua Tran
title: Rock-Paper-Scissor game
id: rock_paper_scissor_game_trancaodua
---

# Rock Paper Scissors Game

Props are one of the most basic and important properties in React.
The purpose of this project is to practice our skills with React props.

You must have played the "Rock Paper Scissors Game" at least once. And now, we are making a Rock Paper Scissors Game together on the web.

| ![](https://i.ibb.co/35b4Tsk/Screenshot-from-2022-05-09-21-43-09.png) |
| :-------------------------------------------------------------------: |
|                      _Rock Paper Scrissor Game_                      |

[Go to demo website !](https://rock-paper-scissor-trancaodua.netlify.app/)

## User Story

- User play "Rock Paper Scissors game" with a computer.
- User select "Rock" or "Paper" or "Scissors" and game start.
- User selection trigger computer selection
- Computer's selection is random. Result is display immediately.

## Requirement

Fork this [repo](https://github.com/trancaodua/rock-paper-scrissor-game) and read through the files.
Often time , developers are required to work with an existing codebase and improve upon. This is one of that time. 

Repositories has 2 brank:
- Requirement: Has requirement. You will code on this brank.
- Solution: Has answer of requirement.

Guide checkout requirement brank to code:
- Step 1: Clone repositories. Run: ````git clone https://github.com/trancaodua/rock-paper-scrissor-game.git````
- Step 2: Checkout requirement brank to do. Run: ````git checkout requirement````

Guide checkout solution brank to check answer:
- Step 1: Checkout solution brank to do. Run: ````git checkout solution````

You should only code in the designinated area.
Using the VSC search function for "Your code here", you will see a list of all the placces that required your attention.

## Explain code

- src/utils/index.js 

```
# input:gamesItems is list item.
# return: game item.
# Description: get random item from items list

export const getRandomGameItem = (gamesItems) => {
  const index = Math.floor(Math.random() * gamesItems.length); //create index random between 0 to gamesItems.length - 1
  return gamesItems[index]; //return item
};


# input: user1GameItem, user2GameItem: is object game contain game item id list can win. Example user1GameItem = {
    url: "/images/paper.png",
    id: 0,
    winItemIds: [1],
    name: "Paper",
  }
# return: game result.
# Description: calculator result player.

export const calculatorUserWinner = (user1GameItem, user2GameItem) => {
  if (user1GameItem.id === user2GameItem.id) return "Peace";  //return  both player same.
  else if (user1GameItem.winItemIds.includes(user2GameItem.id)) if player 1 winItemIds list contain game player 2 id => player 1 win player 2.
  else return "Lost"; //if winItemIds list not contain game player 2 id => player 1 lost, player 2 .
};
```
