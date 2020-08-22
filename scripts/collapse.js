export default class Collapse {
  constructor(element) {
    this.element = element;
  }
  openArrow() {
    const p = this.element.querySelector(".collapse_text");
    p.classList.toggle("is-active");
  }
}

//Modal
