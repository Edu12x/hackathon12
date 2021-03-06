import Dropdown from "./scripts/dropdown.min.js";

const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(function (dropdown) {
  new Dropdown(dropdown);
});

import Collapse from "./scripts/collapse.min.js";
const collapse = document.querySelectorAll(".collapse");

collapse.forEach(function (collapse) {
  const arrow = collapse.querySelector("span");
  arrow.onclick = function () {
    new Collapse(collapse).openArrow();
  };
});

import Modal from "./scripts/modal.min.js";
const open_modal = document.querySelector(".js_open_modal");
const modal = document.querySelector(".js_modal");

open_modal.onclick = function () {
  new Modal(modal);
};
