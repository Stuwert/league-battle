var i = 0;
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
  var winner = detectWinner(character1, character2);
  if(!winner){
    character1.health = calculateHealth(character1.health, damageMultiplier(damageDealt(character2.attack1, character1.armor)));
    character2.health = calculateHealth(character2.health, damageMultiplier(damageDealt(character1.attack1, character2.armor)));
    character1.status = returnStatus(character1);
    character2.status = returnStatus(character2);
    console.log(character1.health, character2.health);
    return fightLoop(character1, character2);
  }else{
    return winner;
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
