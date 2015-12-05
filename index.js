

console.log(champions);

$(function(){
  var championsList = [];
  for (champion in champions){
    championsList.push(champion);
  }
  console.log(championsList);
  $('#character').autocomplete({
    source: championsList
  })
});


$('#selectChar').click(function(){
  var championNum = champions[$('#character').val()];
  console.log(typeof championNum)

  var getted = $.ajax({
    url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/"+ championNum + "?champData=all&api_key=8bcdbf10-4edf-4c5d-ab86-0d0dc4106287",
    method: "GET",
    dataType: "JSON"
  });

  getted.done(function(response){
    var attacks = response["info"];
    for (stuff in attacks){
      console.log(attacks[stuff]);
    }
  });

  getted.fail(function(){
    console.log("Stuart is still sad");
  })

})
