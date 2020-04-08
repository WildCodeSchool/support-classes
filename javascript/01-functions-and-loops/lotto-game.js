/**
 * Support class - Loops and functions
 * First exercise: "lotto" game
 *
 * We provide you with the `getNumber` function which generates a random number
 * between 1 and 59.
 *
 * 1. Implement a function named `drawSixNumbers` which generates an array of six
 *    numbers. Of course it should use `getNumber`.
 *    For a start don't worry about duplicate numbers.
 *    Then you can improve it and try and avoid duplicates.
 * 2. Use the function twice:
 *      - first to create the player's choices (store them in `playersChoices`)
 *      - second to create the results of the game (store them in `gameResults`)
 * 3. Create another function: `computeScore` which returns how many of the numbers
 *    choosed by the player were found in the game results. It should take the
 *    player's choices as the 1st parameter, and the results array as 2nd parameter.
 * 4. Console log the player's choices, the game results, and the player's score
 */

function getNumber() {
  return Math.floor(60 * Math.random());
}