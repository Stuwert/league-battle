$(document).ready(function(){

  $('section').on('click', '.selectChar', function(){
    var classY = $(this).parent().attr('id');
    printToScreen(classY);
  })

  $(document).on("click", "#battle", function(){
    console.log(gameObj.char1);
    console.log(gameObj.char2);
    fightLoop(gameObj.char1, gameObj.char2);
    $('.powers').children().css({"opacity" : 1});
    for (statuses in attackstatus){
      attackstatus[statuses] = null;
    }
  })

  $('section').on('click', '[class^="attack"]', function(){
    $(this).css({"opacity" : "0.5"});
    var attackz = $(this).attr('class');
    var attackid = $(this).parent().parent().attr('id');
    attackstatus[attackid] = gameObj[attackid][attackz];
  })
})

  // var p ={};
  // tmdb.call("/configuration", p, informatzn, failure);
  //
  // function informatzn(response){
  //   console.log(response);
  // }

  function printToScreen(classtosearch){
    var htmlClass = "#" + classtosearch
    $(htmlClass).find('p').empty();
    $(htmlClass).find('.img').empty();
    $(htmlClass).find('.powers').empty();
    var parametersss = {
      query: $(htmlClass).find('input').val()
    }
    tmdb.call("/search/person", parametersss, response, failure);
    function response(responses){
      var actor = responses["results"][0];
      var movie0 = actor["known_for"][0];
      var movie1 = actor["known_for"][1]
      var actorArmor = 0;
      actor["known_for"].forEach(function(item){
        actorArmor += item["vote_average"];
        // return +prev["vote_average"] + +current["vote_average"];
      })
      gameObj[classtosearch] = new characterz(actorArmor*3, movie0["popularity"] * actor["popularity"] * 7.5, movie1["popularity"] * actor["popularity"] * 7.5, 500, actor["name"]);
      for (gamechars in gameObj){
      }
      $(htmlClass).find('.img').append('<img src="http://image.tmdb.org/t/p/w185' + actor["profile_path"] + '" >');
      $(htmlClass).find('.powers').append('<img width="40" height="60" class="attack1" src="http://image.tmdb.org/t/p/w185' + movie0["poster_path"] + '" >')
      $(htmlClass).find('.powers').append('<img width="40" height="60" class="attack2" src="http://image.tmdb.org/t/p/w185' + movie1["poster_path"] + '" >')
    }

  }

  function failure(){
    console.log("failure");
  }

  // function getChar(character, charClass){
  //   var championNum = champions[character];
  //   var getted = $.ajax({
  //     url: "https://api.themoviedb.org/3/search/person/",
  //     method: "GET",
  //     dataType: "JSONP",
  //     api_key: "7fb22e55a5bafa415e02fe8d426ad2f9",
  //     query: "tom%20hanks"
  //   });
  //   getted.done(function(response){
  //     console.log(response);
  //   });
  //
  //   getted.fail(function(){
  //     console.log("Stuart is still sad");
  //   })
  // }
  //



  var game = new Phaser.Game(400, 1000, Phaser.AUTO, 'canva', {preload: preload, create: create, update: update});

  function preload(){
    game.stage.backgroundColor = "black";
    var test = "bing bong";


  }

  function create(){

  }

  function update(){

  }
