import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionService {
  question() {
    if (ProxyState.question) {
      api.get(ProxyState.question).then(res => {
        ProxyState.question = res.data.question
        ProxyState.questions = res.data.map(newQuestionData => new Question(newQuestionData))
      }).catch(err => console.error(err))
    } else {
      this.getQuestions()
    }
  }
  constructor() {
    this.getQuestions()
  }
  getQuestions() {
    api.get("random").then(res => {
      console.log("request is back!", res.data);
      console.log(res)
      ProxyState.questions = res.data
      ProxyState.questions = res.data.map(newQuestionData => new Question(newQuestionData))
      // console.log(ProxyState.characters);
    }).catch(err => console.error(err))
    // console.log("run immediately before request comes back");
  }
}

export const questionService = new QuestionService();
