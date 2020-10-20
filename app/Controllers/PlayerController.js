import { ProxyState } from "../AppState.js";
import { playerService } from "../Services/PlayerService.js";


//Private
function _draw() {
  // let players = ProxyState.players;
  // let template = ''
  // players.forEach(v => template += v.Template)
  // document.getElementById("app").innerHTML = /*html*/`
  // <button className="btn btn-info" onclick="app.playersController.addPlayer()">Add Player</button>  
  // <div className="card-columns values">
  //     ${template}
  // </div>
  // `
}

//Public
export default class PlayersController {
  constructor() {
    ProxyState.on("players", _draw);
    _draw()
  }

  addPlayer() {
    playerService.addPlayer()
  }

}
