export default class Question {
  constructor(data) {
    this.id = data.id
    this.answer = data.answer
    this.question = data.question
  }

  get Template() {

      return /*html*/`
      <div class="col-2 border rounded shadow-lg">
          <h3 class="bg-dark text-light">${this.id}</h1>
          <h5>${this.answer}</h5>
          <h5>${this.question}</h5>
      </div>
      `
  }
}