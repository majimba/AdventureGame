// =========================================
// Quest through Cairo - A Text Adventure Game
// =========================================

const readline = require('readline-sync');

// -----------------------------------------
// Game Configuration & Player Stats
// -----------------------------------------
let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let playerStrength = 10;
let playerAgility = 8;
let playerIntelligence = 7;

// -----------------------------------------
// Game State
// -----------------------------------------
let currentLocation = "Post Office, Cairo Road, Lusaka";
let gameRunning = true;
let inventory = [];

// -----------------------------------------
// Game Start
// -----------------------------------------
console.log("=================================");
console.log("     Quest through Cairo         ");
console.log("=================================");
console.log("\nYour quest: Defeat the zombies and escape Cairo Road.");

// Get player's name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold.");