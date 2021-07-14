//instructions!
console.log("welcome to pig :)");
console.log("debug command usage:")
console.log("1. newPlayer(" + '"' + "playerName" + '"' + ") -this creates a player profile where the scores will be tracked")
console.log("1a. getCurrentPlayer(" + '"' + "playerName" + '"' + ") -this one is optional")
console.log("1b. scoreboard - this one is also optional, but it helps you see what the global array is doing")
console.log("2. rollDice(" + '"' + "playerName" + '"' + ") -this can be used for any players in scoreboard array")

//roll from 1 to 6
function getDiceNum() {
    let dice = Math.floor(Math.random() * 6) + 1 //round up whatever random number is given from 1-6.
    return dice;
}

//will determine if roll is succesfull or not
function rollDice(name) {//new function

    let currentDiceRoll = getDiceNum()//get number from 1-6 and store it as currentDiceRoll

    console.log(name + " rolled a: " + currentDiceRoll); //narrator

    if (currentDiceRoll <= 1) { //if the number from the dice is less than or equal to 1 set points to 0
        console.log("you now have 0 points :(");//narrator
        scoreboard[getCurrentPlayer(name)].score = 0;
        
    } else {//if number from dice is greater than 1:
        let player = scoreboard[getCurrentPlayer(name)]; //store value in object at array index into a variable for easier syntax :) notice getCurrentPlayer()
        console.log("you didn't roll a 1! nice job!");//narrator
        console.log("your current score: " + player.score);//narrator - should be undefined if the user has rolled dice for the first time

        if (player.score == undefined || NaN) { //if the player hasn't played yet (or the object doesn't have the key value score):
            player.score = currentDiceRoll;//make the current players score equal to the number just rolled. NOTE: this will add the key value pair "score:"! THIS SHOULD ONLY BE RUN BY OUR CODE ONCE! :)

        } else { //if the player has already rolled:
            player.score += currentDiceRoll; //just add the number from the dice roll to the players score,
            //^this won't work if the object doesn't have the key value pair already setup.
        
        }
        console.log("your new score: " + player.score)//narrate current score

    }
}

//create empty scoreboard
let scoreboard = [];

//create a new player
function newPlayer(name) {
    scoreboard.push({ name: name })//push object with key-value pair "name"... we'll use this later to search with getCurrentPlayer().
    console.log("new player added:")//narrator
    return scoreboard;
}

function getCurrentPlayer(name) {//looping function to search key value pair in object
    let position = null;//temporary variable for this function only, it will be called later hopefully our function matched it will something in our array or it will return undefined.
    scoreboard.forEach((element, index) => { //forEach but we'll be using the "index" part mostly, this will allow us to call and return the current index to be used later.
        if (element.name == name) {//if key-value: "name" matches the current elements value:
            position = index; //store that integer to be returned for later use!
        }
    })

    return position//should return and integer
}