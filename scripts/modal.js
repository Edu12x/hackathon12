export default class Modal {
  constructor(element) {
    this.element = element;
    this.close = this.element.querySelector(".js_modal_close");
    this.accept = this.element.querySelector(".js_modal_accept");
    this.cancel = this.element.querySelector(".js_modal_cancel");
    this.element.classList.add("is_active");
    this.close.onclick = function () {
      const opnmodal = this.parentElement.parentElement.parentElement;
      opnmodal.classList.remove("is_active");
    };
    this.cancel.onclick = function () {
      const opnmodal = this.parentElement.parentElement.parentElement;
      opnmodal.classList.remove("is_active");
    };
  }
}
