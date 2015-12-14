$(function(){
  var championsList = [];
  for (champion in champions){
    championsList.push(champion);
  }
  $('.character').autocomplete({
    source: championsList
  })
});

$('section').on('click', '.selectChar', function(){
  var champion = $(this).prev().val();
  $(this).parent().find('p').empty();
  $(this).parent().find('p').append(champion);
  var classY = $(this).parent().attr('id');
  getChar(champion, classY);
})



function getChar(character, charClass){
  var championNum = champions[character];


  var getted = $.ajax({
    url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/"+ championNum + "?champData=all&api_key=8bcdbf10-4edf-4c5d-ab86-0d0dc4106287",
    method: "GET",
    dataType: "JSON"
  });

  getted.done(function(response){
    var stats = response["stats"];
    gameObj[charClass] = new characterz(stats.armor, stats.attackdamage, stats.hp, character);

  });

  getted.fail(function(){
    console.log("Stuart is still sad");
  })
}

$(document).on("click", "#battle", function(){
  console.log("Bing")
  fightLoop(gameObj.char1, gameObj.char2);
})

function characterz(armor, attack1, health, name){
  this.armor = armor;
  this.attack1 = attack1;
  this.health = health;
  this.status = "active";
  this.name = name;
}

var game = new Phaser.Game(400, 1000, Phaser.AUTO, 'canva', {preload: preload, create: create, update: update});

function preload(){
  game.stage.backgroundColor = "black";
  var test = "bing bong";


}

function create(){

}

function update(){

}
