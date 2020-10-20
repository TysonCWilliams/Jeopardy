import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";
// import { api } from '../Services/AxiosService'

//Private
function _draw() {
  let template = ""
  ProxyState.questions.forEach(c => template += c.Template)
  document.getElementById("questions").innerHTML = template
}

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("questions", _draw);
    _draw()
  }

  // next() {
  //   questionService.next()
  // }

  getQuestions() {
    questionService.getQuestions()
  }

}