![recording (2)](https://user-images.githubusercontent.com/22990386/122124564-ae966580-cdec-11eb-9fd8-7534d090d9c9.gif)
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
 - Player.JS - Data Model: save wins to local storage, return wins from local storage, clear wins from local storage
 - Main.JS - DOM (connects DataModel to DOM providing user interface): select elements, event listeners, check turn, render board on DOM, update DOM from win, add wins to DOM, retrieve wins from local storage to DOM, clear wins from local storage and headers

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
- If the "Reset wins" button is clicked the wins will reset to 0

![recording (3)](https://user-images.githubusercontent.com/22990386/122124593-b950fa80-cdec-11eb-8031-3e6cfe23b69a.gif)

## Future Additions
- Show a chalk board tally below the win number for each win
- Show the winning game board for each win
- Give the option to select from a variety of animal emojis for the player token

## Challenges
- The first method created and a core function for game functionality was the checkForWin function in the Game.JS file. I started by using a .includes method with the possible wins in the bracket separated by && (e.g .includes[1 && 2 && 3]). With a quick test of functionality it appeared that the function was indeed checking if the board game included EVERY one of the numbers separated by &&. Unfortunately an hour later with more extensive testing I found it was not sufficient. After Googling there was a very helpful article (https://www.gavsblog.com/blog/find-single-or-array-of-values-in-javascript-array-using-includes) that detailed the difference between .include (by itself), .some (with .include), and .every (with .include). The arrow function was new syntax, but I found it to be nicely semantic.

- Another challenge was when I was trying to interpolate or concatenate using a loop to create a variable name to refactor and remove 7 lines of repetitive code. After Googling I found that "window" would allow a concatenated string to be recognized as a global variable name.

## Wins
- A few times over the weekend I found myself in a place of being stuck for an hour or two. I reached out to my support system, but likely because of looming finals and/or final projects no one was currently available. This occurred twice and both times after a nice break I was able to come back to the problem and work through it myself. I definitely learned that rest and resets were crucial for focus and problem solving.

## Deploy Link
- This will be added when repository is made public
