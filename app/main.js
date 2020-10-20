import PlayerController from "./Controllers/PlayerController.js";
import QuestionController from "./Controllers/QuestionController.js";

class App {
  playerController = new PlayerController();

  questionController = new QuestionController();
}

window["app"] = new App();

console.log(window)
