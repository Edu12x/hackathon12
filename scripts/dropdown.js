export default class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector("button");
    this.ul = this.element.querySelector("ul");
    const allElements = document.querySelectorAll(".dropdown");
    this.button.onmouseenter = function () {
      this.closest("div").classList.add("is-active");
    };
    this.button.onmouseleave = function () {
      this.closest("div").classList.remove("is-active");
    };
    this.ul.onmouseenter = function () {
      this.closest("div").classList.add("is-active");
    };
    this.ul.onmouseleave = function () {
      this.closest("div").classList.remove("is-active");
    };
  }
}
