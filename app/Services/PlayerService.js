import { ProxyState } from "../AppState.js";
import Player from "../Models/Player.js";
import { api } from "./AxiosService.js";

class PlayerService {
  addPlayer() {
    ProxyState.players = [...ProxyState.players, new Player({ title: Math.random() })]
  }
}

export const playerService = new PlayerService();

