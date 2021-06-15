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
