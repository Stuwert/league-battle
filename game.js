var i = 0;
var h = 0;
var gameObj = {};
var char1 = {
  armor: 20,
  attack1: 80,
  health: 300,
  status: "active"
}

var char2 = {
  armor: 30,
  attack1: 60,
  health: 300,
  status: "active"
}


function fightLoop(character1, character2){
  var character1Damage = damageMultiplier(damageDealt(character2.attack1, character1.armor));
  var character2Damage = damageMultiplier(damageDealt(character1.attack1, character2.armor));
  character1.health = calculateHealth(character1.health, character1Damage );
  character2.health = calculateHealth(character2.health, character2Damage);
  character1.status = returnStatus(character1);
  character2.status = returnStatus(character2);
  var damage1 = game.add.text(20, 20 * h, character2.name + " dealt " + character1Damage + " damage to " + character1.name, {font: "14px Arial", fill: "white"});
  h++;
  var damage2 = game.add.text(20, 20 * h, character1.name + "dealt " + character2Damage + " damage to " + character2.name, {font: "14px Arial", fill: "white" })
  h++;
  var charhealth1 = game.add.text(20, 20 * h, character1.name + " is at " + character1.health.toFixed(0) + " health.", {font: "14px Arial", fill: "white"})
  h++;
  var charhealth2 = game.add.text(20, 20 * h, character2.name + " is at " + character2.health.toFixed(0) + " health.", {font: "14px Arial", fill: "white"})
  h++;
  var winner = detectWinner(character1, character2);
  if (winner){
    var winner = game.add.text(20, 20 * h, winner + " wins", {font: "14px Arial", fill: "white" })
    h++
  }
}

function detectWinner(character1, character2){
  console.log(i++);
  if (character1.status === "fainted" && character2.status === "fainted"){
    return "No One";
  }else if (character1.status === "fainted"){
    return character2.name;
  }else if (character2.status === "fainted"){
    return character1.name;
  }else{
    return false;
  }
}

function damageDealt(attack, armor){
 return attack - armor;
};

function damageMultiplier(attack){
 var randomizer = Math.random() * (3 - .5) + .5;
 return +(attack * randomizer).toFixed(0);
};

function calculateHealth(health, attackDamage){
 return health - attackDamage;
};

function returnStatus(character){
 return character.health <= 0 ? "fainted" : "alive";
};
