# Tic Tac Toc

## Summary / Goal
In England its called noughts and crosses, in Ireland Xs and Os, and in the U.S. Tic Tac Toc! This version is puppers and cats! The goal of the project was to create a fun and lively game board with smooth functionality that allows players to focus on the fun! Wins will save even after leaving so pick your competitor and play as many rounds as you wish!

## Contributors
- [William Phelps](https://github.com/williamphelps13)
- Project Manager: [Kayla Wood](https://github.com/kaylaewood)

## Technologies / Architecture
- HTML
- CSS
- JavaScript
 - Game.JS - Data Model: token placement on board data, turn data, player data (id, token, and wins), check for wins, increment wins, check for draw, and reset board data
 - Player.JS - Data Model: save wins to local storage, return wins from local storage
 - Main.JS - DOM (connects DataModel to DOM providing user interface): select elements, event listeners, check turn, render board on DOM, update DOM from win, add wins to DOM, retrieve wins from local storage to DOM

## Set Up
1. Fork this project to your Github account
2. Clone the repository to your local machine
3. cd into the project and open in text editor
4. Deploy link will be listed below

## How It Works
- Pick your player - pupper or cat. In this version of the game the dog goes first in the first game.
- The pupper player will then simply click on one of the nine squares and see the dog token appear on the board
- The header will change to show it is now cat's turn to click
- If a player clicks on an already occupied square or anyway outside the grid no change will occur
- The game continues until one of three outcomes occurs:
  - Dog gets three in a row - "Dog Wins!" banner is shown and their win count increases by 1
  - Cat gets three in a row - "Cat Wins!" banner is shown and their win count increases by 1
  - Draw (all 9 squares full with no three in a row )- "It's a Draw!" banner is shown; no change to the win count
- If the page is refreshed the win count remains!
