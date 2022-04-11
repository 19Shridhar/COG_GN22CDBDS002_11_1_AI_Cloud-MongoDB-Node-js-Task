var readline = require('readline-sync');
const {createCollection}=require('./func.js')

console.log('Here we will take your data using mongoDB insertOne function')

var name = readline.question("Enter Your name\n");
var age = readline.question("Enter Your age\n");
var fav_hero = readline.question("Who is yout favourite superhero ?\n")

createCollection(name,age,fav_hero)