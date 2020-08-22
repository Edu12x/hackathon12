export default class Collapse {
  constructor(element) {
    this.element = element;
    this.arrow = this.element.querySelector("span");
    this.arrow.onclick = function () {
      const p = this.parentElement.parentElement.querySelector(
        ".collapse_text"
      );
      p.classList.toggle("is-active");
    };
  }
}



//Modal


