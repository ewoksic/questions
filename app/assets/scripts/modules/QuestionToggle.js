class Toggle {
  constructor() {
    this.btns = document.querySelectorAll(".question-btn");
    this.questions = document.querySelectorAll(".question");
    this.events();
  }
  events() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.toggleArticle(e);
      });
    });
  }
  toggleArticle(e) {
    let element = e.currentTarget.parentElement.parentElement;
    element.classList.toggle("show-text");
    this.questions.forEach((item) => {
      item != element ? item.classList.remove("show-text") : null;
    });
  }
}

export default Toggle;
