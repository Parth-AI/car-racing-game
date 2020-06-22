class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.playerRank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsEnd(){
    var rank = database.ref('carsAtEnd');;
    rank.on("value",(data)=>{
      this.playerRank = data.val();
    });
  }

  static updateCarsAtEnd(playerRank){
    database.ref('/').update({
      carsAtEnd:playerRank,
    });

  }
}
