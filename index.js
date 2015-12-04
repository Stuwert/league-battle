var gettr = $.ajax({
  url: "https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=8bcdbf10-4edf-4c5d-ab86-0d0dc4106287",
  method: "GET",
  dataType: "JSON"
});

gettr.done(function(response){
  var data = response;
});

gettr.fail(function(){
  console.log("Stuart is sad");
})

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

var champions = {
  'Thresh': 412,
  'Aatrox': 266,
  'Tryndamere': 23,
  'Gragas': 79 ,
  'Cassiopeia': 69 ,
   'Poppy': 78 ,
   'Ryze': 13 ,
   'Sion': 14 ,
   'Annie': 1 ,
   'Karma': 43 ,
   'Nautilus': 111 ,
   'Lux': 99 ,
   'Ahri': 103 ,
   'Olaf': 2 ,
   'Viktor': 112 ,
   'Anivia': 34 ,
   'Garen': 86 ,
   'Singed': 27 ,
   'Lissandra': 127 ,
   'Maokai': 57 ,
   'Morgana': 25 ,
   'Evelynn': 28 ,
   'Fizz': 105 ,
   'Zed': 238 ,
   'Heimerdinger': 74 ,
   'Rumble': 68 ,
   'Mordekaiser': 82 ,
   'Sona': 37 ,
   'Katarina': 55 ,
   'KogMaw': 96 ,
   'Ashe': 22 ,
   'Lulu': 117 ,
   'Karthus': 30 ,
   'Alistar': 12 ,
   'Darius': 122 ,
   'Vayne': 67 ,
   'Varus': 110 ,
   'Udyr': 77 ,
   'Jayce': 126 ,
   'Leona': 89 ,
   'Syndra': 134 ,
   'Pantheon': 80 ,
   'Khazix': 121 ,
   'Riven': 92 ,
   'Corki': 42 ,
   'Azir': 268 ,
   'Caitlyn': 51 ,
   'Nidalee': 76 ,
   'Galio': 3 ,
   'Kennen': 85 ,
   'Veigar': 45 ,
   'Bard': 432 ,
   'Gnar': 150 ,
   'Graves': 104 ,
   'Malzahar': 90 ,
   'Vi': 254 ,
   'Kayle': 10 ,
   'Irelia': 39 ,
   'LeeSin': 64 ,
   'Elise': 60 ,
   'Illaoi': 420 ,
   'Volibear': 106 ,
   'Nunu': 20 ,
   'TwistedFate': 4 ,
   'Jax': 24 ,
   'Shyvana': 102 ,
   'Kalista': 429 ,
   'DrMundo': 36 ,
   'TahmKench': 223 ,
   'Brand': 63 ,
   'Diana': 131 ,
   'Sejuani': 113 ,
   'Vladimir': 8 ,
   'Zac': 154 ,
   'RekSai': 421 ,
   'Quinn': 133 ,
   'Akali': 84 ,
   'Tristana': 18 ,
   'Hecarim': 120 ,
   'Sivir': 15 ,
   'Lucian': 236 ,
   'Rengar': 107 ,
   'Warwick': 19 ,
   'Skarner': 72 ,
   'Malphite': 54 ,
   'Yasuo': 157 ,
   'Xerath': 101 ,
   'Teemo': 17 ,
   'Nasus': 75 ,
   'Renekton': 58 ,
   'Draven': 119 ,
   'Shaco': 35 ,
   'Swain': 50 ,
   'Ziggs': 115 ,
   'Talon': 91 ,
   'Janna': 40 ,
   'Ekko': 245 ,
   'Orianna': 61 ,
   'FiddleSticks': 9 ,
   'Fiora': 114 ,
   'Chogath': 31 ,
   'Rammus': 33 ,
   'Leblanc': 7 ,
   'Zilean': 26 ,
   'Soraka': 16 ,
   'Nocturne': 56 ,
   'Jinx': 222 ,
   'Yorick': 83 ,
   'Urgot': 6 ,
   'Kindred': 203 ,
   'MissFortune': 21 ,
   'MonkeyKing': 62 ,
   'Blitzcrank': 53 ,
   'Shen': 98 ,
   'Braum': 201 ,
   'XinZhao': 5 ,
   'Twitch': 29 ,
   'MasterYi': 11 ,
   'Taric': 44 ,
   'Amumu': 32 ,
   'Gangplank': 41 ,
   'Trundle': 48 ,
   'Kassadin': 38 ,
   'Velkoz': 161 ,
   'Zyra': 143 ,
   'Nami': 267 ,
   'JarvanIV': 59 ,
   'Ezreal': 81
   };
